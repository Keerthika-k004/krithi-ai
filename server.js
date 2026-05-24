const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PRODUCTS = [
  { id: 1, name: "Crystal Embroidered Dress", cat: "fashion", price: 2499, rating: 4.7, sales: 342 },
  { id: 2, name: "Tailored Blazer & Trousers", cat: "fashion", price: 3999, rating: 4.8, sales: 215 },
  { id: 3, name: "Pure Cashmere Wrap", cat: "fashion", price: 4999, rating: 4.9, sales: 178 },
  { id: 5, name: "iPhone 15 Pro Max", cat: "mobiles", price: 119900, rating: 4.9, sales: 1234 },
  { id: 6, name: "Samsung Galaxy S24 Ultra", cat: "mobiles", price: 109999, rating: 4.7, sales: 890 },
];

const FAQ = [
  { q: "How do I track my order?", a: "Go to My Orders and use your tracking ID (KPXXXXIN)." },
  { q: "What is your return policy?", a: "30-day hassle-free returns from delivery. Free pickup." },
  { q: "What payment methods do you accept?", a: "Visa, Mastercard, UPI, Net Banking, and COD." },
];

function matchFAQ(query) {
  const q = query.toLowerCase();
  for (const faq of FAQ) {
    if (faq.q.toLowerCase().includes(q) || q.includes(faq.q.toLowerCase().slice(0, 10))) {
      return faq.a;
    }
  }
  return null;
}

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.json({ reply: "Please say something!" });

  const matched = matchFAQ(message);
  if (matched) return res.json({ reply: matched });

  const found = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(message.toLowerCase()) ||
    p.cat.includes(message.toLowerCase())
  );
  if (found.length) {
    const list = found.map(p => `${p.name} — ₹${p.price}`).join(', ');
    return res.json({ reply: `I found: ${list}`, suggestions: ["Track my order", "Return policy"] });
  }

  res.json({
    reply: "I can help with orders, returns, products, and more!",
    suggestions: ["Track my order", "Return policy", "Top products"]
  });
});

app.post('/api/prime', (req, res) => {
  const { query } = req.query || req.body.query || '';
  const q = query.toLowerCase();

  if (q.includes('top') || q.includes('popular')) {
    const top = [...PRODUCTS].sort((a, b) => b.sales - a.sales).slice(0, 5);
    return res.json({ reply: `Top products: ${top.map(p => `${p.name} (${p.sales} sold)`).join(', ')}` });
  }
  if (q.includes('revenue') || q.includes('total')) {
    const rev = PRODUCTS.reduce((s, p) => s + p.sales * p.price, 0);
    return res.json({ reply: `Total revenue: ₹${(rev / 100000).toFixed(2)}L across ${PRODUCTS.length} products` });
  }

  res.json({ reply: `Analyzed query: "${query}". Try asking about top products or revenue.` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`KRITHI AI backend running on http://localhost:${PORT}`);
});
