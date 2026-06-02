const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendOTP(to, otp) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log(`\n[EMAIL NOT CONFIGURED] OTP for ${to}: ${otp}\n`);
    console.log('Set SMTP_USER and SMTP_PASS in .env to send real emails.');
    return { sent: false, demo: true, otp };
  }
  try {
    await transporter.sendMail({
      from: `"KRITHI AI" <${process.env.SMTP_USER}>`,
      to,
      subject: 'Your OTP for KRITHI AI Admin',
      html: `<div style="font-family:Arial;max-width:480px;margin:0 auto;padding:24px;background:#f5f5f5"><div style="background:linear-gradient(135deg,#7C3AED,#A855F7);padding:20px;border-radius:10px 10px 0 0;text-align:center"><h1 style="color:#fff;margin:0;font-size:20px">KRITHI AI</h1></div><div style="background:#fff;padding:24px;border-radius:0 0 10px 10px"><p style="color:#333;font-size:14px">Your one-time verification code:</p><div style="background:#f0f0f0;padding:12px;border-radius:8px;text-align:center;font-size:32px;letter-spacing:8px;font-weight:700;color:#7C3AED;margin:16px 0">${otp}</div><p style="color:#666;font-size:12px">This code expires in 5 minutes. Do not share it with anyone.</p></div></div>`,
    });
    return { sent: true };
  } catch (err) {
    console.error('Failed to send email:', err.message);
    console.log(`\n[EMAIL FAILED] OTP for ${to}: ${otp}\n`);
    return { sent: false, demo: true, otp };
  }
}

module.exports = { sendOTP };
