const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    qty: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'], default: 'Processing' },
  tracking: String,
  user: { type: String, default: 'Guest' },
  shipping: {
    name: String,
    address: String,
    city: String,
    phone: String
  }
}, { timestamps: true });

orderSchema.index({ orderId: 1 });
orderSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Order', orderSchema);
