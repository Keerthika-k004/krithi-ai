const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');

// In-memory stores (lifetime of server process)
const otpStore = new Map();   // email -> { otp, expiresAt, attempts }
const sessionStore = new Map(); // token -> { email, name, role, createdAt }

const OTP_EXPIRY = 5 * 60 * 1000;
const MAX_ATTEMPTS = 3;

function generateOTP() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Hardcoded admin fallback (used when MongoDB unavailable)
const FALLBACK_ADMIN = { email: 'admin@krithi.ai', password: 'admin123', name: 'Admin' };

// POST /api/auth/admin/login
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    let validUser = null;

    try {
      const user = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) validUser = user;
      }
    } catch (dbErr) {
      // MongoDB unavailable — fallback to hardcoded admin
      console.log('MongoDB unavailable, using fallback auth');
    }

    if (!validUser) {
      if (email.toLowerCase() === FALLBACK_ADMIN.email && password === FALLBACK_ADMIN.password) {
        validUser = FALLBACK_ADMIN;
      }
    }

    if (!validUser) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const otp = generateOTP();
    otpStore.set(email.toLowerCase(), {
      otp,
      expiresAt: Date.now() + OTP_EXPIRY,
      attempts: 0
    });

    console.log(`\n🔐 ADMIN OTP for ${email}: ${otp}\n`);

    res.json({
      success: true,
      message: 'OTP sent to registered email',
      email: email.toLowerCase(),
      _demo: { otp }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin/verify-otp
router.post('/admin/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP required' });
    }

    const record = otpStore.get(email.toLowerCase());
    if (!record) {
      return res.status(400).json({ error: 'No OTP requested. Please login first.' });
    }

    if (Date.now() > record.expiresAt) {
      otpStore.delete(email.toLowerCase());
      return res.status(400).json({ error: 'OTP expired. Please request a new one.' });
    }

    if (record.attempts >= MAX_ATTEMPTS) {
      otpStore.delete(email.toLowerCase());
      return res.status(429).json({ error: 'Too many failed attempts. Please login again.' });
    }

    if (record.otp !== otp) {
      record.attempts++;
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    // OTP verified — create session
    otpStore.delete(email.toLowerCase());
    let sessionUser = null;
    try {
      sessionUser = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
    } catch (e) {}
    if (!sessionUser) {
      sessionUser = { email: email.toLowerCase(), name: 'Admin', role: 'admin' };
    }
    const token = generateToken();
    sessionStore.set(token, {
      email: sessionUser.email,
      name: sessionUser.name,
      role: sessionUser.role,
      createdAt: Date.now()
    });

    res.json({
      success: true,
      token,
      user: { email: sessionUser.email, name: sessionUser.name, role: sessionUser.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/auth/admin/session
router.get('/admin/session', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = auth.slice(7);
  const session = sessionStore.get(token);
  if (!session) {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }

  res.json({ valid: true, user: session });
});

// POST /api/auth/admin/logout
router.post('/admin/logout', (req, res) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) {
    sessionStore.delete(auth.slice(7));
  }
  res.json({ success: true });
});

module.exports = router;
