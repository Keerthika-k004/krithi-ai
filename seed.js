require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krithi-ai';

const PRODUCTS = [
  {id:1,name:"Crystal Embroidered Dress",cat:"fashion",price:2499,img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",desc:"Elegant crystal-embroidered dress for evening wear.",rating:4.7,sales:342,stock:28,brand:"Ziva",badge:"hot"},
  {id:2,name:"Tailored Blazer & Trousers",cat:"fashion",price:3999,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",desc:"Power-dressing ensemble with modern cut.",rating:4.8,sales:215,stock:15,brand:"Zara",badge:"new"},
  {id:3,name:"Pure Cashmere Wrap",cat:"fashion",price:4999,img:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=300&h=300&fit=crop",desc:"Luxurious cashmere wrap in rich merlot.",rating:4.9,sales:178,stock:10,brand:"Prada",badge:"hot"},
  {id:4,name:"Artisan Silk Scarf",cat:"fashion",price:1299,img:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop",desc:"Hand-painted silk scarf with botanical motifs.",rating:4.6,sales:423,stock:50,brand:"LV"},
  {id:5,name:"iPhone 15 Pro Max",cat:"mobiles",price:119900,img:"https://images.unsplash.com/photo-1599488615731-7e5c2823f3c5?w=300&h=300&fit=crop",desc:"A17 Pro chip, 48MP camera, Titanium design.",rating:4.9,sales:1234,stock:25,brand:"Apple",badge:"hot"},
  {id:6,name:"Samsung Galaxy S24 Ultra",cat:"mobiles",price:109999,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"Galaxy AI, 200MP camera, S Pen included.",rating:4.7,sales:890,stock:30,brand:"Samsung",badge:"new"},
  {id:7,name:"OnePlus 12",cat:"mobiles",price:69999,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Snapdragon 8 Gen 3, 100W charging.",rating:4.6,sales:678,stock:40,brand:"OnePlus"},
  {id:8,name:"Pixel 8 Pro",cat:"mobiles",price:79999,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Google Tensor G3, Magic Editor, 7yr updates.",rating:4.5,sales:445,stock:20,brand:"Google"},
  {id:9,name:"Retinol Night Serum",cat:"beauty",price:1299,img:"https://images.unsplash.com/photo-1570194065650-d99fb4b38e34?w=300&h=300&fit=crop",desc:"1% retinol + hyaluronic acid. Anti-aging.",rating:4.7,sales:1234,stock:80,brand:"L'Oreal"},
  {id:10,name:"Vitamin C Brightening Kit",cat:"beauty",price:1899,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"Serum + moisturizer + SPF 50.",rating:4.6,sales:890,stock:55,brand:"Neutrogena",badge:"hot"},
  {id:11,name:"Wireless Noise-Cancelling Headphones",cat:"electronics",price:7999,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",desc:"40hr battery, adaptive ANC, Hi-Res audio.",rating:4.8,sales:1023,stock:55,brand:"Sony",badge:"hot"},
  {id:12,name:"MacBook Air M3",cat:"electronics",price:114900,img:"https://images.unsplash.com/photo-1611186871348-b1f696febbb7?w=300&h=300&fit=crop",desc:"M3 chip, 18hr battery, 15.3\" Liquid Retina.",rating:4.9,sales:567,stock:18,brand:"Apple",badge:"new"},
  {id:13,name:"Smart Home Speaker Hub",cat:"electronics",price:5999,img:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=300&fit=crop",desc:"360° sound, smart home hub, voice assistant.",rating:4.6,sales:678,stock:33,brand:"Amazon"},
  {id:14,name:"Ultra-Slim Power Bank 20000mAh",cat:"electronics",price:1999,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",desc:"PD 65W fast charging, digital display.",rating:4.4,sales:1567,stock:120,brand:"Anker"},
  {id:15,name:"Ergonomic Office Chair",cat:"furniture",price:18999,img:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop",desc:"Mesh back, lumbar support, adjustable.",rating:4.8,sales:567,stock:15,brand:"Wakefit",badge:"new"},
  {id:16,name:"Mid-Century Desk Lamp",cat:"furniture",price:2499,img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",desc:"Brass and walnut, LED, dimmable.",rating:4.6,sales:345,stock:25,brand:"Philips"},
  {id:17,name:"Robot Vacuum & Mop Pro",cat:"appliances",price:24999,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",desc:"LiDAR navigation, 5000Pa suction.",rating:4.7,sales:445,stock:18,brand:"Dreame",badge:"hot"},
  {id:18,name:"Smart Air Purifier",cat:"appliances",price:14999,img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",desc:"HEPA H13, real-time PM2.5 display.",rating:4.5,sales:312,stock:22,brand:"Philips"},
  {id:19,name:"Performance Running Shoes",cat:"sports",price:4999,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",desc:"Carbon-fiber plate, Boost midsole, 210g.",rating:4.9,sales:891,stock:45,brand:"Nike",badge:"hot"},
  {id:20,name:"Pro Yoga Mat & Blocks",cat:"sports",price:1999,img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",desc:"Eco TPE mat with alignment lines.",rating:4.5,sales:445,stock:60,brand:"Puma"},
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared existing products');
    const products = PRODUCTS.map(({id, ...rest}) => rest);
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);
    await mongoose.disconnect();
    console.log('Done!');
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
