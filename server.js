const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');
const Order = require('./models/Order');
const Review = require('./models/Review');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krithi-ai';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const FAQ = [
  { q: "How do I track my order?", a: "Go to My Orders and use your tracking ID (KPXXXXIN)." },
  { q: "What is your return policy?", a: "30-day hassle-free returns from delivery. Free pickup." },
  { q: "What payment methods do you accept?", a: "Visa, Mastercard, UPI, Net Banking, and COD." },
  { q: "Can you recommend products?", a: "Our AI uses Collaborative Filtering to personalize recommendations!" },
  { q: "How do I cancel my order?", a: "You can cancel within 1 hour via My Orders." },
  { q: "What is KRITHI AI?", a: "India's AI-powered e-commerce platform with ML-driven shopping." },
];

function matchFAQ(query) {
  const q = query.toLowerCase();
  for (const faq of FAQ) {
    if (faq.q.toLowerCase().includes(q) || q.includes(faq.q.toLowerCase().slice(0, 10)))
      return faq.a;
  }
  return null;
}

app.get('/api/products', async (req, res) => {
  try {
    const { cat, brand, sort, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (cat && cat !== 'all') filter.cat = cat;
    if (brand) filter.brand = brand;
    let sortObj = { sales: -1 };
    if (sort === 'price-asc') sortObj = { price: 1 };
    else if (sort === 'price-desc') sortObj = { price: -1 };
    else if (sort === 'rating') sortObj = { rating: -1, sales: -1 };
    else if (sort === 'newest') sortObj = { createdAt: -1 };
    const products = await Product.find(filter).sort(sortObj).skip((page - 1) * limit).limit(Number(limit));
    const total = await Product.countDocuments(filter);
    res.json({ products, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ reply: "Please say something!" });
  const matched = matchFAQ(message);
  if (matched) return res.json({ reply: matched });
  try {
    const found = await Product.find({ $or: [
      { name: { $regex: message, $options: 'i' } },
      { cat: { $regex: message, $options: 'i' } },
      { brand: { $regex: message, $options: 'i' } },
    ]}).limit(5);
    if (found.length)
      return res.json({ reply: 'I found: ' + found.map(p => p.name + ' - ₹' + p.price).join(', '), suggestions: ["Track my order", "Return policy"] });
  } catch (e) {}
  res.json({ reply: "I can help with orders, returns, products, and more!", suggestions: ["Track my order", "Return policy", "Top products"] });
});

app.post('/api/prime', async (req, res) => {
  const query = (req.body.query || '').toLowerCase();
  try {
    if (query.includes('top') || query.includes('popular')) {
      const top = await Product.find().sort({ sales: -1 }).limit(5);
      return res.json({ reply: 'Top products: ' + top.map(p => p.name + ' (' + p.sales + ' sold)').join(', ') });
    }
    if (query.includes('revenue') || query.includes('total')) {
      const products = await Product.find();
      const rev = products.reduce((s, p) => s + p.sales * p.price, 0);
      return res.json({ reply: 'Total revenue: ₹' + (rev / 100000).toFixed(2) + 'L across ' + products.length + ' products' });
    }
    if (query.includes('low') || query.includes('stock')) {
      const low = await Product.find({ stock: { $lt: 20 } }).sort({ stock: 1 });
      return res.json({ reply: low.length ? 'Low stock: ' + low.map(p => p.name + ' (' + p.stock + ' left)').join(', ') : 'All products have sufficient stock.' });
    }
  } catch (e) {}
  res.json({ reply: 'Try asking about top products, revenue, or low stock.' });
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    order.orderId = 'KRITHI-' + (1000 + Math.floor(Math.random() * 9000));
    order.tracking = 'KP' + order.orderId.slice(-4) + 'IN';
    await order.save();
    res.status(201).json(order);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(50);
    res.json(orders);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/reviews/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => console.log('Backend running on http://localhost:' + PORT));
