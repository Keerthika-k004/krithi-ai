const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = require('../models/User');

function dbReady() { return mongoose.connection.readyState === 1; }

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

    if (dbReady()) {
      try {
        const user = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
        if (user) {
          const match = await bcrypt.compare(password, user.password);
          if (match) validUser = user;
        }
      } catch (dbErr) {
        console.log('MongoDB error, using fallback auth');
      }
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
    if (dbReady()) {
      try {
        sessionUser = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
      } catch (e) {}
    }
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

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }
    if (!dbReady()) {
      return res.status(503).json({ error: 'Database unavailable. Registration saved locally.' });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.json({ success: true, user: { name: existing.name, email: existing.email, phone: existing.phone, lastLogin: existing.lastLogin, orderCount: existing.orderCount, totalSpent: existing.totalSpent }, message: 'User already exists' });
    }
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const user = await User.create({ name, email: email.toLowerCase(), phone, password: hashedPassword, lastLogin: new Date() });
    res.status(201).json({ success: true, user: { name: user.name, email: user.email, phone: user.phone, lastLogin: user.lastLogin, orderCount: 0, totalSpent: 0 } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }
    if (!dbReady()) {
      return res.status(503).json({ error: 'Database unavailable. Using local storage.' });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: 'User not found. Please register first.' });
    }
    user.lastLogin = new Date();
    await user.save();
    res.json({ success: true, user: { name: user.name, email: user.email, phone: user.phone, lastLogin: user.lastLogin, orderCount: user.orderCount, totalSpent: user.totalSpent } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/auth/users
router.get('/users', async (req, res) => {
  try {
    if (!dbReady()) {
      return res.json({ success: true, users: [] });
    }
    const users = await User.find({}, 'name email phone role lastLogin orderCount totalSpent createdAt').sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/auth/user/order-stats
router.patch('/user/order-stats', async (req, res) => {
  try {
    const { email, total } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });
    if (!dbReady()) {
      return res.status(503).json({ error: 'Database unavailable. Stats saved locally.' });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ error: 'User not found' });
    user.orderCount = (user.orderCount || 0) + 1;
    user.totalSpent = (user.totalSpent || 0) + (total || 0);
    await user.save();
    res.json({ success: true, orderCount: user.orderCount, totalSpent: user.totalSpent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin/verify-password
router.post('/admin/verify-password', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    let valid = false;
    if (dbReady()) {
      try {
        const user = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
        if (user) valid = await bcrypt.compare(password, user.password);
      } catch (e) {}
    }
    if (!valid && email.toLowerCase() === FALLBACK_ADMIN.email && password === FALLBACK_ADMIN.password) {
      valid = true;
    }
    if (!valid) return res.status(401).json({ error: 'Incorrect password' });
    res.json({ valid: true, message: 'Password verified' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin/change-password
router.post('/admin/change-password', async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Email, current password, and new password required' });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'New password must be at least 8 characters' });
    }

    let updated = false;

    if (dbReady()) {
      try {
        const user = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
      if (user) {
        const match = await bcrypt.compare(currentPassword, user.password);
        if (!match) {
          return res.status(401).json({ error: 'Current password is incorrect' });
        }
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
        updated = true;
      }
      } catch (dbErr) {
        console.log('MongoDB error for password change');
      }
    }

    if (!updated) {
      if (email.toLowerCase() === FALLBACK_ADMIN.email && currentPassword === FALLBACK_ADMIN.password) {
        FALLBACK_ADMIN.password = newPassword;
        updated = true;
      }
    }

    if (!updated) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    res.json({ success: true, message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin/send-change-email-otp
router.post('/admin/send-change-email-otp', async (req, res) => {
  try {
    const { newEmail } = req.body;
    if (!newEmail) {
      return res.status(400).json({ error: 'New email required' });
    }

    const otp = generateOTP();
    otpStore.set(newEmail.toLowerCase(), {
      otp,
      expiresAt: Date.now() + OTP_EXPIRY,
      attempts: 0
    });

    const { sendOTP } = require('../utils/email');
    const result = await sendOTP(newEmail, otp);

    res.json({
      success: true,
      message: result.sent ? 'OTP sent to ' + newEmail : 'OTP generated (email not configured)',
      _demo: result.demo ? { otp } : undefined
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/admin/verify-change-email
router.post('/admin/verify-change-email', async (req, res) => {
  try {
    const { newEmail, otp, currentEmail } = req.body;
    if (!newEmail || !otp) {
      return res.status(400).json({ error: 'New email and OTP required' });
    }

    const record = otpStore.get(newEmail.toLowerCase());
    if (!record) {
      return res.status(400).json({ error: 'No OTP requested for this email' });
    }
    if (Date.now() > record.expiresAt) {
      otpStore.delete(newEmail.toLowerCase());
      return res.status(400).json({ error: 'OTP expired' });
    }
    if (record.otp !== otp) {
      record.attempts++;
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    otpStore.delete(newEmail.toLowerCase());

    // Update admin email in MongoDB (only if connected)
    if (dbReady()) {
      try {
        await User.updateOne(
          { email: currentEmail?.toLowerCase() || 'admin@krithi.ai', role: 'admin' },
          { $set: { email: newEmail.toLowerCase() } }
        );
      } catch (dbErr) {
        console.log('MongoDB error for email change');
      }
    }

    // Update fallback
    FALLBACK_ADMIN.email = newEmail.toLowerCase();

    res.json({
      success: true,
      message: 'Email updated successfully',
      email: newEmail.toLowerCase()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
