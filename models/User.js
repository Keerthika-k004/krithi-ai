const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: String,
  phone: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  vector: { type: [Number], default: [] },
  lastLogin: Date,
  orderCount: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
