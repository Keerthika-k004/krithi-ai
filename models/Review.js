const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: { type: String, required: true },
  user: { type: String, default: 'Guest' },
  text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 }
}, { timestamps: true });

reviewSchema.index({ product: 1, createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);
