const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cat: { type: String, required: true },
  price: { type: Number, required: true },
  img: String,
  desc: String,
  rating: { type: Number, default: 4.0 },
  sales: { type: Number, default: 0 },
  stock: { type: Number, default: 10 },
  brand: String,
  badge: String,
  mrp: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  features: [String],
  reviewsCount: { type: Number, default: 0 }
}, { timestamps: true });

productSchema.index({ cat: 1 });
productSchema.index({ price: 1 });
productSchema.index({ sales: -1 });

module.exports = mongoose.model('Product', productSchema);
