// ---- Product Data ----
const PRODUCTS=[{id:1,name:"Crystal Embroidered Dress",cat:"fashion",price:2499,img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",desc:"Elegant crystal-embroidered dress for evening wear.",rating:4.7,sales:342,stock:28,brand:"Ziva",badge:"hot"},{id:2,name:"Tailored Blazer & Trousers",cat:"fashion",price:3999,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",desc:"Power-dressing ensemble with modern cut.",rating:4.8,sales:215,stock:15,brand:"Zara",badge:"new"},{id:3,name:"Pure Cashmere Wrap",cat:"fashion",price:4999,img:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=300&h=300&fit=crop",desc:"Luxurious cashmere wrap in rich merlot.",rating:4.9,sales:178,stock:10,brand:"Prada",badge:"hot"},{id:4,name:"Artisan Silk Scarf",cat:"fashion",price:1299,img:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop",desc:"Hand-painted silk scarf with botanical motifs.",rating:4.6,sales:423,stock:50,brand:"LV"},{id:5,name:"iPhone 15 Pro Max",cat:"mobiles",price:119900,img:"https://images.unsplash.com/photo-1599488615731-7e5c2823f3c5?w=300&h=300&fit=crop",desc:"A17 Pro chip, 48MP camera, Titanium design.",rating:4.9,sales:1234,stock:25,brand:"Apple",badge:"hot"},{id:6,name:"Samsung Galaxy S24 Ultra",cat:"mobiles",price:109999,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"Galaxy AI, 200MP camera, S Pen included.",rating:4.7,sales:890,stock:30,brand:"Samsung",badge:"new"},{id:7,name:"OnePlus 12",cat:"mobiles",price:69999,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Snapdragon 8 Gen 3, 100W charging.",rating:4.6,sales:678,stock:40,brand:"OnePlus"},{id:8,name:"Pixel 8 Pro",cat:"mobiles",price:79999,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Google Tensor G3, Magic Editor, 7yr updates.",rating:4.5,sales:445,stock:20,brand:"Google"},{id:9,name:"Retinol Night Serum",cat:"beauty",price:1299,img:"https://images.unsplash.com/photo-1570194065650-d99fb4b38e34?w=300&h=300&fit=crop",desc:"1% retinol + hyaluronic acid. Anti-aging.",rating:4.7,sales:1234,stock:80,brand:"L'Oreal"},{id:10,name:"Vitamin C Brightening Kit",cat:"beauty",price:1899,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"Serum + moisturizer + SPF 50.",rating:4.6,sales:890,stock:55,brand:"Neutrogena",badge:"hot"},{id:11,name:"Wireless Noise-Cancelling Headphones",cat:"electronics",price:7999,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",desc:"40hr battery, adaptive ANC, Hi-Res audio.",rating:4.8,sales:1023,stock:55,brand:"Sony",badge:"hot"},{id:12,name:"MacBook Air M3",cat:"electronics",price:114900,img:"https://images.unsplash.com/photo-1611186871348-b1f696febbb7?w=300&h=300&fit=crop",desc:"M3 chip, 18hr battery, 15.3\" Liquid Retina.",rating:4.9,sales:567,stock:18,brand:"Apple",badge:"new"},{id:13,name:"Smart Home Speaker Hub",cat:"electronics",price:5999,img:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=300&fit=crop",desc:"360° sound, smart home hub, voice assistant.",rating:4.6,sales:678,stock:33,brand:"Amazon"},{id:14,name:"Ultra-Slim Power Bank 20000mAh",cat:"electronics",price:1999,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",desc:"PD 65W fast charging, digital display.",rating:4.4,sales:1567,stock:120,brand:"Anker"},{id:15,name:"Ergonomic Office Chair",cat:"furniture",price:18999,img:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop",desc:"Mesh back, lumbar support, adjustable.",rating:4.8,sales:567,stock:15,brand:"Wakefit",badge:"new"},{id:16,name:"Mid-Century Desk Lamp",cat:"furniture",price:2499,img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",desc:"Brass and walnut, LED, dimmable.",rating:4.6,sales:345,stock:25,brand:"Philips"},{id:17,name:"Robot Vacuum & Mop Pro",cat:"appliances",price:24999,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",desc:"LiDAR navigation, 5000Pa suction.",rating:4.7,sales:445,stock:18,brand:"Dreame",badge:"hot"},{id:18,name:"Smart Air Purifier",cat:"appliances",price:14999,img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",desc:"HEPA H13, real-time PM2.5 display.",rating:4.5,sales:312,stock:22,brand:"Philips"},{id:19,name:"Performance Running Shoes",cat:"sports",price:4999,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",desc:"Carbon-fiber plate, Boost midsole, 210g.",rating:4.9,sales:891,stock:45,brand:"Nike",badge:"hot"},{id:20,name:"Pro Yoga Mat & Blocks",cat:"sports",price:1999,img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",desc:"Eco TPE mat with alignment lines.",rating:4.5,sales:445,stock:60,brand:"Puma"},{id:21,name:"Organic Coffee Beans - Colombia",cat:"food",price:499,img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",desc:"Single-origin Colombian, medium roast.",rating:4.8,sales:2034,stock:200,brand:"Bru"},{id:22,name:"Premium Matcha Powder",cat:"food",price:799,img:"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=300&h=300&fit=crop",desc:"Ceremonial grade Japanese matcha.",rating:4.5,sales:1567,stock:150,brand:"Matcha"},{id:23,name:"Building Blocks 1000pc",cat:"toys",price:1499,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"Creative building set for ages 3+.",rating:4.6,sales:890,stock:75,brand:"Lego",badge:"new"},{id:24,name:"Educational Science Kit",cat:"toys",price:999,img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",desc:"50+ experiments for young scientists.",rating:4.7,sales:567,stock:40,brand:"SmartLab"},{id:101,name:"Casuals For Men(Blue)",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",desc:"Premium casual footwear for men.",rating:3.8,sales:27928,stock:19,brand:"Aqualite",badge:"new"},{id:102,name:"Women Black Flats Sandal",cat:"fashion",price:499,img:"https://images.unsplash.com/photo-1608236415055-3c6e1f5db483?w=300&h=300&fit=crop",desc:"Comfortable black flats sandal for women.",rating:3.9,sales:3015,stock:44,brand:"Nike",badge:"hot"},{id:103,name:"Women Gold Wedges Sandal",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",desc:"Stylish gold wedges for women.",rating:3.9,sales:449,stock:24,brand:"Campus",badge:"hot"},{id:104,name:"Men's Formal High Heel Boots",cat:"fashion",price:2999,img:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=300&fit=crop",desc:"Height increasing formal boots for men.",rating:3.9,sales:393,stock:13,brand:"Reebok"},{id:105,name:"Loafers For Men(Tan)",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop",desc:"Classic tan loafers for men.",rating:3.9,sales:2423,stock:44,brand:"Lee Cooper",badge:"hot"},{id:106,name:"Canvas Shoes For Men(Black)",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=300&fit=crop",desc:"Casual black canvas shoes.",rating:3.9,sales:541,stock:43,brand:"Aqualite",badge:"new"},{id:107,name:"Combo Pack Casual Sneakers",cat:"fashion",price:2400,img:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=300&h=300&fit=crop",desc:"2-pack casual slip-on sneakers.",rating:3.9,sales:824,stock:11,brand:"Aqualite"},{id:108,name:"ARYA Bellies For Women(Purple)",cat:"fashion",price:4299,img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=300&fit=crop",desc:"Elegant purple bellies footwear.",rating:4.2,sales:301,stock:31,brand:"Woodland",badge:"new"},{id:109,name:"Comfortable Fashion Sandals",cat:"fashion",price:499,img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",desc:"Latest collection comfortable sandals.",rating:3.9,sales:1816,stock:42,brand:"Red Chief",badge:"hot"},{id:110,name:"Moccassin Slip On(Black)",cat:"fashion",price:2299,img:"https://images.unsplash.com/photo-1584735175096-19a2405f10c4?w=300&h=300&fit=crop",desc:"Black moccassin slip-on shoes.",rating:3.8,sales:3066,stock:15,brand:"Reebok",badge:"hot"},{id:111,name:"Women Black Wedges Sandal",cat:"fashion",price:279,img:"https://images.unsplash.com/photo-1591561582301-7e0af0ef140e?w=300&h=300&fit=crop",desc:"Affordable black wedges sandal.",rating:4.2,sales:3048,stock:34,brand:"Nike",badge:"hot"},{id:112,name:"Office Casuals For Men",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=300&h=300&fit=crop",desc:"Long office wear corporate casuals.",rating:3.9,sales:14247,stock:23,brand:"Lee Cooper",badge:"new"},{id:113,name:"Women Black Heels Sandal",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1608236415055-3c6e1f5db483?w=300&h=300&fit=crop",desc:"Classic black heels for women.",rating:3.7,sales:508,stock:26,brand:"Adidas",badge:"hot"},{id:114,name:"Denill Sneakers For Women",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",desc:"Ankle length sneakers for women.",rating:4.1,sales:6806,stock:12,brand:"Asian",badge:"new"},{id:115,name:"Women Grey Heels Sandal",cat:"fashion",price:1990,img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=300&h=300&fit=crop",desc:"Elegant grey heels sandal.",rating:4.2,sales:92,stock:29,brand:"Metro"},{id:116,name:"Pink Casual Shoes For Girls",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop",desc:"Perfect stylish girls casual sneakers.",rating:4.2,sales:509,stock:13,brand:"Red Chief",badge:"hot"},{id:117,name:"Running Shoes For Women",cat:"sports",price:3999,img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",desc:"Concave running shoes for women.",rating:4.3,sales:367,stock:26,brand:"Red Chief",badge:"hot"},{id:118,name:"SFG-23 Slippers",cat:"fashion",price:319,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",desc:"Comfortable casual slippers.",rating:4.1,sales:12936,stock:24,brand:"Lee Cooper",badge:"hot"},{id:119,name:"Leather Jalsa Jutis For Men",cat:"fashion",price:599,img:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=300&fit=crop",desc:"Dark brown leather jutis.",rating:3.9,sales:499,stock:25,brand:"Nike",badge:"hot"},{id:120,name:"Women Grey Sports Sandal",cat:"fashion",price:1199,img:"https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop",desc:"Comfortable grey sports sandal.",rating:4.7,sales:323,stock:30,brand:"Sparx"},{id:121,name:"Women Sports Sandal(Orange)",cat:"fashion",price:799,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",desc:"Grey and orange sports sandal.",rating:4.3,sales:212,stock:41,brand:"Woodland",badge:"hot"},{id:122,name:"Running Shoes For Men(White)",cat:"sports",price:999,img:"https://images.unsplash.com/photo-1608236415055-3c6e1f5db483?w=300&h=300&fit=crop",desc:"Casual gym and training running shoes.",rating:4.2,sales:2430,stock:19,brand:"Puma",badge:"hot"},{id:123,name:"Suede Sneakers For Women",cat:"fashion",price:6999,img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",desc:"Luxury suede snake sneakers for women.",rating:4.4,sales:290,stock:24,brand:"Campus",badge:"new"},{id:124,name:"Denill Women's Sneaker",cat:"fashion",price:449,img:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=300&fit=crop",desc:"Comfortable women's sneaker.",rating:3.9,sales:563,stock:42,brand:"Nike",badge:"hot"},{id:125,name:"Office Casuals For Men(Tan)",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop",desc:"Long office wear corporate casuals.",rating:3.9,sales:14253,stock:44,brand:"Metro"},{id:126,name:"Pacer Sneakers For Women",cat:"fashion",price:5499,img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=300&fit=crop",desc:"Pacer next sneakers for women grey.",rating:4.3,sales:311,stock:36,brand:"Metro",badge:"new"},{id:127,name:"Casual Partywear Sandals",cat:"fashion",price:1399,img:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=300&h=300&fit=crop",desc:"Synthetic leather casual partywear sandals.",rating:4.2,sales:1256,stock:19,brand:"Bata",badge:"hot"},{id:128,name:"Monk Strap For Men(Brown)",cat:"fashion",price:4595,img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=300&fit=crop",desc:"Brown monk strap footwear for men.",rating:4.2,sales:498,stock:44,brand:"Nike"},{id:129,name:"Running Shoes For Men(Green)",cat:"sports",price:999,img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",desc:"Lightweight running shoes for men.",rating:4.1,sales:57372,stock:38,brand:"Bata",badge:"new"},{id:130,name:"Men Brown Sandal",cat:"fashion",price:349,img:"https://images.unsplash.com/photo-1584735175096-19a2405f10c4?w=300&h=300&fit=crop",desc:"Comfortable brown sandal for men.",rating:4.6,sales:488,stock:39,brand:"Lancer",badge:"hot"},{id:131,name:"Casuals For Men(Navy, Orange)",cat:"fashion",price:1399,img:"https://images.unsplash.com/photo-1591561582301-7e0af0ef140e?w=300&h=300&fit=crop",desc:"SM-484 casual shoes for men.",rating:4.2,sales:2958,stock:29,brand:"Metro"},{id:132,name:"Men Hawaii Flip Flops",cat:"fashion",price:499,img:"https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=300&h=300&fit=crop",desc:"Comfortable hawaii flip flops.",rating:3.7,sales:13702,stock:7,brand:"Asian",badge:"hot"},{id:133,name:"Gold Sandals For Women",cat:"fashion",price:499,img:"https://images.unsplash.com/photo-1608236415055-3c6e1f5db483?w=300&h=300&fit=crop",desc:"Elegant gold sandals for women.",rating:3.9,sales:111,stock:20,brand:"Bata",badge:"hot"},{id:134,name:"Women Multicolor Flats Sandal",cat:"fashion",price:998,img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",desc:"Multicolor flats sandal for women.",rating:3.9,sales:304,stock:44,brand:"Reebok",badge:"new"},{id:135,name:"Women Beige Heels Sandal",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=300&h=300&fit=crop",desc:"Beige heels sandal for women.",rating:3.5,sales:473,stock:28,brand:"Red Chief",badge:"new"},{id:136,name:"Men Blue Clogs Sandal",cat:"fashion",price:1299,img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop",desc:"Blue clogs sandal for men.",rating:3.7,sales:3691,stock:35,brand:"Campus",badge:"hot"},{id:137,name:"Women Brown Wedges Sandal",cat:"fashion",price:799,img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",desc:"Brown wedges sandal for women.",rating:4,sales:561,stock:31,brand:"Puma",badge:"hot"},{id:138,name:"Women Green Flats Sandal",cat:"fashion",price:999,img:"https://images.unsplash.com/photo-1600185365778-7875a359b1c2?w=300&h=300&fit=crop",desc:"Green flats sandal for women.",rating:4.1,sales:607,stock:16,brand:"Sparx",badge:"new"},{id:139,name:"Java IDP Flip Flops",cat:"fashion",price:2299,img:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=300&fit=crop",desc:"Comfortable java flip flops.",rating:4.1,sales:679,stock:12,brand:"Lee Cooper",badge:"hot"},{id:140,name:"Rajasthani Belly Jutis",cat:"fashion",price:880,img:"https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop",desc:"Latest morpankh design rajasthani jutis.",rating:4,sales:186,stock:36,brand:"Red Chief",badge:"hot"},{id:141,name:"LG OLED C3 65\"",cat:"electronics",price:149999,img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",desc:"OLED evo, α9 Gen6 AI, Dolby Atmos.",rating:4.8,sales:345,stock:12,brand:"LG",badge:"hot"},{id:142,name:"Xiaomi 14 Pro",cat:"mobiles",price:69999,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Leica optics, Snapdragon 8 Gen 3, 120W.",rating:4.6,sales:567,stock:22,brand:"Xiaomi",badge:"new"},{id:143,name:"Canon EOS R6 Mark II",cat:"electronics",price:219999,img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",desc:"24.2MP, 4K 60p, IBIS, Dual Pixel AF.",rating:4.9,sales:234,stock:8,brand:"Canon",badge:"hot"},{id:144,name:"The Great Gatsby - Special Edition",cat:"books",price:599,img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",desc:"Classic novel with annotated notes and cover art.",rating:4.7,sales:1890,stock:120,brand:"Penguin",badge:"new"},{id:145,name:"Organic Green Tea Collection",cat:"food",price:349,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",desc:"Premium green tea blend with jasmine and mint.",rating:4.6,sales:3456,stock:200,brand:"Tata"},{id:146,name:"Smart LED Desk Lamp",cat:"home",price:2999,img:"https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=300&h=300&fit=crop",desc:"Touch control, 3 brightness levels, USB charging.",rating:4.5,sales:1234,stock:65,brand:"Philips",badge:"hot"},{id:147,name:"Hyaluronic Acid Face Cream",cat:"beauty",price:899,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Deep hydration with hyaluronic acid + vitamin E.",rating:4.6,sales:2345,stock:90,brand:"Cetaphil",badge:"hot"},{id:148,name:"Remote Control Racing Car",cat:"toys",price:2499,img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",desc:"4WD off-road RC car with rechargeable battery.",rating:4.4,sales:890,stock:45,brand:"Hot Wheels"},{id:149,name:"Resistance Bands Set (5-Pack)",cat:"sports",price:599,img:"https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop",desc:"5 levels of resistance for home workouts.",rating:4.3,sales:4567,stock:150,brand:"Puma"},{id:150,name:"Portable Bluetooth Speaker",cat:"electronics",price:3999,img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",desc:"IPX7 waterproof, 20hr battery, bass boost.",rating:4.7,sales:2100,stock:55,brand:"JBL",badge:"hot"},{id:151,name:"Samsung Galaxy Watch 6",cat:"electronics",price:29999,img:"https://images.unsplash.com/photo-1546868871-af0de0ae72d3?w=300&h=300&fit=crop",desc:"Sapphire crystal, ECG, body composition, 40mm.",rating:4.6,sales:789,stock:30,brand:"Samsung",badge:"new"},{id:152,name:"Air Purifying Indoor Plant",cat:"home",price:799,img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop",desc:"Snake plant in ceramic pot, air-purifying, low maintenance.",rating:4.8,sales:5678,stock:100,brand:"Ugaoo",badge:"hot"},{id:153,name:"OnePlus Nord Buds 3 Pro",cat:"mobiles",price:3299,img:"https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=300&h=300&fit=crop",desc:"Active noise cancellation, 38hr battery, fast charge.",rating:4.5,sales:3456,stock:80,brand:"OnePlus"},{id:154,name:"Atomic Habits - Special Edition",cat:"books",price:399,img:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=300&fit=crop",desc:"Life-changing habits framework with practical sheets.",rating:4.9,sales:5678,stock:200,brand:"Penguin",badge:"hot"},{id:155,name:"The Alchemist - 25th Anniversary",cat:"books",price:499,img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop",desc:"Paulo Coelho's timeless fable about following dreams.",rating:4.8,sales:4321,stock:180,brand:"HarperCollins",badge:"hot"},{id:156,name:"Sapiens: A Brief History of Humankind",cat:"books",price:649,img:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=300&fit=crop",desc:"Yuval Harari's groundbreaking history of humanity.",rating:4.7,sales:2890,stock:150,brand:"Vintage"},{id:157,name:"Rich Dad Poor Dad",cat:"books",price:349,img:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop",desc:"Robert Kiyosaki's personal finance classic.",rating:4.6,sales:8901,stock:250,brand:"Plata"},{id:158,name:"Think and Grow Rich",cat:"books",price:299,img:"https://images.unsplash.com/photo-1474932430478-367dbb6834c1?w=300&h=300&fit=crop",desc:"Napoleon Hill's timeless principles of success.",rating:4.5,sales:6789,stock:220,brand:"Penguin"},{id:159,name:"The Psychology of Money",cat:"books",price:449,img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop",desc:"Morgan Housel on how to think about wealth.",rating:4.8,sales:3456,stock:190,brand:"Jaico",badge:"new"},{id:160,name:"1984 - Deluxe Edition",cat:"books",price:399,img:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=300&fit=crop",desc:"George Orwell's dystopian masterpiece.",rating:4.7,sales:2345,stock:160,brand:"Penguin"},{id:161,name:"The Art of War - Illustrated",cat:"books",price:249,img:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=300&fit=crop",desc:"Sun Tzu's ancient strategy with modern commentary.",rating:4.6,sales:4567,stock:210,brand:"HarperCollins",badge:"new"},{id:162,name:"Premium Assorted Dry Fruits",cat:"food",price:599,img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",desc:"Almonds, cashews, pistachios and walnuts mix.",rating:4.7,sales:5678,stock:300,brand:"Happilo",badge:"hot"},{id:163,name:"Belgian Dark Chocolate Box",cat:"food",price:899,img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop",desc:"72 per cent cocoa dark chocolate assortment.",rating:4.8,sales:3456,stock:180,brand:"Lindt",badge:"hot"},{id:164,name:"Pure Organic Honey Jar",cat:"food",price:449,img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop",desc:"Raw wild forest honey, 100 per cent pure.",rating:4.6,sales:2345,stock:250,brand:"Dabur"},{id:165,name:"Organic Quinoa White",cat:"food",price:349,img:"https://images.unsplash.com/photo-1482046466684-10d3f5e1c5d4?w=300&h=300&fit=crop",desc:"Premium organic white quinoa, 1kg pack.",rating:4.5,sales:1890,stock:200,brand:"Tata"},{id:166,name:"Trail Mix Nuts and Berries",cat:"food",price:399,img:"https://images.unsplash.com/photo-1604068549290-dea0e4a3058e?w=300&h=300&fit=crop",desc:"Cranberries, blueberries, almonds and pumpkin seeds.",rating:4.7,sales:4567,stock:280,brand:"Happilo",badge:"hot"},{id:167,name:"Premium Saffron Kashmir",cat:"food",price:1299,img:"https://images.unsplash.com/photo-1596040033229-98253da5b96c?w=300&h=300&fit=crop",desc:"Pure Kashmiri saffron, A plus plus grade.",rating:4.9,sales:1234,stock:80,brand:"Kashmir",badge:"new"},{id:168,name:"Almond Milk Powder",cat:"food",price:299,img:"https://images.unsplash.com/photo-1550583724-b2692b85b7b6?w=300&h=300&fit=crop",desc:"Plant-based almond milk powder, 500g.",rating:4.4,sales:2100,stock:190,brand:"Soyumm"},{id:169,name:"Herbal Tea Collection 30 Bags",cat:"food",price:249,img:"https://images.unsplash.com/photo-1563822249367-4ef5be654e35?w=300&h=300&fit=crop",desc:"Chamomile, peppermint, tulsi and green tea.",rating:4.6,sales:5678,stock:320,brand:"Tetley",badge:"hot"},{id:170,name:"Scented Soy Candle Set",cat:"home",price:699,img:"https://images.unsplash.com/photo-1602874801007-bd36e8c6e1e0?w=300&h=300&fit=crop",desc:"Vanilla and lavender scented soy candles, set of 3.",rating:4.5,sales:2345,stock:120,brand:"Moksh"},{id:171,name:"Cotton King Bedsheet Set",cat:"home",price:1499,img:"https://images.unsplash.com/photo-1522771739010-6c2e7f6f3d4b?w=300&h=300&fit=crop",desc:"400 TC pure cotton bedsheet with 2 pillow covers.",rating:4.7,sales:3456,stock:90,brand:"Bombay Dyeing",badge:"hot"},{id:172,name:"Decorative Wall Clock",cat:"home",price:1299,img:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop",desc:"Silent mechanism, wood frame, 12 inch.",rating:4.4,sales:1234,stock:65,brand:"Ajanta"},{id:173,name:"Bamboo Storage Baskets 3-Pack",cat:"home",price:999,img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop",desc:"Handwoven bamboo baskets for organization.",rating:4.6,sales:1890,stock:100,brand:"StoreMore",badge:"new"},{id:174,name:"Luxury Bath Towel Set",cat:"home",price:1999,img:"https://images.unsplash.com/photo-1603583885074-3f0bc25e1d8c?w=300&h=300&fit=crop",desc:"600 GSM Egyptian cotton towel set of 4.",rating:4.8,sales:2100,stock:75,brand:"Springfit",badge:"hot"},{id:175,name:"Ultrasonic Aroma Diffuser",cat:"home",price:1499,img:"https://images.unsplash.com/photo-1559814589-4f4f2d1cb5b6?w=300&h=300&fit=crop",desc:"300ml capacity, LED lights, auto shut-off.",rating:4.5,sales:1567,stock:85,brand:"Moksh"},{id:176,name:"Collage Photo Frame Set",cat:"home",price:599,img:"https://images.unsplash.com/photo-1511405277-ee2772341b6e?w=300&h=300&fit=crop",desc:"Set of 9 collage frames for wall decor.",rating:4.3,sales:890,stock:110,brand:"Decor"},{id:177,name:"Decorative Cushion Cover Set",cat:"home",price:499,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Cotton embroidered cushion covers, set of 4.",rating:4.4,sales:1678,stock:130,brand:"HomeTown",badge:"new"},{id:178,name:"Foldable Study Table",cat:"furniture",price:3999,img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=300&fit=crop",desc:"Compact foldable table with storage shelf.",rating:4.5,sales:2345,stock:40,brand:"Wakefit",badge:"hot"},{id:179,name:"5-Tier Bookshelf",cat:"furniture",price:5999,img:"https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300&h=300&fit=crop",desc:"Engineered wood, 5 shelves, 150kg capacity.",rating:4.6,sales:1234,stock:25,brand:"Urban Ladder",badge:"new"},{id:180,name:"Comfort Recliner Chair",cat:"furniture",price:24999,img:"https://images.unsplash.com/photo-1506439773649-6e0eb8c5b3a6?w=300&h=300&fit=crop",desc:"Premium leatherette recliner with footrest.",rating:4.8,sales:567,stock:12,brand:"Furniture Kart",badge:"hot"},{id:181,name:"Wooden Coat Rack Stand",cat:"furniture",price:2499,img:"https://images.unsplash.com/photo-1599350369956-7420c0c85b56?w=300&h=300&fit=crop",desc:"Solid wood coat rack with 8 hooks.",rating:4.4,sales:890,stock:35,brand:"Woodkraft"},{id:182,name:"Office Desk with Drawers",cat:"furniture",price:8999,img:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300&h=300&fit=crop",desc:"Spacious desk with 3 drawers and cable management.",rating:4.7,sales:678,stock:18,brand:"Wakefit",badge:"new"},{id:183,name:"Accent Armchair",cat:"furniture",price:12999,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Velvet upholstered armchair with gold legs.",rating:4.6,sales:445,stock:15,brand:"Urban Ladder",badge:"hot"},{id:184,name:"Queen Size Bed Frame",cat:"furniture",price:18999,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop",desc:"Upholstered queen bed frame with headboard.",rating:4.7,sales:345,stock:10,brand:"Wakefit",badge:"new"},{id:185,name:"Shoe Rack Cabinet",cat:"furniture",price:3999,img:"https://images.unsplash.com/photo-1550226891-9d1c1b3e5a7b?w=300&h=300&fit=crop",desc:"2-door shoe rack, holds 12 pairs.",rating:4.3,sales:2100,stock:45,brand:"Urban Ladder"},{id:186,name:"Air Fryer 5.5L",cat:"appliances",price:4999,img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",desc:"Oil-free cooking, 8 presets, digital touch.",rating:4.6,sales:3456,stock:50,brand:"Philips",badge:"hot"},{id:187,name:"Mixer Grinder 750W",cat:"appliances",price:3499,img:"https://images.unsplash.com/photo-1573619288572-86b8a1e2fa6f?w=300&h=300&fit=crop",desc:"3 stainless steel jars, super silent motor.",rating:4.5,sales:5678,stock:60,brand:"Bajaj"},{id:188,name:"Electric Kettle 1.5L",cat:"appliances",price:1299,img:"https://images.unsplash.com/photo-1570222094111-d3d0b6b5f0b5?w=300&h=300&fit=crop",desc:"Stainless steel, auto shut-off, 1500W.",rating:4.4,sales:7890,stock:100,brand:"Prestige",badge:"hot"},{id:189,name:"Steam Iron with Spray",cat:"appliances",price:1499,img:"https://images.unsplash.com/photo-1585654911573-8c9b0e3e1a2f?w=300&h=300&fit=crop",desc:"Non-stick soleplate, 1500W, anti-drip.",rating:4.3,sales:4567,stock:80,brand:"Philips"},{id:190,name:"Solo Microwave Oven 20L",cat:"appliances",price:5999,img:"https://images.unsplash.com/photo-1574292247270-3f3c70fd6d9c?w=300&h=300&fit=crop",desc:"20L capacity, 10 power levels, defrost.",rating:4.5,sales:2345,stock:35,brand:"Samsung",badge:"new"},{id:191,name:"Induction Cooktop",cat:"appliances",price:2499,img:"https://images.unsplash.com/photo-1585654911573-8c9b0e3e1a2f?w=300&h=300&fit=crop",desc:"2000W, 10 presets, auto pan detection.",rating:4.4,sales:5678,stock:70,brand:"Prestige",badge:"hot"},{id:192,name:"Coffee Maker Machine",cat:"appliances",price:3999,img:"https://images.unsplash.com/photo-1568051243853-7f03e4b1c0f5?w=300&h=300&fit=crop",desc:"Drip coffee maker, 12 cups, programmable.",rating:4.6,sales:1234,stock:25,brand:"Nestle"},{id:193,name:"Immersion Rod Heater",cat:"appliances",price:699,img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop",desc:"1500W, copper coating, thermal fuse.",rating:4.2,sales:3456,stock:120,brand:"Bajaj"},{id:194,name:"Matte Lipstick Collection 6-Pack",cat:"beauty",price:899,img:"https://images.unsplash.com/photo-1583241807894-8ac6c8c6a8b6?w=300&h=300&fit=crop",desc:"Long-lasting matte shades for every occasion.",rating:4.5,sales:3456,stock:150,brand:"Maybelline",badge:"hot"},{id:195,name:"Argan Oil Shampoo 500ml",cat:"beauty",price:599,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Moroccan argan oil infused, sulfate-free.",rating:4.6,sales:5678,stock:200,brand:"L'Oreal",badge:"hot"},{id:196,name:"Professional Eyeshadow Palette",cat:"beauty",price:1299,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"24 highly pigmented shades with mirror.",rating:4.7,sales:2100,stock:80,brand:"Huda Beauty",badge:"new"},{id:197,name:"Body Lotion SPF 30 400ml",cat:"beauty",price:449,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Hydrating body lotion with sun protection.",rating:4.4,sales:7890,stock:180,brand:"Vaseline"},{id:198,name:"Facial Cleansing Brush",cat:"beauty",price:1999,img:"https://images.unsplash.com/photo-1570194065650-d99fb4b38e34?w=300&h=300&fit=crop",desc:"Sonic cleansing brush with 3 speed modes.",rating:4.5,sales:1234,stock:60,brand:"Foreo",badge:"new"},{id:199,name:"Designer Perfume Gift Set",cat:"beauty",price:2999,img:"https://images.unsplash.com/photo-1592945403407-9c8b930b1f8a?w=300&h=300&fit=crop",desc:"EDP set of 3 designer fragrances.",rating:4.8,sales:890,stock:40,brand:"Armani",badge:"hot"},{id:200,name:"Nail Art Combo Kit",cat:"beauty",price:499,img:"https://images.unsplash.com/photo-1583241807894-8ac6c8c6a8b6?w=300&h=300&fit=crop",desc:"12 colors plus top coat plus nail art tools.",rating:4.3,sales:3456,stock:200,brand:"Colorbar"},{id:201,name:"Beard Grooming Kit",cat:"beauty",price:799,img:"https://images.unsplash.com/photo-1585744673678-6c4e6d5b3a2f?w=300&h=300&fit=crop",desc:"Beard oil, balm, brush and scissors set.",rating:4.5,sales:2345,stock:100,brand:"Beardo",badge:"hot"},{id:202,name:"Giant Plush Teddy Bear",cat:"toys",price:1999,img:"https://images.unsplash.com/photo-1566576919828-5a8d2e4b6f7c?w=300&h=300&fit=crop",desc:"3ft super soft plush teddy bear.",rating:4.8,sales:3456,stock:80,brand:"Disney",badge:"hot"},{id:203,name:"Rubik's Cube Speed 3x3",cat:"toys",price:499,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"Speed cube with smooth rotation mechanism.",rating:4.5,sales:5678,stock:200,brand:"Gan"},{id:204,name:"Monopoly Board Game",cat:"toys",price:899,img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",desc:"Classic family board game with digital banking.",rating:4.6,sales:2345,stock:90,brand:"Hasbro",badge:"new"},{id:205,name:"Art Set with Wooden Easel",cat:"toys",price:1499,img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",desc:"50-piece art set including paints, brushes and easel.",rating:4.7,sales:1234,stock:45,brand:"Crayola",badge:"hot"},{id:206,name:"Electric Toy Train Set",cat:"toys",price:2999,img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",desc:"Battery-operated train with tracks and station.",rating:4.4,sales:890,stock:30,brand:"Hot Wheels"},{id:207,name:"Super Soaker Water Blaster",cat:"toys",price:699,img:"https://images.unsplash.com/photo-1566576919828-5a8d2e4b6f7c?w=300&h=300&fit=crop",desc:"High-pressure water gun with 1L tank.",rating:4.3,sales:4567,stock:150,brand:"Nerf",badge:"hot"},{id:208,name:"Dinosaur Action Figures 10-Pack",cat:"toys",price:799,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"Realistic dinosaur figures with sound effects.",rating:4.6,sales:3456,stock:120,brand:"Schleich",badge:"new"},{id:209,name:"Musical Keyboard Play Mat",cat:"toys",price:999,img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",desc:"Interactive floor piano mat with 8 instruments.",rating:4.5,sales:2100,stock:65,brand:"Disney"},{id:210,name:"Badminton Racket Set",cat:"sports",price:2499,img:"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=300&fit=crop",desc:"Lightweight graphite racket set with shuttlecocks.",rating:4.6,sales:3456,stock:80,brand:"Yonex",badge:"hot"},{id:211,name:"Speed Skipping Rope",cat:"sports",price:299,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"Adjustable steel cable rope with ball bearings.",rating:4.4,sales:8901,stock:300,brand:"Decathlon"},{id:212,name:"Adjustable Dumbbells Set 10kg",cat:"sports",price:3999,img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop",desc:"Space-saving adjustable dumbbells pair.",rating:4.7,sales:2345,stock:40,brand:"Decathlon",badge:"new"},{id:213,name:"Extra Thick Yoga Mat",cat:"sports",price:1499,img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",desc:"15mm thick eco-friendly TPE yoga mat.",rating:4.6,sales:5678,stock:200,brand:"Puma",badge:"hot"},{id:214,name:"Nothing Phone 2",cat:"mobiles",price:44999,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Glyph Interface, Snapdragon 8+ Gen 1, 50MP dual cam.",rating:4.5,sales:3456,stock:45,brand:"Nothing",badge:"new"},{id:215,name:"Vivo X100 Pro",cat:"mobiles",price:89999,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"ZEISS optics, Dimensity 9300, 100W charging.",rating:4.6,sales:2100,stock:30,brand:"Vivo"},{id:216,name:"Realme GT 6",cat:"mobiles",price:42999,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Snapdragon 8s Gen 3, 120W charging, 120Hz AMOLED.",rating:4.4,sales:5678,stock:55,brand:"Realme",badge:"hot"},{id:217,name:"Bose QuietComfort Ultra",cat:"electronics",price:29990,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",desc:"Immersive audio with Spatial Audio and ANC.",rating:4.8,sales:7890,stock:60,brand:"Bose",badge:"new"},{id:218,name:"Dell XPS 15",cat:"electronics",price:149990,img:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=300&h=300&fit=crop",desc:"Intel i9, 32GB RAM, OLED 3.5K InfinityEdge.",rating:4.7,sales:1234,stock:15,brand:"Dell",badge:"hot"},{id:219,name:"Smart LED Floor Lamp",cat:"home",price:3999,img:"https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=300&h=300&fit=crop",desc:"WiFi-enabled RGBIC floor lamp with voice control.",rating:4.3,sales:8901,stock:120,brand:"Philips"},{id:220,name:"Bamboo Storage Shelves",cat:"home",price:2499,img:"https://images.unsplash.com/photo-1585325701956-60dd9c8557d0?w=300&h=300&fit=crop",desc:"5-tier eco-friendly bamboo shelving unit.",rating:4.5,sales:4567,stock:80,brand:"Urban"},{id:221,name:"Mid-Century Bookshelf",cat:"furniture",price:15999,img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop",desc:"Solid walnut bookshelf with geometric pattern.",rating:4.6,sales:2345,stock:25,brand:"IKEA",badge:"new"},{id:222,name:"Ergonomic Office Chair",cat:"furniture",price:24999,img:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=300&fit=crop",desc:"Mesh back, lumbar support, adjustable armrests.",rating:4.7,sales:6789,stock:40,brand:"Urban",badge:"hot"},{id:223,name:"The Great Gatsby Deluxe",cat:"books",price:1299,img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",desc:"Collector's edition with original cover art.",rating:4.9,sales:12345,stock:500,brand:"Penguin",badge:"hot"},{id:224,name:"Vitamin C Brightening Serum",cat:"beauty",price:899,img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",desc:"20% Vitamin C + Hyaluronic Acid for glowing skin.",rating:4.5,sales:23456,stock:300,brand:"Lakme"},{id:225,name:"Inverter Air Purifier",cat:"appliances",price:24990,img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",desc:"HEPA 13 filter, 600 sqft coverage, smart sensor.",rating:4.4,sales:3456,stock:35,brand:"LG",badge:"new"},{"id":226,"name":"Men Slim Fit Stretch Jeans","cat":"fashion","price":1999,"img":"https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300&h=300&fit=crop","desc":"Premium stretch denim with modern slim fit.","rating":4.4,"sales":15678,"stock":200,"brand":"Levis","badge":"new"},{"id":227,"name":"Women Summer Floral Midi","cat":"fashion","price":1599,"img":"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop","desc":"Lightweight floral midi dress perfect for summer.","rating":4.6,"sales":9876,"stock":150,"brand":"Zara","badge":"hot"},{"id":228,"name":"White Leather Casual Sneakers","cat":"fashion","price":2999,"img":"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop","desc":"Genuine leather sneakers with cushioned sole.","rating":4.5,"sales":23456,"stock":300,"brand":"Puma"},{"id":229,"name":"Pro Basketball Size 7","cat":"sports","price":2499,"img":"https://images.unsplash.com/photo-1519861531473-9200262188bf?w=300&h=300&fit=crop","desc":"Official size 7 indoor/outdoor basketball.","rating":4.3,"sales":6789,"stock":100,"brand":"Nike","badge":"new"},{"id":230,"name":"Resistance Bands Set 5-Pack","cat":"sports","price":699,"img":"https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop","desc":"5 levels of resistance for home workouts.","rating":4.4,"sales":34567,"stock":500,"brand":"Puma"},{"id":231,"name":"Insulated Stainless Water Bottle","cat":"sports","price":1299,"img":"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop","desc":"Double-wall vacuum insulated 1L capacity.","rating":4.7,"sales":45678,"stock":400,"brand":"Puma","badge":"hot"},{"id":232,"name":"Xiaomi 14 Pro","cat":"mobiles","price":69999,"img":"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop","desc":"Snapdragon 8 Gen 3 Leica optics 120W charging.","rating":4.5,"sales":5678,"stock":35,"brand":"Xiaomi","badge":"new"},{"id":233,"name":"Motorola Edge 50 Pro","cat":"mobiles","price":39999,"img":"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop","desc":"Dimensity 7030 144Hz pOLED 125W TurboPower.","rating":4.3,"sales":3456,"stock":40,"brand":"Motorola"},{"id":234,"name":"iQOO Neo 9 Pro","cat":"mobiles","price":38999,"img":"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop","desc":"Snapdragon 8 Gen 2 120W charging 50MP OIS.","rating":4.5,"sales":4567,"stock":50,"brand":"iQOO"},{"id":235,"name":"Asus Zenfone 11 Ultra","cat":"mobiles","price":59999,"img":"https://images.unsplash.com/photo-1599488615731-7e5c2823f3c5?w=300&h=300&fit=crop","desc":"Snapdragon 8 Gen 3 6.7 AMOLED 5500mAh.","rating":4.4,"sales":2345,"stock":25,"brand":"Asus"},{"id":236,"name":"Oppo Find X7 Ultra","cat":"mobiles","price":79999,"img":"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop","desc":"Snapdragon 8 Gen 3 1-inch sensor 100W charging.","rating":4.6,"sales":1890,"stock":20,"brand":"Oppo","badge":"hot"},{"id":237,"name":"Apple Watch Series 9","cat":"electronics","price":41990,"img":"https://images.unsplash.com/photo-1546868871-af0de0ae72f4?w=300&h=300&fit=crop","desc":"S9 chip double tap brighter display health tracking.","rating":4.8,"sales":12345,"stock":60,"brand":"Apple","badge":"hot"},{"id":238,"name":"Samsung Galaxy Tab S9 FE","cat":"electronics","price":34999,"img":"https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=300&h=300&fit=crop","desc":"10.9 TFT S Pen included IP68 90Hz display.","rating":4.4,"sales":6789,"stock":45,"brand":"Samsung","badge":"new"},{"id":239,"name":"Sony WH-1000XM5 Headphones","cat":"electronics","price":29990,"img":"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop","desc":"Industry-leading ANC 30hr battery LDAC support.","rating":4.9,"sales":23456,"stock":80,"brand":"Sony","badge":"hot"},{"id":240,"name":"Logitech MX Master 3S","cat":"electronics","price":7995,"img":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop","desc":"8K DPI quiet clicks MagSpeed scroll USB-C.","rating":4.7,"sales":34567,"stock":120,"brand":"Logitech"},{"id":241,"name":"JBL Flip 6 Speaker","cat":"electronics","price":12999,"img":"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop","desc":"IP67 waterproof 12hr playtime PartyBoost.","rating":4.5,"sales":45678,"stock":200,"brand":"JBL"},{"id":242,"name":"Aromatherapy Oil Diffuser","cat":"home","price":1499,"img":"https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=300&h=300&fit=crop","desc":"Ultrasonic cool mist diffuser with LED mood light.","rating":4.3,"sales":12345,"stock":150,"brand":"Philips"},{"id":243,"name":"Linen Curtain Set 2-Pack","cat":"home","price":2999,"img":"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=300&h=300&fit=crop","desc":"100% French linen curtains 84 inch length.","rating":4.5,"sales":5678,"stock":90,"brand":"Urban"},{"id":244,"name":"Decorative Throw Pillows Set","cat":"home","price":899,"img":"https://images.unsplash.com/photo-1584100935995-f8744d5b7fdb?w=300&h=300&fit=crop","desc":"Set of 4 velvet pillow covers with inserts.","rating":4.2,"sales":23456,"stock":200,"brand":"Urban"},{"id":245,"name":"Wall Floating Shelves Set","cat":"home","price":1999,"img":"https://images.unsplash.com/photo-1585325701956-60dd9c8557d0?w=300&h=300&fit=crop","desc":"Set of 3 rustic wooden floating shelves.","rating":4.4,"sales":8901,"stock":110,"brand":"IKEA"},{"id":246,"name":"Glass Food Storage 12-Pack","cat":"home","price":2499,"img":"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop","desc":"Borosilicate glass containers with airtight lids.","rating":4.6,"sales":34567,"stock":300,"brand":"IKEA","badge":"new"},{"id":247,"name":"Minimalist TV Stand 60-inch","cat":"furniture","price":29999,"img":"https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=300&h=300&fit=crop","desc":"Engineered wood with cable management system.","rating":4.4,"sales":3456,"stock":30,"brand":"IKEA"},{"id":248,"name":"Folding Desk with Drawer","cat":"furniture","price":8999,"img":"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop","desc":"Space-saving foldable desk with storage drawer.","rating":4.3,"sales":5678,"stock":50,"brand":"Urban","badge":"new"},{"id":249,"name":"Velvet Accent Chair","cat":"furniture","price":15999,"img":"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop","desc":"Premium velvet upholstery with gold metal legs.","rating":4.6,"sales":2345,"stock":20,"brand":"Urban","badge":"hot"},{"id":250,"name":"Queen Size Bed Frame","cat":"furniture","price":34999,"img":"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop","desc":"Upholstered platform bed with button tufting.","rating":4.5,"sales":4567,"stock":25,"brand":"IKEA"},{"id":251,"name":"Outdoor Patio Table Set","cat":"furniture","price":29999,"img":"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=300&h=300&fit=crop","desc":"6-seater aluminum table with tempered glass.","rating":4.2,"sales":1234,"stock":15,"brand":"Urban"},{"id":252,"name":"Matte Liquid Lipstick Set 6","cat":"beauty","price":1299,"img":"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop","desc":"Long-lasting matte lipstick set with 6 shades.","rating":4.3,"sales":34567,"stock":400,"brand":"Lakme"},{"id":253,"name":"Charcoal Face Mask Detox","cat":"beauty","price":499,"img":"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop","desc":"Activated charcoal peel-off mask for deep cleansing.","rating":4.2,"sales":56789,"stock":600,"brand":"Lakme"},{"id":254,"name":"Argan Hair Oil 200ml","cat":"beauty","price":799,"img":"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop","desc":"Pure argan oil for frizz-free shiny hair.","rating":4.5,"sales":23456,"stock":350,"brand":"Loreal","badge":"hot"},{"id":255,"name":"Under Eye Cream 30ml","cat":"beauty","price":699,"img":"https://images.unsplash.com/photo-1631727464162-1fb3c3fc2b01?w=300&h=300&fit=crop","desc":"Caffeine + retinol eye cream for dark circles.","rating":4.4,"sales":34567,"stock":280,"brand":"Loreal"},{"id":256,"name":"Rose Water Facial Mist","cat":"beauty","price":399,"img":"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop","desc":"Natural rose water toner with glycerin mist.","rating":4.6,"sales":67890,"stock":500,"brand":"Lakme","badge":"new"},{"id":257,"name":"Atomic Habits James Clear","cat":"books","price":799,"img":"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop","desc":"Bestseller on building good habits and breaking bad ones.","rating":4.9,"sales":89012,"stock":1000,"brand":"Penguin","badge":"hot"},{"id":258,"name":"To Kill a Mockingbird","cat":"books","price":599,"img":"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop","desc":"Harper Lee classic American novel about racial injustice.","rating":4.8,"sales":45678,"stock":800,"brand":"Harper"},{"id":259,"name":"The Alchemist Paulo Coelho","cat":"books","price":499,"img":"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop","desc":"Inspirational novel about following your dreams.","rating":4.8,"sales":67890,"stock":900,"brand":"Harper","badge":"hot"},{"id":260,"name":"Sapiens Yuval Noah Harari","cat":"books","price":699,"img":"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=300&fit=crop","desc":"A brief history of humankind from stone age to AI.","rating":4.7,"sales":34567,"stock":600,"brand":"Penguin"},{"id":261,"name":"1984 George Orwell","cat":"books","price":399,"img":"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop","desc":"Dystopian novel about totalitarianism and surveillance.","rating":4.8,"sales":56789,"stock":750,"brand":"Penguin"},{"id":262,"name":"Organic Matcha Green Tea","cat":"food","price":899,"img":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop","desc":"Premium Japanese ceremonial grade matcha powder.","rating":4.6,"sales":23456,"stock":400,"brand":"Tata","badge":"new"},{"id":263,"name":"Mixed Dry Fruits Gift Box","cat":"food","price":999,"img":"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop","desc":"Premium assorted dry fruits in gift packaging.","rating":4.5,"sales":45678,"stock":300,"brand":"Tata"},{"id":264,"name":"Dark Chocolate Almonds Pack","cat":"food","price":499,"img":"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=300&fit=crop","desc":"Belgian dark chocolate coated roasted almonds.","rating":4.7,"sales":56789,"stock":500,"brand":"Nestle","badge":"hot"},{"id":265,"name":"Protein Granola 1kg","cat":"food","price":699,"img":"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=300&fit=crop","desc":"High-protein granola with oats nuts and honey.","rating":4.3,"sales":34567,"stock":350,"brand":"Tata"},{"id":266,"name":"Himalayan Pink Salt Jar","cat":"food","price":299,"img":"https://images.unsplash.com/photo-1518110925495-5f3da9e1e9f6?w=300&h=300&fit=crop","desc":"Pure Himalayan pink salt 1kg fine grind.","rating":4.4,"sales":23456,"stock":600,"brand":"Tata"},{"id":267,"name":"LEGO Classic Bricks Set","cat":"toys","price":2999,"img":"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop","desc":"1100-piece classic LEGO brick set for ages 4+.","rating":4.8,"sales":23456,"stock":200,"brand":"LEGO","badge":"hot"},{"id":268,"name":"Remote Control Racing Car","cat":"toys","price":1999,"img":"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop","desc":"4WD RC buggy with rechargeable battery 30min play.","rating":4.3,"sales":12345,"stock":150,"brand":"Hotwheels"},{"id":269,"name":"Plush Teddy Bear 24-inch","cat":"toys","price":1499,"img":"https://images.unsplash.com/photo-1559454403-b6fb1b3f0c5b?w=300&h=300&fit=crop","desc":"Super soft plush teddy bear with bow tie.","rating":4.9,"sales":45678,"stock":300,"brand":"Hotwheels","badge":"new"},{"id":270,"name":"Monopoly Board Game","cat":"toys","price":2499,"img":"https://images.unsplash.com/photo-1606503153255-59d8b2b4bff1?w=300&h=300&fit=crop","desc":"Classic Monopoly game with updated city tiles.","rating":4.6,"sales":34567,"stock":250,"brand":"LEGO"},{"id":271,"name":"Kids Art Easel Set","cat":"toys","price":2999,"img":"https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=300&fit=crop","desc":"Double-sided wooden easel with chalkboard and whiteboard.","rating":4.5,"sales":8901,"stock":80,"brand":"Hotwheels","badge":"new"},{"id":272,"name":"Air Fryer 5.5L Digital","cat":"appliances","price":7999,"img":"https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop","desc":"Digital air fryer with 8 presets and 5.5L capacity.","rating":4.6,"sales":34567,"stock":120,"brand":"LG","badge":"hot"},{"id":273,"name":"Robotic Vacuum Cleaner","cat":"appliances","price":29999,"img":"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop","desc":"LiDAR navigation 5000Pa suction auto-empty dock.","rating":4.5,"sales":12345,"stock":40,"brand":"Samsung","badge":"new"},{"id":274,"name":"Hand Blender Set 3-in-1","cat":"appliances","price":2499,"img":"https://images.unsplash.com/photo-1558154832-37a0de5cb87f?w=300&h=300&fit=crop","desc":"Immersion blender with whisk and chopper attachments.","rating":4.3,"sales":23456,"stock":150,"brand":"Philips"},{"id":275,"name":"Electric Kettle Stainless","cat":"appliances","price":1499,"img":"https://images.unsplash.com/photo-1579965342575-1646a0f2e9c1?w=300&h=300&fit=crop","desc":"1.7L stainless steel kettle with auto shut-off.","rating":4.6,"sales":56789,"stock":300,"brand":"Philips"},{"id":276,"name":"Stand Mixer 1000W","cat":"appliances","price":24999,"img":"https://images.unsplash.com/photo-1594226801341-41427b4e5c4b?w=300&h=300&fit=crop","desc":"1000W planetary mixer with 5L stainless bowl.","rating":4.7,"sales":6789,"stock":30,"brand":"LG","badge":"hot"},{id:277,name:"Men Linen Shirt White",cat:"fashion",price:1899,mrp:2899,discount:34,img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",desc:"Premium linen shirt for summer comfort.",rating:4.4,sales:12345,stock:180,brand:"Zara",features:["100% European Linen","Breathable fabric","Mother of pearl buttons","Regular fit"],reviewsCount:2345},{id:278,name:"Kaftan Dress Printed",cat:"fashion",price:2499,mrp:3999,discount:38,img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=300&fit=crop",desc:"Flowy printed kaftan dress for beachwear.",rating:4.5,sales:8765,stock:120,brand:"Zara",badge:"hot",features:["Viscose fabric","Side pockets","Ankle length","One size"],reviewsCount:1567},{id:279,name:"Leather Crossbody Bag",cat:"fashion",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",desc:"Genuine leather crossbody bag with gold hardware.",rating:4.7,sales:5678,stock:75,brand:"Zara",badge:"new",features:["Genuine cowhide leather","Adjustable strap","RFID blocking","Multiple compartments"],reviewsCount:3456},{id:280,name:"Silk Pajama Set",cat:"fashion",price:4599,mrp:6999,discount:34,img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",desc:"Luxurious mulberry silk pajama set.",rating:4.8,sales:3456,stock:50,brand:"Zara",badge:"hot",features:["22 Momme mulberry silk","Enzyme wash finish","Button-down top","Elastic waistband"],reviewsCount:1234},{id:281,name:"Classic Denim Jacket",cat:"fashion",price:3499,mrp:4999,discount:30,img:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=300&fit=crop",desc:"Timeless blue denim jacket with a modern fit.",rating:4.6,sales:23456,stock:200,brand:"Zara",badge:"hot",features:["Premium cotton denim","Button closure","Chest pockets","Adjustable waist tabs"],reviewsCount:5678},{id:282,name:"Women Summer Skirt",cat:"fashion",price:1599,mrp:2499,discount:36,img:"https://images.unsplash.com/photo-1583496661160-fb5886a0e74a?w=300&h=300&fit=crop",desc:"Tiered floral skirt for summer days.",rating:4.3,sales:18900,stock:300,brand:"Zara",features:["Lightweight cotton","Elastic waist","Tiered ruffle design","Side pockets"],reviewsCount:4567},{id:283,name:"Men Formal Loafers",cat:"fashion",price:2999,mrp:4499,discount:33,img:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=300&h=300&fit=crop",desc:"Italian leather loafers for formal occasions.",rating:4.5,sales:7890,stock:100,brand:"Zara",badge:"new",features:["Italian calf leather","Leather sole","Penny strap design","Cushioned insole"],reviewsCount:2345},{id:284,name:"Women Ballet Flats",cat:"fashion",price:1299,mrp:1999,discount:35,img:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=300&h=300&fit=crop",desc:"Comfortable ballet flats with bow detail.",rating:4.4,sales:34567,stock:400,brand:"Zara",features:["Soft vegan leather","Cushioned footbed","Bow detail","Slip-on style"],reviewsCount:6789},{id:285,name:"Cashmere V-Neck Sweater",cat:"fashion",price:6999,mrp:9999,discount:30,img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",desc:"Pure cashmere v-neck sweater in charcoal.",rating:4.9,sales:4567,stock:60,brand:"Zara",badge:"hot",features:["100% Grade A cashmere","Ribbed cuffs and hem","V-neckline","Hand wash recommended"],reviewsCount:3456},{id:286,name:"Printed Maxi Dress",cat:"fashion",price:2999,mrp:4499,discount:33,img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",desc:"Boho printed maxi dress with tie waist.",rating:4.6,sales:12345,stock:150,brand:"Zara",badge:"new",features:["Soft viscose georgette","Adjustable tie waist","Puff sleeves","Full length"],reviewsCount:4567},{id:287,name:"OnePlus Open",cat:"mobiles",price:139999,mrp:159999,discount:13,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Foldable phone with 7.82-inch main display.",rating:4.5,sales:2345,stock:20,brand:"OnePlus",badge:"new",features:["7.82-inch AMOLED Main Display","Snapdragon 8 Gen 2","16GB LPDDR5X RAM","67W SUPERVOOC Charging"],reviewsCount:890},{id:288,name:"Samsung Galaxy Z Fold 6",cat:"mobiles",price:164999,mrp:184999,discount:11,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"Premium foldable with S Pen support and AI.",rating:4.7,sales:4567,stock:15,brand:"Samsung",badge:"hot",features:["7.6-inch Dynamic AMOLED 2X","Snapdragon 8 Gen 3 for Galaxy","IPX8 water resistant","S Pen support"],reviewsCount:2345},{id:289,name:"iPhone 16 Pro Max",cat:"mobiles",price:149900,mrp:169900,discount:12,img:"https://images.unsplash.com/photo-1599488615731-7e5c2823f3c5?w=300&h=300&fit=crop",desc:"A18 Pro chip with 48MP fusion camera system.",rating:4.9,sales:12345,stock:50,brand:"Apple",badge:"hot",features:["A18 Pro chip","48MP Fusion camera system","Titanium design","5x optical zoom"],reviewsCount:6789},{id:290,name:"Google Pixel 9 Pro",cat:"mobiles",price:99999,mrp:109999,discount:9,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Tensor G4 chip with advanced AI features.",rating:4.6,sales:3456,stock:30,brand:"Google",features:["Tensor G4 chip","48MP telephoto camera","7 years of updates","AI features suite"],reviewsCount:1567},{id:291,name:"Nothing Phone 3",cat:"mobiles",price:54999,mrp:64999,discount:15,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"Glyph interface with transparent design.",rating:4.4,sales:5678,stock:45,brand:"Nothing",badge:"new",features:["Glyph Interface 2.0","Snapdragon 8s Gen 3","50MP dual camera","45W fast charging"],reviewsCount:3456},{id:292,name:"Xiaomi Mix Flip",cat:"mobiles",price:59999,mrp:69999,discount:14,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Compact flip foldable with Leica optics.",rating:4.3,sales:2345,stock:25,brand:"Xiaomi",features:["6.86-inch Foldable AMOLED","Snapdragon 8 Gen 3","Leica co-engineered camera","67W fast charging"],reviewsCount:1234},{id:293,name:"Realme GT 7 Pro",cat:"mobiles",price:45999,mrp:54999,discount:16,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"Flagship killer with Snapdragon 8 Gen 3.",rating:4.5,sales:7890,stock:60,brand:"Realme",badge:"hot",features:["Snapdragon 8 Gen 3","120W SuperDart charging","50MP Sony camera","1.5K 144Hz AMOLED"],reviewsCount:4567},{id:294,name:"Vivo X200 Pro",cat:"mobiles",price:89999,mrp:99999,discount:10,img:"https://images.unsplash.com/photo-1598327105743-74b86e9b7e6e?w=300&h=300&fit=crop",desc:"ZEISS optics with 200MP telephoto camera.",rating:4.6,sales:3456,stock:35,brand:"Vivo",badge:"new",features:["Dimensity 9400 chipset","200MP ZEISS telephoto","6000mAh battery","IP68 water resistance"],reviewsCount:2345},{id:295,name:"Oppo Find N5",cat:"mobiles",price:119999,mrp:139999,discount:14,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",desc:"Ultra-slim foldable with Hasselblad cameras.",rating:4.5,sales:1890,stock:15,brand:"Oppo",features:["8.0-inch Foldable LTPO AMOLED","Snapdragon 8 Gen 3","Hasselblad tuned camera","80W SuperVOOC charging"],reviewsCount:890},{id:296,name:"Honor Magic 6 Pro",cat:"mobiles",price:74999,mrp:84999,discount:12,img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",desc:"AI-powered flagship with Falcon camera.",rating:4.4,sales:4567,stock:40,brand:"Honor",badge:"new",features:["Snapdragon 8 Gen 3","180MP Falcon telephoto","LTPO OLED 120Hz","100W wired charging"],reviewsCount:3456},{id:297,name:"iPad Air M4 11-inch",cat:"electronics",price:74900,mrp:89900,discount:17,img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",desc:"M4 chip Liquid Retina display 128GB storage.",rating:4.8,sales:12345,stock:80,brand:"Apple",badge:"hot",features:["Apple M4 chip","Liquid Retina XDR display","128GB storage","12MP ultra-wide front camera"],reviewsCount:5678},{id:298,name:"Samsung Galaxy Book 4",cat:"electronics",price:99990,mrp:119990,discount:17,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",desc:"Intel Core Ultra 7 16GB RAM 512GB SSD.",rating:4.5,sales:5678,stock:40,brand:"Samsung",features:["Intel Core Ultra 7","16GB LPDDR5X RAM","512GB NVMe SSD","AMOLED 3K display"],reviewsCount:2345},{id:299,name:"Sony XM6 Headphones",cat:"electronics",price:32990,mrp:39990,discount:18,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",desc:"Next-gen ANC headphones with 40hr battery.",rating:4.8,sales:23456,stock:120,brand:"Sony",badge:"new",features:["Dual chip ANC","40-hour battery life","LDAC Hi-Res Audio","Multipoint connection"],reviewsCount:8901},{id:300,name:"Bose Soundbar 700",cat:"electronics",price:74990,mrp:89990,discount:17,img:"https://images.unsplash.com/photo-1558089687-f282ffcbc128?w=300&h=300&fit=crop",desc:"Premium smart soundbar with Dolby Atmos.",rating:4.7,sales:3456,stock:25,brand:"Bose",badge:"hot",features:["Dolby Atmos support","Voice assistant built-in","HDMI eARC connectivity","PhaseGuide technology"],reviewsCount:1567},{id:301,name:"Mac Mini M4",cat:"electronics",price:69900,mrp:84900,discount:18,img:"https://images.unsplash.com/photo-1631174519092-d0b2b0e2cf3f?w=300&h=300&fit=crop",desc:"Apple M4 chip 16GB unified memory 256GB SSD.",rating:4.7,sales:8901,stock:60,brand:"Apple",badge:"new",features:["Apple M4 chip","16GB unified memory","256GB SSD","Thunderbolt 4 ports"],reviewsCount:3456},{id:302,name:"LG UltraGear 27GS",cat:"electronics",price:29999,mrp:39999,discount:25,img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",desc:"27-inch 4K Nano IPS 1ms 144Hz gaming monitor.",rating:4.6,sales:12345,stock:50,brand:"LG",badge:"hot",features:["27-inch 4K Nano IPS","1ms response time","144Hz refresh rate","G-Sync compatible"],reviewsCount:5678},{id:303,name:"DJI Mini 4 Pro Drone",cat:"electronics",price:124999,mrp:144999,discount:14,img:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=300&h=300&fit=crop",desc:"Ultra-light drone with 4K HDR video.",rating:4.8,sales:3456,stock:30,brand:"DJI",badge:"new",features:["4K HDR video at 60fps","Omnidirectional obstacle sensing","34-min flight time","Under 249g weight"],reviewsCount:2345},{id:304,name:"PlayStation 5 Slim",cat:"electronics",price:44990,mrp:54990,discount:18,img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop",desc:"PS5 console with 1TB SSD and DualSense.",rating:4.9,sales:56789,stock:100,brand:"Sony",badge:"hot",features:["1TB NVMe SSD","Ray tracing support","DualSense controller","4K Blu-ray drive"],reviewsCount:34567},{id:305,name:"Canon EOS R100",cat:"electronics",price:39999,mrp:54999,discount:27,img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",desc:"Entry-level mirrorless camera with 24.1MP.",rating:4.4,sales:5678,stock:45,brand:"Canon",features:["24.1MP APS-C CMOS","4K 25fps video","DIGIC 8 processor","Eye Detection AF"],reviewsCount:3456},{id:306,name:"Samsung T7 Shield 1TB",cat:"electronics",price:9999,mrp:13999,discount:29,img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",desc:"Portable SSD with IP65 water and dust resistance.",rating:4.7,sales:23456,stock:200,brand:"Samsung",badge:"hot",features:["1TB storage capacity","1050MB/s read speed","IP65 rated protection","USB 3.2 Gen 2"],reviewsCount:8901},{id:307,name:"Smart Curtain Robot",cat:"home",price:7999,mrp:11999,discount:33,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Automated curtain opener with app control.",rating:4.3,sales:6789,stock:80,brand:"Philips",features:["WiFi and Bluetooth control","Solar charging compatible","Works with Alexa/Google","Smooth rail sliding"],reviewsCount:2345},{id:308,name:"Wool Blend Blanket",cat:"home",price:2499,mrp:3999,discount:38,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",desc:"Luxurious wool blend throw blanket.",rating:4.6,sales:12345,stock:150,brand:"Urban",badge:"hot",features:["50% wool 50% acrylic blend","Navy blue heather color","Machine washable","180x220cm king size"],reviewsCount:4567},{id:309,name:"Kitchen Island Cart",cat:"home",price:12999,mrp:17999,discount:28,img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",desc:"Portable kitchen island with storage shelves.",rating:4.4,sales:3456,stock:30,brand:"IKEA",badge:"new",features:["Solid mango wood top","Lockable casters","Towel bar and shelves","Multi-purpose workspace"],reviewsCount:1234},{id:310,name:"Plant Corner Shelf",cat:"home",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",desc:"5-tier corner shelf for plants and decor.",rating:4.5,sales:8901,stock:100,brand:"Urban",features:["5-tier corner design","Powder-coated steel","Rust-resistant finish","Easy assembly"],reviewsCount:3456},{id:311,name:"LED Strip Lights 10m",cat:"home",price:1499,mrp:2499,discount:40,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",desc:"RGB smart LED strip with app and remote.",rating:4.3,sales:45678,stock:500,brand:"Philips",badge:"hot",features:["10m length RGBIC","App and voice control","Music sync mode","Cuttable every 3 LEDs"],reviewsCount:12345},{id:312,name:"Memory Foam Pillow Set",cat:"home",price:2999,mrp:4499,discount:33,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Premium memory foam pillows set of 2.",rating:4.7,sales:34567,stock:300,brand:"HomeTown",badge:"new",features:["Slow recovery memory foam","CertiPUR certified","Breathable bamboo cover","Queen size 20x30 inches"],reviewsCount:8901},{id:313,name:"Shoe Cabinet Organizer",cat:"home",price:4999,mrp:7499,discount:33,img:"https://images.unsplash.com/photo-1585325701956-60dd9c8557d0?w=300&h=300&fit=crop",desc:"2-door shoe cabinet holding 12 pairs.",rating:4.4,sales:23456,stock:120,brand:"IKEA",features:["Holds 12 pairs of shoes","Folding door design","Ventilated panels","Easy clean surface"],reviewsCount:5678},{id:314,name:"Bathroom Shelf Set",cat:"home",price:1299,mrp:1999,discount:35,img:"https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=300&fit=crop",desc:"Rustic wooden bathroom shelves set of 3.",rating:4.2,sales:18900,stock:200,brand:"Urban",features:["Solid bamboo wood","Set of 3 sizes","Water-resistant coating","Easy wall mounting"],reviewsCount:6789},{id:315,name:"Door Mat Set Designer",cat:"home",price:999,mrp:1599,discount:38,img:"https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=300&fit=crop",desc:"Coir door mat set with geometric pattern.",rating:4.3,sales:34567,stock:400,brand:"HomeTown",badge:"hot",features:["Natural coir material","Geometric design pattern","Set of 2 sizes","Weather resistant"],reviewsCount:12345},{id:316,name:"Storage Ottoman Bench",cat:"home",price:8999,mrp:12999,discount:31,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Upholstered storage ottoman with lid.",rating:4.5,sales:5678,stock:60,brand:"Urban",badge:"new",features:["Hidden storage inside","Faux leather upholstery","Button tufted top","40x40x40cm capacity"],reviewsCount:2345},{id:317,name:"Standing Desk Converter",cat:"furniture",price:15999,mrp:21999,discount:27,img:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300&h=300&fit=crop",desc:"Adjustable height standing desk converter.",rating:4.4,sales:4567,stock:35,brand:"Wakefit",features:["Height adjustable 15-50cm","Gas spring lift mechanism","36 inch wide desktop","Holds 15kg"],reviewsCount:2345},{id:318,name:"Gaming Chair RGB Pro",cat:"furniture",price:21999,mrp:29999,discount:27,img:"https://images.unsplash.com/photo-1598550474292-1c29be8a0b3a?w=300&h=300&fit=crop",desc:"Ergonomic gaming chair with RGB lighting.",rating:4.5,sales:8901,stock:40,brand:"Urban",badge:"hot",features:["Adjustable lumbar support","4D armrests","RGB LED lighting","180-degree recline"],reviewsCount:4567},{id:319,name:"Nightstand with Drawer",cat:"furniture",price:4499,mrp:6499,discount:31,img:"https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=300&h=300&fit=crop",desc:"Modern nightstand with pull-out drawer.",rating:4.3,sales:12345,stock:100,brand:"IKEA",badge:"new",features:["Single drawer storage","Open shelf below","Powder coated handle","Easy assembly"],reviewsCount:3456},{id:320,name:"Sectional Sofa 3-Seat",cat:"furniture",price:42999,mrp:59999,discount:28,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"L-shaped sectional sofa with chaise lounge.",rating:4.6,sales:2345,stock:10,brand:"Urban",badge:"hot",features:["Linen fabric upholstery","Storage chaise","Removable cushion covers","Solid wood frame"],reviewsCount:1567},{id:321,name:"Bar Stools Set of 2",cat:"furniture",price:7999,mrp:11999,discount:33,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop",desc:"Adjustable-height counter stools with back.",rating:4.2,sales:6789,stock:50,brand:"IKEA",features:["Height adjustable 65-85cm","Faux leather seat","Gas lift mechanism","Footrest ring"],reviewsCount:2345},{id:322,name:"Console Table Slim",cat:"furniture",price:9999,mrp:14999,discount:33,img:"https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=300&h=300&fit=crop",desc:"Slim console table for hallway or entryway.",rating:4.4,sales:3456,stock:25,brand:"Wakefit",badge:"new",features:["Solid oak wood","Slim 25cm depth","Bottom storage shelf","Industrial style"],reviewsCount:1234},{id:323,name:"Wall Mounted Desk",cat:"furniture",price:6999,mrp:9999,discount:30,img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop",desc:"Space-saving wall mounted foldable desk.",rating:4.3,sales:12345,stock:80,brand:"Urban",features:["Foldable design","Waterproof MDF","Floating shelf included","Max load 20kg"],reviewsCount:5678},{id:324,name:"Platform Bed Frame Queen",cat:"furniture",price:28999,mrp:39999,discount:28,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop",desc:"Solid wood platform bed frame no box spring needed.",rating:4.5,sales:5678,stock:20,brand:"Wakefit",badge:"hot",features:["Solid sheesham wood","Slat support system","Headboard included","Queen size 60x80 inches"],reviewsCount:3456},{id:325,name:"Bookcase with Doors",cat:"furniture",price:18999,mrp:25999,discount:27,img:"https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300&h=300&fit=crop",desc:"Large bookcase with glass doors 5 shelves.",rating:4.4,sales:3456,stock:30,brand:"IKEA",features:["5 shelves behind glass doors","Tempered glass doors","Engineered wood","180x80x35cm dimensions"],reviewsCount:2345},{id:326,name:"Computer Desk 55-inch",cat:"furniture",price:12999,mrp:17999,discount:28,img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop",desc:"Spacious gaming/office desk with cable management.",rating:4.5,sales:23456,stock:60,brand:"Wakefit",badge:"new",features:["140x60cm carbon fiber surface","Cable management tray","Monitor stand included","Steel frame legs"],reviewsCount:6789},{id:327,name:"Vitamin C Serum 20",cat:"beauty",price:699,mrp:1199,discount:42,img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",desc:"20% Vitamin C serum for brightening skin.",rating:4.5,sales:56789,stock:500,brand:"Lakme",badge:"hot",features:["20% L-Ascorbic Acid","Hyaluronic Acid infused","Reduces dark spots","Suitable for all skin types"],reviewsCount:23456},{id:328,name:"Retinol Night Cream",cat:"beauty",price:899,mrp:1499,discount:40,img:"https://images.unsplash.com/photo-1570194065650-d99fb4b38e34?w=300&h=300&fit=crop",desc:"Advanced retinol night cream for anti-aging.",rating:4.4,sales:34567,stock:400,brand:"Loreal",badge:"new",features:["0.3% Retinol formula","Peptides and ceramides","Fights fine lines","Non-comedogenic"],reviewsCount:12345},{id:329,name:"Setting Spray Long Last",cat:"beauty",price:449,mrp:799,discount:44,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"Micro-fine setting spray for 16-hour wear.",rating:4.3,sales:45678,stock:600,brand:"Lakme",features:["16-hour hold","Micro-fine mist","Dewy finish","Alcohol-free formula"],reviewsCount:34567},{id:330,name:"Sunscreen SPF 55 PA",cat:"beauty",price:599,mrp:949,discount:37,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Silky matte sunscreen with SPF 55 protection.",rating:4.6,sales:78901,stock:800,brand:"Lakme",badge:"hot",features:["SPF 55 PA++++ protection","Silky matte finish","Water resistant 80 mins","Non-greasy formula"],reviewsCount:45678},{id:331,name:"Makeup Sponge Set 5",cat:"beauty",price:299,mrp:599,discount:50,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"Blender sponge set for flawless makeup.",rating:4.2,sales:56789,stock:1000,brand:"Lakme",features:["Set of 5 multi-use sponges","Latex-free material","Soft and bouncy texture","Expands when wet"],reviewsCount:56789},{id:332,name:"Lip Oil Gloss Set 3",cat:"beauty",price:699,mrp:1299,discount:46,img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",desc:"Nourishing lip oil set with 3 shades.",rating:4.4,sales:23456,stock:350,brand:"Maybelline",badge:"new",features:["3 tinted lip oils","Vitamin E enriched","High-shine finish","Moisturizing formula"],reviewsCount:12345},{id:333,name:"Brow Pencil Kit",cat:"beauty",price:399,mrp:749,discount:47,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",desc:"Automatic brow pencil with spoolie brush.",rating:4.3,sales:45678,stock:500,brand:"Maybelline",features:["Ultra-fine 1.5mm tip","Built-in spoolie","Waterproof 24hr","Semi-permanent color"],reviewsCount:23456},{id:334,name:"Mascara Waterproof",cat:"beauty",price:499,mrp:899,discount:44,img:"https://images.unsplash.com/photo-1631727464162-1fb3c3fc2b01?w=300&h=300&fit=crop",desc:"Waterproof volume mascara with curved brush.",rating:4.5,sales:67890,stock:600,brand:"Maybelline",badge:"hot",features:["Waterproof formula","Curved brush for curl","Instant volume boost","Smudge-proof 24hr"],reviewsCount:34567},{id:335,name:"Face Wash Gel 150ml",cat:"beauty",price:349,mrp:599,discount:42,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Gentle gel face wash for daily cleansing.",rating:4.4,sales:89012,stock:900,brand:"Cetaphil",badge:"hot",features:["Soap-free formula","For sensitive skin","pH balanced 5.5","Non-drying"],reviewsCount:45678},{id:336,name:"Hair Mask Deep Condition",cat:"beauty",price:599,mrp:999,discount:40,img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",desc:"Intensive hair mask with argan and keratin.",rating:4.6,sales:34567,stock:400,brand:"Loreal",badge:"new",features:["Argan oil and keratin","Deep repair formula","For dry damaged hair","300g tub"],reviewsCount:23456},{id:337,name:"The Midnight Library",cat:"books",price:399,mrp:699,discount:43,img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",desc:"Matt Haig bestselling novel about infinite possibilities.",rating:4.7,sales:78901,stock:1200,brand:"Penguin",badge:"hot",features:["International bestseller","350 pages paperback","Life-affirming story","Award-winning author"],reviewsCount:45678},{id:338,name:"The Silent Patient",cat:"books",price:349,mrp:599,discount:42,img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop",desc:"Alex Michaelides gripping psychological thriller.",rating:4.6,sales:67890,stock:1000,brand:"Penguin",badge:"hot",features:["#1 NYT bestseller","Psychological thriller","320 pages","Twist ending"],reviewsCount:34567},{id:339,name:"Project Hail Mary",cat:"books",price:499,mrp:799,discount:38,img:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=300&fit=crop",desc:"Andy Weir's epic sci-fi adventure.",rating:4.8,sales:45678,stock:800,brand:"Penguin",features:["From author of The Martian","496 pages hardcover","Hugo Award nominee","Riveting storytelling"],reviewsCount:23456},{id:340,name:"The Thursday Murder Club",cat:"books",price:299,mrp:499,discount:40,img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",desc:"Richard Osman's charming mystery novel.",rating:4.5,sales:34567,stock:700,brand:"Penguin",badge:"new",features:["Bestselling series starter","380 pages","Witty characters","Perfect cosy mystery"],reviewsCount:12345},{id:341,name:"Psychology of Money",cat:"books",price:299,mrp:499,discount:40,img:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop",desc:"Morgan Housel on wealth greed and happiness.",rating:4.7,sales:89012,stock:1500,brand:"Jaico",badge:"hot",features:["#1 finance bestseller","256 pages","Short compelling chapters","Timeless lessons"],reviewsCount:56789},{id:342,name:"Subtle Art of Not Caring",cat:"books",price:349,mrp:549,discount:36,img:"https://images.unsplash.com/photo-1474932430478-367dbb6834c1?w=300&h=300&fit=crop",desc:"Mark Manson's counterintuitive approach to living.",rating:4.5,sales:56789,stock:900,brand:"Harper",features:["#1 NYT bestseller","224 pages","Honest and hilarious","Life-changing perspective"],reviewsCount:34567},{id:343,name:"Deep Work Cal Newport",cat:"books",price:399,mrp:599,discount:33,img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop",desc:"Rules for focused success in a distracted world.",rating:4.6,sales:23456,stock:600,brand:"Penguin",badge:"new",features:["Proven productivity framework","296 pages","Actionable strategies","Focus and flow methods"],reviewsCount:15678},{id:344,name:"The Lean Startup",cat:"books",price:449,mrp:699,discount:36,img:"https://images.unsplash.com/photo-1474932430478-367dbb6834c1?w=300&h=300&fit=crop",desc:"Eric Ries methodology for modern startups.",rating:4.4,sales:34567,stock:800,brand:"Penguin",features:["Bestselling business book","336 pages","Build-Measure-Learn","Innovation accounting"],reviewsCount:23456},{id:345,name:"Think Again Adam Grant",cat:"books",price:399,mrp:649,discount:39,img:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop",desc:"The power of knowing what you don't know.",rating:4.5,sales:23456,stock:500,brand:"Penguin",badge:"new",features:["#1 NYT bestseller","256 pages","Rethink assumptions","Science-backed insights"],reviewsCount:15678},{id:346,name:"Outliers Malcolm Gladwell",cat:"books",price:349,mrp:549,discount:36,img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop",desc:"The story of success by Malcolm Gladwell.",rating:4.6,sales:45678,stock:700,brand:"Penguin",features:["#1 NYT bestseller","336 pages","10,000 hour rule","Fascinating case studies"],reviewsCount:34567},{id:347,name:"Cold Pressed Coconut Oil",cat:"food",price:499,mrp:849,discount:41,img:"https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=300&h=300&fit=crop",desc:"Pure cold pressed virgin coconut oil 1L.",rating:4.6,sales:34567,stock:400,brand:"Tata",badge:"hot",features:["Cold pressed extraction","1L PET bottle","No preservatives","Multi-purpose use"],reviewsCount:23456},{id:348,name:"Organic Turmeric Powder",cat:"food",price:199,mrp:349,discount:43,img:"https://images.unsplash.com/photo-1518110925495-5f3da9e1e9f6?w=300&h=300&fit=crop",desc:"Pure organic turmeric powder 500g.",rating:4.5,sales:56789,stock:800,brand:"Tata",badge:"new",features:["Organic certified","500g pack","High curcumin content","No artificial color"],reviewsCount:34567},{id:349,name:"Roasted Makhana Pack",cat:"food",price:149,mrp:299,discount:50,img:"https://images.unsplash.com/photo-1604068549290-dea0e4a305e8?w=300&h=300&fit=crop",desc:"Salted roasted foxnuts healthy snack 400g.",rating:4.4,sales:67890,stock:1000,brand:"Tata",badge:"hot",features:["400g family pack","Roasted and salted","High protein snack","Gluten-free"],reviewsCount:45678},{id:350,name:"Multi Grain Atta 5kg",cat:"food",price:299,mrp:499,discount:40,img:"https://images.unsplash.com/photo-1509354611359-1b4e363e8a24?w=300&h=300&fit=crop",desc:"5kg multigrain flour blend for rotis.",rating:4.3,sales:45678,stock:600,brand:"Tata",features:["5 multigrain blend","High fiber","No maida content","5kg pack"],reviewsCount:23456},{id:351,name:"Fruit Preserve Mix Pack",cat:"food",price:249,mrp:449,discount:45,img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop",desc:"Mixed fruit preserves set of 3 jars.",rating:4.5,sales:23456,stock:400,brand:"Tata",badge:"new",features:["Set of 3 flavors","No artificial sweeteners","Made with real fruit","250g each"],reviewsCount:12345},{id:352,name:"Pure Maple Syrup Grade A",cat:"food",price:699,mrp:1199,discount:42,img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop",desc:"Pure Vermont maple syrup 355ml.",rating:4.7,sales:12345,stock:200,brand:"Tata",badge:"hot",features:["Grade A Amber color","355ml glass bottle","100% pure maple","Vermont origin"],reviewsCount:6789},{id:353,name:"Chia Seeds Organic 500g",cat:"food",price:349,mrp:599,discount:42,img:"https://images.unsplash.com/photo-1518110925495-5f3da9e1e9f6?w=300&h=300&fit=crop",desc:"Organic chia seeds rich in omega-3.",rating:4.5,sales:34567,stock:500,brand:"Tata",features:["Organic certified","500g resealable pack","High in omega-3","Gluten-free"],reviewsCount:23456},{id:354,name:"Dark Chocolate Bar 85 Percent",cat:"food",price:199,mrp:349,discount:43,img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=300&fit=crop",desc:"Belgian dark chocolate 85% cocoa 100g.",rating:4.6,sales:56789,stock:600,brand:"Nestle",badge:"hot",features:["85% cocoa content","Fair trade certified","100g bar","Belgian origin"],reviewsCount:34567},{id:355,name:"Instant Soup Variety 6-Pack",cat:"food",price:249,mrp:449,discount:45,img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop",desc:"Instant cup soup variety pack of 6.",rating:4.2,sales:23456,stock:700,brand:"Tata",features:["6 different flavors","Just add hot water","Low calorie","Quick meal option"],reviewsCount:12345},{id:356,name:"Herbal Green Tea 100 Bags",cat:"food",price:299,mrp:499,discount:40,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",desc:"Premium green tea bags with 100 count.",rating:4.5,sales:67890,stock:900,brand:"Tata",badge:"new",features:["100 tea bags box","Premium green tea","Rich in antioxidants","Japanese origin leaves"],reviewsCount:45678},{id:357,name:"Puzzle 2000 Pieces",cat:"toys",price:1499,mrp:2499,discount:40,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"Premium 2000-piece jigsaw puzzle landscape.",rating:4.5,sales:12345,stock:200,brand:"Hotwheels",badge:"hot",features:["2000 precision-cut pieces","Landscape artwork","Poster included","67x49cm finished size"],reviewsCount:5678},{id:358,name:"Magnetic Building Tiles 100pc",cat:"toys",price:2999,mrp:4499,discount:33,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"STEM magnetic building tiles 100 pieces set.",rating:4.6,sales:23456,stock:150,brand:"LEGO",badge:"new",features:["100 piece set","Strong magnets encased","STEM learning","Compatible with other sets"],reviewsCount:12345},{id:359,name:"Harry Potter LEGO Castle",cat:"toys",price:5999,mrp:7999,discount:25,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"LEGO Harry Potter Hogwarts Castle 890 pieces.",rating:4.8,sales:8901,stock:60,brand:"LEGO",badge:"hot",features:["890 pieces","Minifigures included","Iconic castle design","Ages 9+"],reviewsCount:3456},{id:360,name:"Chess Set Wooden",cat:"toys",price:1999,mrp:2999,discount:33,img:"https://images.unsplash.com/photo-1586161102136-e3e6c7c92ea2?w=300&h=300&fit=crop",desc:"Premium wooden chess set with folding board.",rating:4.7,sales:34567,stock:200,brand:"Hotwheels",badge:"hot",features:["Sheesham wood pieces","Folding board 15x15 inch","Felt bottom pieces","2.5 inch king height"],reviewsCount:23456},{id:361,name:"Karaoke Machine Kids",cat:"toys",price:3499,mrp:4999,discount:30,img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",desc:"Wireless bluetooth karaoke machine for kids.",rating:4.4,sales:5678,stock:80,brand:"LEGO",features:["Bluetooth 5.0 connectivity","Two wireless mics","LED party lights","Built-in speaker"],reviewsCount:2345},{id:362,name:"Science Kit 100 Experiments",cat:"toys",price:1499,mrp:2499,discount:40,img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",desc:"100 science experiments for kids ages 6+.",rating:4.6,sales:23456,stock:180,brand:"SmartLab",badge:"new",features:["100 experiments","Illustrated manual","Safe non-toxic materials","STEM certified"],reviewsCount:12345},{id:363,name:"Auto Bubble Machine",cat:"toys",price:999,mrp:1599,discount:38,img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",desc:"Automatic bubble machine with lights.",rating:4.3,sales:45678,stock:300,brand:"Hotwheels",features:["Automatic bubble flow","LED multi-color lights","1000 holes per minute","Battery operated"],reviewsCount:34567},{id:364,name:"Toy Kitchen Playset",cat:"toys",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=300&fit=crop",desc:"Kids wooden kitchen set with accessories.",rating:4.5,sales:12345,stock:90,brand:"SmartLab",badge:"hot",features:["Wooden construction","30 accessories","Sound effects included","Compact design"],reviewsCount:6789},{id:365,name:"Remote Control Tank",cat:"toys",price:2499,mrp:3999,discount:38,img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300&h=300&fit=crop",desc:"RC tank with 360 degree rotation and 2.4G.",rating:4.3,sales:8901,stock:100,brand:"Hotwheels",features:["360 degree turret rotation","2.4G remote control","Rechargeable battery","Authentic sound effects"],reviewsCount:4567},{id:366,name:"Fidget Toy Pack 12",cat:"toys",price:599,mrp:999,discount:40,img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop",desc:"12-pack sensory fidget toy set for stress.",rating:4.2,sales:67890,stock:500,brand:"LEGO",features:["12 different fidget toys","Stress relief pack","Sensory stimulation","Suitable for all ages"],reviewsCount:45678},{id:367,name:"Foldable Treadmill",cat:"sports",price:25999,mrp:34999,discount:26,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"Motorized folding treadmill with incline.",rating:4.5,sales:5678,stock:30,brand:"Decathlon",badge:"hot",features:["2.0HP motor","12 preset programs","LED display","Foldable design"],reviewsCount:3456},{id:368,name:"Stationary Exercise Bike",cat:"sports",price:14999,mrp:21999,discount:32,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"Magnetic resistance exercise bike with monitor.",rating:4.4,sales:3456,stock:25,brand:"Decathlon",features:["Magnetic resistance system","LCD monitor","Heart rate sensors","Adjustable seat and handlebars"],reviewsCount:2345},{id:369,name:"Kettlebell Set 12kg",cat:"sports",price:2499,mrp:3999,discount:38,img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop",desc:"Cast iron kettlebell set 4-8-12kg.",rating:4.3,sales:12345,stock:100,brand:"Decathlon",badge:"new",features:["Set of 3 weights","Cast iron construction","Flat base design","Ergonomic handle"],reviewsCount:5678},{id:370,name:"Yoga Block Set 2",cat:"sports",price:699,mrp:1199,discount:42,img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",desc:"EVA foam yoga blocks set of 2.",rating:4.4,sales:34567,stock:200,brand:"Puma",badge:"hot",features:["High-density EVA foam","Set of 2 blocks","Non-slip surface","Support up to 100kg"],reviewsCount:23456},{id:371,name:"Foam Roller Muscle",cat:"sports",price:1299,mrp:1999,discount:35,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"High-density foam roller for muscle recovery.",rating:4.5,sales:23456,stock:150,brand:"Puma",features:["High-density EPP foam","33x15cm size","Muscle recovery","Lightweight and portable"],reviewsCount:12345},{id:372,name:"Speed Jump Rope",cat:"sports",price:399,mrp:699,discount:43,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"Adjustable speed jump rope with ball bearings.",rating:4.3,sales:56789,stock:500,brand:"Decathlon",badge:"hot",features:["Adjustable 3m length","Ball bearing rotation","Steel cable","Foam handles"],reviewsCount:34567},{id:373,name:"Gym Gloves Padded",cat:"sports",price:599,mrp:999,discount:40,img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop",desc:"Silicone padded gym gloves with wrist wrap.",rating:4.2,sales:34567,stock:400,brand:"Puma",features:["Silicone gel padding","Adjustable wrist strap","Breathable fabric","Anti-slip grip"],reviewsCount:23456},{id:374,name:"Sports Cap Men",cat:"sports",price:699,mrp:1199,discount:42,img:"https://images.unsplash.com/photo-1556306535-0f09c537f13a?w=300&h=300&fit=crop",desc:"Performance sports cap with moisture wicking.",rating:4.3,sales:45678,stock:600,brand:"Nike",features:["Moisture-wicking fabric","Pre-curved brim","Adjustable closure","Breathable mesh"],reviewsCount:34567},{id:375,name:"Swim Goggles Anti Fog",cat:"sports",price:499,mrp:899,discount:44,img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",desc:"Anti-fog UV protection swim goggles.",rating:4.4,sales:34567,stock:350,brand:"Nike",badge:"new",features:["Anti-fog coating","UV400 protection","Silicone gasket","Adjustable strap"],reviewsCount:23456},{id:376,name:"Fitness Tracker Watch",cat:"sports",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop",desc:"Smart fitness tracker with heart rate monitor.",rating:4.4,sales:23456,stock:200,brand:"Decathlon",badge:"hot",features:["Heart rate monitoring","SpO2 tracking","GPS tracking","14-day battery life"],reviewsCount:15678},{id:377,name:"Washer Dryer 7kg",cat:"appliances",price:34999,mrp:47999,discount:27,img:"https://images.unsplash.com/photo-1585088452112-5f661c6315e6?w=300&h=300&fit=crop",desc:"Front load washer dryer combo 7kg capacity.",rating:4.5,sales:3456,stock:20,brand:"LG",badge:"hot",features:["7kg wash 5kg dry","Inverter motor","14 wash programs","AI DD technology"],reviewsCount:2345},{id:378,name:"Refrigerator 260L",cat:"appliances",price:29999,mrp:39999,discount:25,img:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop",desc:"260L Double door refrigerator with inverter.",rating:4.5,sales:5678,stock:30,brand:"Samsung",badge:"new",features:["260L total capacity","Digital inverter compressor","MoistFresh crisper","Anti-bacterial coating"],reviewsCount:3456},{id:379,name:"4 Slice Toaster",cat:"appliances",price:2499,mrp:3999,discount:38,img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",desc:"Stainless steel 4-slice toaster with 6 levels.",rating:4.3,sales:23456,stock:150,brand:"Philips",badge:"hot",features:["4 wide slots","6 browning levels","Cancel defrost reheat","Self-centering racks"],reviewsCount:12345},{id:380,name:"Food Processor 1000W",cat:"appliances",price:5999,mrp:8999,discount:33,img:"https://images.unsplash.com/photo-1573619288572-86b8a1e2fa6f?w=300&h=300&fit=crop",desc:"1000W food processor with 5 attachments.",rating:4.4,sales:8901,stock:60,brand:"Bajaj",features:["1000W copper motor","5 stainless blades","3 speed settings","2L capacity bowl"],reviewsCount:5678},{id:381,name:"Room Heater 2000W",cat:"appliances",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1585654911573-8c9b0e3e1a2f?w=300&h=300&fit=crop",desc:"Oil-filled radiator room heater with thermostat.",rating:4.3,sales:34567,stock:200,brand:"Bajaj",badge:"hot",features:["2000W power output","Oil-filled radiator","Adjustable thermostat","Safety tip-over switch"],reviewsCount:23456},{id:382,name:"Ceiling Fan with Light",cat:"appliances",price:3999,mrp:5999,discount:33,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",desc:"Modern ceiling fan with integrated LED light.",rating:4.4,sales:23456,stock:100,brand:"Philips",badge:"new",features:["55W BLDC motor","LED integrated light","Remote control","5-year warranty"],reviewsCount:12345},{id:383,name:"Kitchen Exhaust Fan",cat:"appliances",price:1999,mrp:2999,discount:33,img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",desc:"Wall-mounted kitchen exhaust fan 12 inch.",rating:4.2,sales:12345,stock:120,brand:"Philips",features:["12 inch sweep","Aluminum blade","Corrosion-resistant","50 CFM air delivery"],reviewsCount:6789},{id:384,name:"RO Water Purifier",cat:"appliances",price:12999,mrp:17999,discount:28,img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",desc:"7-stage RO+UV+UF water purifier 12L.",rating:4.5,sales:8901,stock:40,brand:"Philips",badge:"hot",features:["7-stage purification","12L storage","RO+UV+UF technology","Digital display"],reviewsCount:4567},{id:385,name:"Stick Vacuum Cleaner",cat:"appliances",price:14999,mrp:21999,discount:32,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",desc:"Cordless stick vacuum with 45min runtime.",rating:4.3,sales:12345,stock:80,brand:"Dyson",badge:"new",features:["45-minute runtime","HEPA filtration","2-in-1 stick/handheld","200AW suction power"],reviewsCount:6789},{id:386,name:"Garment Steamer 1500W",cat:"appliances",price:2999,mrp:4499,discount:33,img:"https://images.unsplash.com/photo-1585654911573-8c9b0e3e1a2f?w=300&h=300&fit=crop",desc:"Handheld garment steamer with 200ml tank.",rating:4.3,sales:34567,stock:300,brand:"Philips",features:["1500W heating power","200ml detachable tank","30 sec heat up","Suitable for all fabrics"],reviewsCount:23456}];

// ---- Sale Events ----
const SALE_EVENTS=[
  {id:'big-billion',name:'Big Billion Days',emoji:'🛍️',months:[8,9],offer:'Big Billion Days Sale',discount:80,categories:['mobiles','electronics','fashion'],bg:'linear-gradient(135deg,#D4145A,#FBB03B)',icon:'🛒'},
   {id:'big-diwali',name:'Big Diwali Sale',emoji:'✨',months:[9,10],offer:'Big Diwali Sale',discount:70,categories:['home','furniture','electronics','fashion'],bg:'linear-gradient(135deg,#F7971E,#FFD200)',icon:'🪔'},
  {id:'monsoon-magic',name:'Monsoon Magic Sale',emoji:'🌧️',months:[5,6,7],offer:'Monsoon Magic Sale',discount:50,categories:['fashion','home'],bg:'linear-gradient(135deg,#2B59C3,#4E89AE)',icon:'☂️'},
  {id:'end-of-season',name:'End of Season Sale',emoji:'🏷️',months:[5,11],offer:'End of Season Sale',discount:70,categories:['fashion','sports'],bg:'linear-gradient(135deg,#56CCF2,#2F80ED)',icon:'🏁'},
  {id:'republic-day',name:'Republic Day Sale',emoji:'🇮🇳',months:[0],offer:'Republic Day Sale',discount:60,categories:['electronics','home','furniture'],bg:'linear-gradient(135deg,#FF9933,#138808)',icon:'🇮🇳'},
  {id:'independence-day',name:'Independence Day Sale',emoji:'🇮🇳',months:[7],offer:'Independence Day Sale',discount:70,categories:['mobiles','electronics','fashion'],bg:'linear-gradient(135deg,#FF671F,#046A38)',icon:'🇮🇳'},
  {id:'summer-sale',name:'Summer Sale',emoji:'☀️',months:[3,4,5],offer:'Summer Sale',discount:60,categories:['electronics','beauty','fashion','sports'],bg:'linear-gradient(135deg,#FF6B35,#F7C948)',icon:'☀️'},
];
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function getActiveSale(){
  let m=new Date().getMonth();
  for(let s of SALE_EVENTS)if(s.months.includes(m))return s;
  return null;}
function getSaleProducts(sale){
  if(!sale)return PRODUCTS;
  return PRODUCTS.filter(p=>sale.categories.includes(p.cat));}

// ---- State ----

// ---- State ----
let cart=[];
let wishlist=[];
let currentPage=0;
const PAGE_SIZE=8;
let currentCategory="all";
let currentSort="relevance";
let currentBrand=null;
let currentUser=null;
let currentSlide=0;
let slideInterval=null;
let orders=[];let registeredUsers=[];

// ---- Persistence ----
let reviews={};let recentView=[];
function saveState(){
try{localStorage.setItem('krithi_cart',JSON.stringify(cart));
localStorage.setItem('krithi_wishlist',JSON.stringify(wishlist));
localStorage.setItem('krithi_orders',JSON.stringify(orders));
localStorage.setItem('krithi_reviews',JSON.stringify(reviews));
localStorage.setItem('krithi_recent',JSON.stringify(recentView));
localStorage.setItem('krithi_users',JSON.stringify(registeredUsers));
localStorage.setItem('krithi_products',JSON.stringify(PRODUCTS.filter(p=>p.id>200)))}catch(e){}}
function loadState(){
try{
let c=localStorage.getItem('krithi_cart');if(c)cart=JSON.parse(c);
let w=localStorage.getItem('krithi_wishlist');if(w)wishlist=JSON.parse(w);
let o=localStorage.getItem('krithi_orders');if(o)orders=JSON.parse(o);
let r=localStorage.getItem('krithi_reviews');if(r)reviews=JSON.parse(r);
let rv=localStorage.getItem('krithi_recent');if(rv)recentView=JSON.parse(rv);
let ru=localStorage.getItem('krithi_users');if(ru)registeredUsers=JSON.parse(ru);
let sp=localStorage.getItem('krithi_products');if(sp){let saved=JSON.parse(sp);saved.forEach(p=>{if(!PRODUCTS.find(x=>x.id===p.id))PRODUCTS.push(p)})}}catch(e){}}

// ---- Sample reviews ----
function seedReviews(){
if(Object.keys(reviews).length)return;
let sample=['Great product!','Love it! Highly recommended.','Good quality for the price.','Fast delivery, exactly as described.','Nice but could be better quality.','Perfect fit and looks amazing!','Not what I expected, but okay.','Excellent! Will buy again.'];
PRODUCTS.forEach(p=>{
let num=Math.floor(Math.random()*3)+1;
reviews[p.id]=[];
for(let i=0;i<num;i++){
let d=new Date();d.setDate(d.getDate()-Math.floor(Math.random()*30));
reviews[p.id].push({user:'User_'+String.fromCharCode(65+Math.floor(Math.random()*26)),text:sample[Math.floor(Math.random()*sample.length)],rating:3+Math.floor(Math.random()*3),date:d.toLocaleDateString('en-IN',{day:'numeric',month:'short'})})}})}

// ---- AI Algorithms ----
function cosineSimilarity(a,b){let d=0,sa=0,sb=0;for(let i=0;i<a.length;i++){d+=a[i]*b[i];sa+=a[i]*a[i];sb+=b[i]*b[i]}return sa&&sb?d/(Math.sqrt(sa)*Math.sqrt(sb)):0}

const USER_MATRIX=[[5,4,0,0,0,0,0,0,3,2,0,0,0,0,0,0,0,0,5,4,3,2,0,0,5,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,5,5,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[4,5,4,3,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,5,4,5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,5,4,5,4,0,0,0,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,2,0,0,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,5,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[4,3,5,4,0,0,0,0,0,0,0,0,3,2,0,0,4,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
let userVector=[3,2,0,4,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,5,4,0,0,4,3,0,0,0,5,0,0,0,0,0,0,0,3,0,0,0,5,0,0,4,0,0,0,0,0,0,0,5,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function collaborativeFiltering(uv,matrix){
let scores=[];for(let r=0;r<matrix.length;r++){let s=cosineSimilarity(uv,matrix[r]);if(s>0)scores.push({user:r,sim:s})}
scores.sort((a,b)=>b.sim-a.sim);let top=scores.slice(0,3);
let pred=[];for(let i=0;i<matrix[0].length;i++){let num=0,den=0;
for(let t of top){if(matrix[t.user][i]>0&&uv[i]===0){num+=matrix[t.user][i]*t.sim;den+=t.sim}}
if(den>0)pred.push({pid:i+1,score:num/den})}
pred.sort((a,b)=>b.score-a.score);return pred.map(p=>p.pid).filter(id=>PRODUCTS.find(p=>p.id===id)).slice(0,8)}

function tfidfSearch(query){
let vocab={};let docs=PRODUCTS.map(p=>p.name.toLowerCase().split(/\s+/).concat(p.cat.toLowerCase().split(/\s+/)));
docs.forEach(d=>d.forEach(w=>{if(w)vocab[w]=(vocab[w]||0)+1}));
let N=docs.length;let qWords=query.toLowerCase().split(/\s+/).filter(w=>w);
let scores=PRODUCTS.map((p,i)=>{let tfidf=0;let doc=docs[i];
for(let w of qWords){let tf=doc.filter(x=>x===w).length/Math.max(doc.length,1);let idf=Math.log((N+1)/((vocab[w]||0)+1))+1;tfidf+=tf*idf}
return{pid:p.id,score:tfidf}});
scores.sort((a,b)=>b.score-a.score);return scores.filter(s=>s.score>0).slice(0,8).map(s=>s.pid)}

function classifyUser(uv){
let cats=[...new Set(PRODUCTS.map(p=>p.cat))];
let ci={};cats.forEach((c,i)=>{let s=0;let lim=Math.min(uv.length,PRODUCTS.length);for(let j=0;j<lim;j++){let p=PRODUCTS[j];if(p.cat===c)s+=uv[j]*p.price}
ci[c]=s/Math.max(uv.filter(x=>x>0).length,1)});
let maxS=Math.max(...Object.values(ci),0.01);
return Object.entries(ci).filter(([_,v])=>v>maxS*0.3).map(([k])=>k)}

function demandPrediction(salesHistory,periods=3){
let wmaWeight=[0.5,0.3,0.2];let wma=0;
for(let i=0;i<Math.min(periods,salesHistory.length);i++)wma+=salesHistory[salesHistory.length-1-i]*wmaWeight[i];
let trend=0;if(salesHistory.length>=periods+1){let prevWma=0;
for(let i=0;i<Math.min(periods,salesHistory.length-1);i++)prevWma+=salesHistory[salesHistory.length-2-i]*wmaWeight[i];
trend=(wma-prevWma)/prevWma*100}
return{predicted:Math.round(wma),trend:Math.round(trend*10)/10}}

// ---- Sale Events UI ----
function initSeasonUI(){
  let s=getActiveSale();
  if(!s)return;
  document.getElementById('seasonCatIcon').textContent=s.icon;
  document.getElementById('seasonCatLabel').textContent=s.name+' Offer';
  let strip=document.getElementById('seasonalStrip');
  if(strip){
    strip.style.display='block';
    strip.style.background=s.bg;
    document.getElementById('seasonStripBadge').innerHTML=s.emoji+' '+s.offer;
    document.getElementById('seasonStripEmoji').textContent=s.icon;
    document.getElementById('seasonStripName').textContent=s.name;
    document.getElementById('seasonStripDisc').textContent=s.discount;}
  let slide=document.getElementById('seasonalBannerSlide');
  if(slide){
    slide.style.display='';
    slide.style.background=s.bg;
    document.getElementById('seasonalBannerBadge').innerHTML=s.emoji+' '+s.offer;
    document.getElementById('seasonalBannerTitle').textContent=s.name;
    document.getElementById('seasonalBannerSub').textContent='Up to '+s.discount+'% OFF';
    document.getElementById('seasonalBannerDesc').textContent='Limited period sale on '+s.categories.join(', ')+' — Grab the best deals!';
    document.getElementById('seasonalDot').style.display='';}
}
function filterSeason(){
  currentBrand=null;
  document.querySelectorAll('.brand-item').forEach(e=>e.classList.remove('active'));
  document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
  let btn=document.getElementById('seasonCatBtn');
  if(btn)btn.style.background='linear-gradient(135deg,var(--violet-dim),var(--violet))';
  let sale=getActiveSale();
  let items=sale?getSaleProducts(sale):PRODUCTS;
  document.getElementById('sectionTitle').innerHTML=(sale?sale.emoji+' ':'')+(sale?sale.offer:'All Products')+(sale?' — Up to '+sale.discount+'% OFF':'');
  currentPage=0;
  renderProducts(items);
  showSection('home');
  let fs=document.getElementById('homeFeatureSections');
  if(fs)fs.classList.add('hidden');}

function renderSaleCalendar(){
  let container=document.getElementById('saleCalendarGrid');
  if(!container)return;
  let active=getActiveSale();
  let now=new Date();
  let currentMonth=now.getMonth();
  container.innerHTML=SALE_EVENTS.map(s=>{
    let isActive=active&&active.id===s.id;
    let monthLabels=s.months.map(m=>MONTHS[m]);
    let isUpcoming=s.months.some(m=>m>currentMonth)&&(!active||s.months[0]>active.months[0]);
    let cls='sale-cal-card'+(isActive?' active':'')+(isUpcoming?' upcoming':'');
    return'<div class="'+cls+'" onclick="filterSaleFromCalendar(\''+s.id+'\')">'+
      '<div class="sale-cal-icon">'+s.icon+'</div>'+
      '<div class="sale-cal-info">'+
        '<div class="sale-cal-name">'+s.name+'</div>'+
        '<div class="sale-cal-meta">'+monthLabels.join('–')+' · '+s.discount+'% OFF</div>'+
        '<div class="sale-cal-cats">'+s.categories.map(c=>'<span class="sale-cal-tag">'+c+'</span>').join('')+'</div>'+
      '</div>'+
      (isActive?'<div class="sale-cal-badge">LIVE</div>':'')+
    '</div>'
  }).join('');}

function filterSaleFromCalendar(id){
  let sale=SALE_EVENTS.find(s=>s.id===id);
  if(!sale)return;
  filterSeason();
  document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
  let btn=document.getElementById('seasonCatBtn');
  if(btn)btn.style.background='linear-gradient(135deg,var(--violet-dim),var(--violet))';
  let items=getSaleProducts(sale);
  document.getElementById('sectionTitle').innerHTML=sale.emoji+' '+sale.offer+' — Up to '+sale.discount+'% OFF';
  currentPage=0;
  renderProducts(items);
  showSection('home');
  let fs=document.getElementById('homeFeatureSections');
  if(fs)fs.classList.add('hidden');}

function filterBrand(brand,el){
currentBrand=brand;
document.querySelectorAll('.brand-item').forEach(e=>e.classList.remove('active'));
if(el)el.classList.add('active');
currentCategory='all';
document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
document.querySelector('.cat-item[onclick*="all"]')&&document.querySelector('.cat-item[onclick*="all"]').classList.add('active');
let sb=document.getElementById('seasonCatBtn');if(sb)sb.style.background='';
let fs=document.getElementById('homeFeatureSections');
if(fs)fs.classList.remove('hidden');
document.getElementById('sectionTitle').innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> '+brand;
currentPage=0;renderProducts(getFilteredProducts());showSection('home')}

function filterCategory(cat,el){
currentCategory=cat;currentBrand=null;
document.querySelectorAll('.brand-item').forEach(e=>e.classList.remove('active'));
if(el){document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));el.classList.add('active')}
let sb=document.getElementById('seasonCatBtn');if(sb)sb.style.background='';
let fs=document.getElementById('homeFeatureSections');
if(cat==='all'){
if(fs)fs.classList.remove('hidden');
document.getElementById('sectionTitle').innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> AI Picks — Home'}
else{if(fs)fs.classList.add('hidden');let name=el?el.querySelector('span').textContent:cat;document.getElementById('sectionTitle').innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> '+name}
currentPage=0;renderProducts(getFilteredProducts());showSection('home')}

function getFilteredProducts(){
let items;
if(currentBrand)items=PRODUCTS.filter(p=>p.brand===currentBrand);
else items=currentCategory==='all'?[...PRODUCTS]:PRODUCTS.filter(p=>p.cat===currentCategory);
return sortItems(items,currentSort)}

function sortItems(items,sort){
let arr=[...items];
if(sort==='price-asc')arr.sort((a,b)=>a.price-b.price);
else if(sort==='price-desc')arr.sort((a,b)=>b.price-a.price);
else if(sort==='rating')arr.sort((a,b)=>b.rating-a.rating||b.sales-a.sales);
else if(sort==='newest')arr.sort((a,b)=>b.id-a.id);
else arr.sort((a,b)=>b.sales-a.sales);
return arr}

function sortProducts(value){currentSort=value;currentPage=0;renderProducts(getFilteredProducts())}

function loadMore(){currentPage++;renderProducts(getFilteredProducts());toast('Showing more products')}

// ---- Render Products ----
function renderProducts(items){
let grid=document.getElementById('productsGrid');
let start=0,end=items.length;
let pageItems=items;
if(currentCategory==='all'||currentCategory){
  start=0;end=Math.min((currentPage+1)*PAGE_SIZE,items.length);
  pageItems=items.slice(0,end)}
grid.innerHTML=pageItems.map(p=>productCard(p)).join('');
let btn=document.querySelector('.load-more-btn');
if(btn)btn.style.display=end>=items.length?'none':'block';
renderRecentViews()}

function renderRecentViews(){
let existing=document.getElementById('recentSection');if(existing)existing.remove();
if(!recentView.length)return;
let el=document.querySelector('.products-section');
let items=recentView.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
if(!items.length)return;
let sec=document.createElement('div');sec.id='recentSection';sec.style.cssText='margin-top:20px';
sec.innerHTML='<h3 style="font-family:Outfit,sans-serif;font-size:1rem;margin-bottom:10px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Recently Viewed</h3><div class="products-grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">'+items.map(p=>productCard(p)).join('')+'</div>';
el.appendChild(sec)}

function genPriceHistory(p){
let hist=[];let base=p.price;let trend=p.id%3===0?1:-1;
for(let i=0;i<7;i++){let r=base*(0.85+Math.random()*0.3)+i*50*trend;hist.push(Math.round(Math.max(r,100)))}
return hist}
function sparklineSVG(data,w=60,h=20){
let mn=Math.min(...data),mx=Math.max(...data),rng=mx-mn||1;
let pts=data.map((v,i)=>(i/(data.length-1))*w+','+(h-((v-mn)/rng)*(h-2)-1)).join(' ');
return '<svg width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" style="vertical-align:middle"><polyline points="'+pts+'" fill="none" stroke="var(--violet-dim)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'}

let topIds=[...PRODUCTS].sort((a,b)=>b.sales-a.sales).slice(0,3).map(x=>x.id);
function productCard(p){
let inWish=wishlist.includes(p.id);
let stars='★'.repeat(Math.floor(p.rating))+(p.rating%1>=0.5?'½':'');
let disc=p.discount||(p.badge==='hot'?Math.round(Math.random()*20+15):p.badge==='new'?0:Math.round(Math.random()*10+5));
let sale=getActiveSale();
if(sale&&sale.categories.includes(p.cat))disc=Math.max(disc,sale.discount);
let oldP=p.mrp||(disc?p.price*100/(100-disc):0);
let isTop=topIds.includes(p.id);
let rank=isTop?topIds.indexOf(p.id)+1:0;
return'<div class="product-card" onclick="showProductDetail('+p.id+')">'+
(isTop?'<div style="position:absolute;top:8px;left:8px;background:linear-gradient(135deg,var(--amber),#D97706);color:#000;font-size:9px;font-weight:700;padding:3px 8px;border-radius:99px;z-index:2;letter-spacing:.3px">🏆 Bestseller #'+rank+'</div>':'')+
(p.badge==='hot'?'<div style="position:absolute;top:8px;right:8px;background:var(--red);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:99px;z-index:2">HOT</div>':p.badge==='new'?'<div style="position:absolute;top:8px;right:8px;background:var(--violet);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:99px;z-index:2">NEW</div>':'')+
(sale&&sale.categories.includes(p.cat)?'<div style="position:absolute;bottom:8px;left:8px;background:'+sale.bg+';color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:99px;z-index:2;letter-spacing:.2px">'+sale.emoji+' '+sale.discount+'% OFF</div>':'')+
'<img class="product-image" src="'+p.img+'" alt="'+p.name+'" loading="lazy"/>'+
'<div class="product-info">'+
'<div class="product-brand">'+p.brand+'</div>'+
'<div class="product-name">'+p.name+'</div>'+
'<div class="product-rating"><span class="stars">'+stars+'</span> <span class="review-count">('+p.sales+')</span>'+(p.reviewsCount?' <span style="font-size:10px;color:var(--text3)">| '+p.reviewsCount+' reviews</span>':'')+'</div>'+
'<div class="price-chart" title="Price trend (7 days)">'+sparklineSVG(genPriceHistory(p),60,18)+
'<span class="price-trend-label">'+(p.id%3===0?'📈':'📉')+'</span></div>'+
'<div class="product-price">₹'+p.price.toLocaleString()+
(oldP?' <span class="price-old">₹'+Math.round(oldP).toLocaleString()+'</span>':'')+
(disc?' <span class="price-discount">'+disc+'% off</span>':'')+'</div>'+
'<div class="product-actions">'+
'<button class="add-cart-btn" onclick="event.stopPropagation();addToCart('+p.id+')">Add to Cart</button>'+
'<button class="wish-btn" onclick="event.stopPropagation();toggleWishlist('+p.id+')" title="Wishlist">'+(inWish?'❤️':'🤍')+'</button>'+
'<button class="cmp-btn" onclick="event.stopPropagation();toggleCompare('+p.id+')" title="Compare">'+(compareList.includes(p.id)?'✅':'📊')+'</button>'+
'</div></div></div>'}

// ---- Search ----
let searchTimeout=null;
function handleSearch(val){
clearTimeout(searchTimeout);
let dd=document.getElementById('searchDropdown');
searchTimeout=setTimeout(()=>{
if(val.trim()){
let pids=tfidfSearch(val);
let results=pids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
if(results.length<4)results=PRODUCTS.filter(p=>p.name.toLowerCase().includes(val.toLowerCase())||p.cat.includes(val.toLowerCase())).slice(0,8);
results=results.slice(0,6);
if(dd){
if(results.length){
let q=val.toLowerCase();
let catMatches=PRODUCTS.filter(p=>p.cat.toLowerCase().includes(q)).slice(0,2);
dd.innerHTML=results.map(p=>'<div class="search-dropdown-item" onclick="selectSearch('+p.id+')"><img src="'+(p.img||'')+'" alt="" loading="lazy"><div class="sdi-info"><div class="sdi-name">'+highlightMatch(p.name,q)+'</div><div class="sdi-cat">'+p.cat+'</div></div><div class="sdi-price">₹'+p.price.toLocaleString()+'</div></div>').join('')+
(catMatches.length?'<div class="search-dropdown-item" onclick="doSearch(\''+q+'\');hideSearchDropdown()" style="justify-content:center;color:var(--violet);font-size:11px">🔍 View all results</div>':'');
dd.classList.add('open')}
else dd.innerHTML='<div class="search-dropdown-empty">No products found</div>',dd.classList.add('open')}}
else{if(dd)dd.classList.remove('open');currentCategory='all';renderProducts(getFilteredProducts());document.getElementById('sectionTitle').innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> AI Picks For You'}},200)}

function highlightMatch(text,query){
let re=new RegExp('('+query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
return text.replace(re,'<strong style="color:var(--violet)">$1</strong>')}

function showSearchDropdown(){let dd=document.getElementById('searchDropdown');if(dd&&dd.children.length)dd.classList.add('open')}
function hideSearchDropdown(){let dd=document.getElementById('searchDropdown');if(dd)dd.classList.remove('open')}
function selectSearch(id){hideSearchDropdown();showProductDetail(id)}
function doSearch(q){
let query=q||document.getElementById('searchInput').value;
if(!query.trim())return;
let pids=tfidfSearch(query);
let results=pids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
if(results.length<4){results=PRODUCTS.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())||p.cat.includes(query.toLowerCase())).slice(0,8)}
document.getElementById('sectionTitle').innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> Results for "'+query+'"';
document.getElementById('productsGrid').innerHTML=results.map(p=>productCard(p)).join('')||'<div class="empty-state">No products found</div>'}

// ---- Compare ----
let compareList=[];
function toggleCompare(id){
let idx=compareList.indexOf(id);
if(idx>-1)compareList.splice(idx,1);else{if(compareList.length>=4){toast('Max 4 products to compare');return}compareList.push(id)}
renderCompareBtn();toast(compareList.includes(id)?'Added to compare':'Removed from compare')}

function renderCompareBtn(){
let existing=document.getElementById('compareFloater');if(existing)existing.remove();
if(!compareList.length)return;
let items=compareList.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
let fl=document.createElement('div');fl.id='compareFloater';fl.style.cssText='position:fixed;bottom:80px;left:20px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:10px 14px;z-index:2001;box-shadow:0 4px 20px rgba(0,0,0,.5);font-size:11px';
fl.innerHTML='<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="font-weight:600">📊 Compare ('+items.length+')</span><button onclick="showCompare()" style="background:var(--violet);border:none;color:#fff;padding:4px 10px;border-radius:5px;cursor:pointer;font-size:10px;font-family:Inter,sans-serif">View</button><button onclick="compareList=[];renderCompareBtn()" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:10px;font-family:Inter,sans-serif">Clear</button></div>'+
items.map(p=>'<span style="color:var(--text2);font-size:10px">• '+p.name.substring(0,20)+'</span>').join('<br>');
document.body.appendChild(fl)}

function generateProsCons(p){
let pList=[],cList=[];
if(p.rating>=4.5)pList.push('⭐ High rating ('+p.rating+'/5)');
if(p.sales>500)pList.push('🔥 Top seller — '+p.sales.toLocaleString()+' sold');
if(p.discount>20)pList.push('🏷️ '+p.discount+'% off — bargain');
if(p.stock>100)pList.push('📦 Well stocked');
if(p.price<500)pList.push('💰 Budget-friendly');
if(p.price<100&&p.stock>50)pList.push('💎 Great value');
if(p.stock<10)cList.push('⚠️ Low stock — only '+p.stock+' left');
if(p.rating<3.5)cList.push('⚠️ Below avg rating ('+p.rating+'/5)');
if(p.price>50000)cList.push('💎 Premium pricing');
if(p.sales<50)cList.push('📉 Low sales volume');
if(!pList.length)pList.push('✅ Decent product');
if(!cList.length)cList.push('✅ No major concerns');
return{pList,cList}}

function showCompare(){
let items=compareList.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
if(items.length<2){toast('Add at least 2 products to compare');return}
let fields=[{k:'price',l:'Price'},{k:'rating',l:'Rating'},{k:'sales',l:'Sold'},{k:'stock',l:'Stock'},{k:'brand',l:'Brand'},{k:'cat',l:'Category'}];
let best=items.reduce((b,p)=>{let s=(p.rating*10)+(p.sales/1000)-(p.price/1000)+(p.stock>0?5:-10);return s>b.score?{p,score:s}:b},{p:items[0],score:-Infinity});
let html='<div style="position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:4000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)" onclick="closeCompare(event)"><div style="background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:24px;max-width:900px;width:95%;max-height:85vh;overflow-y:auto" onclick="event.stopPropagation()"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h3 style="font-family:Outfit,sans-serif;font-size:1.1rem">📊 Compare Products</h3><button onclick="closeCompare(event)" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button></div><div style="display:grid;grid-template-columns:120px repeat('+items.length+',1fr);gap:1px;background:var(--border);border-radius:8px;overflow:hidden">'+
[['<span style="font-weight:600">Product</span>',...items.map(p=>'<div><img src="'+p.img+'" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:6px" alt=""><div style="font-size:10px;margin-top:4px;font-weight:600">'+p.name+'</div></div>')],
['<span style="font-weight:600;color:var(--violet)">✨ Best Pick</span>',...items.map(p=>'<div style="font-weight:700;font-size:14px;color:'+(p.id===best.p.id?'var(--green)':'var(--text3)')+'">'+(p.id===best.p.id?'✅ Recommended':'—')+'</div>')],
...fields.map(f=>['<span style="font-weight:600">'+f.l+'</span>',...items.map(p=>f.k==='price'?'₹'+p[f.k].toLocaleString():p[f.k])]),
['<span style="font-weight:600;color:var(--green)">✅ Pros</span>',...items.map(p=>'<div style="font-size:10px;line-height:1.7;text-align:left">'+generateProsCons(p).pList.join('<br>')+'</div>')],
['<span style="font-weight:600;color:var(--red)">⚠️ Cons</span>',...items.map(p=>'<div style="font-size:10px;line-height:1.7;text-align:left">'+generateProsCons(p).cList.join('<br>')+'</div>')],
['<span style="font-weight:600">Buy</span>',...items.map(p=>'<button onclick="addToCart('+p.id+');toast(\'Added '+p.name+'\')" style="background:var(--violet);border:none;color:#fff;padding:6px 12px;border-radius:5px;cursor:pointer;font-size:11px;font-family:Inter,sans-serif;font-weight:600">+ Cart</button>')]
].map(row=>row.map((c,i)=>'<div style="background:var(--bg3);padding:10px;font-size:12px;text-align:'+(i===0?'left':'center')+'">'+c+'</div>').join('')).join('')+'</div></div></div>';
let d=document.createElement('div');d.id='compareModal';d.innerHTML=html;
document.body.appendChild(d)}

function closeCompare(e){
let el=document.getElementById('compareModal');if(el)el.remove()}

// ---- Cart ----
function addToCart(id){
let ex=cart.find(c=>c.id===id);
if(ex)ex.qty++;else cart.push({id,qty:1});
updateCartCount();renderCart();saveState();toast('Added to cart!')}

function changeQty(id,d){
let ex=cart.find(c=>c.id===id);if(!ex)return;
ex.qty+=d;if(ex.qty<=0)cart=cart.filter(c=>c.id!==id);
updateCartCount();renderCart();saveState()}

function removeFromCart(id){cart=cart.filter(c=>c.id!==id);updateCartCount();renderCart();saveState()}

function getCartTotal(){return cart.reduce((s,c)=>{let p=PRODUCTS.find(x=>x.id===c.id);return s+(p?p.price*c.qty:0)},0)}

function updateCartCount(){let t=cart.reduce((s,c)=>s+c.qty,0);document.getElementById('cartCount').textContent=t}
function getCartCount(){return cart.reduce((s,c)=>s+c.qty,0)}

function renderCart(){
let col=document.getElementById('cartItemsCol');
let sum=document.getElementById('cartSummaryCol');
if(!cart.length){col.innerHTML='<div class="empty-state"><h3>Your cart is empty</h3><p style="margin-top:8px;font-size:13px">Add some products to get started!</p></div>';sum.innerHTML='';return}
col.innerHTML=cart.map(c=>{let p=PRODUCTS.find(x=>x.id===c.id);return p?'<div class="cart-item"><img src="'+p.img+'" alt="'+p.name+'"><div class="cart-item-info"><div class="cart-item-name">'+p.name+'</div><div><span class="cart-item-price">₹'+(p.price*c.qty).toLocaleString()+'</span><span class="cart-item-old">₹'+(p.price*2).toLocaleString()+'</span></div><div class="cart-qty"><button onclick="changeQty('+c.id+',-1)">−</button><span>'+c.qty+'</span><button onclick="changeQty('+c.id+',1)">+</button></div><button class="cart-rm" onclick="removeFromCart('+c.id+')">REMOVE</button></div></div>':''}).join('');
let total=getCartTotal();let disc=0;let ship=total>=500?0:40;
if(appliedCoupon){let c=COUPONS[appliedCoupon];
if(c.freeShip)ship=0;else disc=c.disc;
if(c.disc>0)disc=Math.min(total*(c.disc/100),c.disc)}
let final=total-disc+ship;
sum.innerHTML='<div class="order-summary"><h3>ORDER SUMMARY</h3><div class="summary-row"><span>Items</span><span>'+cart.length+'</span></div><div class="summary-row"><span>Subtotal</span><span>₹'+total.toLocaleString()+'</span></div>'+
(disc?'<div class="summary-row" style="color:var(--mint)"><span>Coupon (-'+appliedCoupon+')</span><span>-₹'+disc.toLocaleString()+'</span></div>':'')+
'<div class="summary-row"><span>Shipping</span><span class="'+(ship?'':'green')+'">'+(ship?'₹'+ship:'FREE')+'</span></div>'+
'<div style="display:flex;gap:4px;margin:8px 0"><input id="couponInput" placeholder="Coupon code" style="flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:5px;padding:6px 8px;font-size:10px;font-family:Inter,sans-serif;color:var(--text);outline:none;text-transform:uppercase"><button onclick="applyCoupon()" style="background:var(--violet);border:none;color:#fff;padding:6px 12px;border-radius:5px;font-size:10px;cursor:pointer;font-family:Inter,sans-serif;font-weight:600">Apply</button></div>'+
(appliedCoupon?'<div style="font-size:9px;color:var(--mint);margin-bottom:6px">✅ '+COUPONS[appliedCoupon].msg+'</div>':'<div style="font-size:9px;color:var(--text3);margin-bottom:6px">Try: KRITHI10, WELCOME100, FREESHIP</div>')+
'<div class="summary-row total"><span>Total</span><span>₹'+final.toLocaleString()+'</span></div><button class="place-order-btn" onclick="checkout()">PLACE ORDER</button></div>'}

// ---- Wishlist ----
function toggleWishlist(id){
let idx=wishlist.indexOf(id);
if(idx>-1)wishlist.splice(idx,1);else wishlist.push(id);
renderWishlist();renderProducts(getFilteredProducts());saveState()}

function renderWishlist(){
let grid=document.getElementById('wishlistGrid');
if(!grid)return;
if(!wishlist.length){grid.innerHTML='<div class="empty-state">Your wishlist is empty</div>';return}
let items=wishlist.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
grid.innerHTML=items.map(p=>productCard(p)).join('')}

function submitReview(pid){
let inp=document.getElementById('reviewInput');if(!inp||!inp.value.trim())return;
let sel=document.getElementById('reviewRating');
let rating=sel?parseInt(sel.value):5;
if(!reviews[pid])reviews[pid]=[];
reviews[pid].unshift({user:(currentUser?currentUser.name:'Guest'),text:inp.value.trim(),rating,date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'})});
inp.value='';saveState();showProductDetail(pid);toast('Review posted!');
fetch(API_BASE+'/api/reviews',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({product:String(pid),user:(currentUser?currentUser.name:'Guest'),text:reviews[pid][0].text,rating})}).catch(()=>{})}

// ---- Orders ----
function renderOrdersList(){
let el=document.getElementById('ordersList');
if(!el)return;
if(!orders.length){el.innerHTML='<div class="empty-state">No orders yet. Start shopping!</div>';return}
el.innerHTML=orders.map(o=>{
let stages=['Processing','Shipped','Out for Delivery','Delivered'];
let cur=stages.indexOf(o.status);if(cur<0)cur=0;
let tl=stages.map((s,i)=>'<div style="display:flex;flex-direction:column;align-items:center;flex:1;position:relative"><div style="width:22px;height:22px;border-radius:50%;background:'+(i<=cur?'var(--violet)':'var(--bg3)')+';border:2px solid '+(i<=cur?'var(--violet)':'var(--border)')+';display:flex;align-items:center;justify-content:center;font-size:9px;color:'+(i<=cur?'#fff':'var(--text3)')+';z-index:1">'+(i<cur?'✓':(i===cur?'●':''))+'</div><span style="font-size:8px;color:var(--text3);margin-top:3px;white-space:nowrap">'+s+'</span>'+(i<stages.length-1?'<div style="position:absolute;top:11px;left:calc(50% + 11px);width:calc(100% - 22px);height:2px;background:'+(i<cur?'var(--violet)':'var(--border)')+';z-index:0"></div>':'')+'</div>');
return '<div class="order-card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div><span class="order-id">'+o.id+'</span><span class="order-status '+o.status.toLowerCase()+'">'+o.status+'</span></div><span style="font-size:11px;color:var(--text3)">₹'+o.total.toLocaleString()+'</span></div><div class="order-items">'+o.items.join(', ')+'</div><div style="display:flex;gap:4px;margin:10px 0 4px">'+tl.join('')+'</div><div class="order-meta">'+o.date+' | '+o.tracking+'</div></div>'}).
join('')}

// ---- Product Detail ----
function showProductDetail(id){
let p=PRODUCTS.find(x=>x.id===id);if(!p)return;
recentView=recentView.filter(x=>x!==id);recentView.unshift(id);
if(recentView.length>5)recentView=recentView.slice(0,5);saveState();
showSection('productDetail');
let el=document.getElementById('productDetailContent');
let stars='★'.repeat(Math.floor(p.rating))+(p.rating%1>=0.5?'½':'');
let related=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
let revs=reviews[p.id]||[];
let revHtml=revs.length?'<div style="max-height:200px;overflow-y:auto;margin-top:8px">'+revs.map(r=>'<div style="display:flex;justify-content:space-between;padding:6px 8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:11px"><div><div style="font-weight:600;font-size:10px;color:var(--violet-dim)">'+r.user+'</div><div style="color:var(--text2)">'+r.text+'</div></div><div style="text-align:right;flex-shrink:0"><span style="color:var(--amber)">'+'★'.repeat(r.rating)+'</span><br><span style="font-size:9px;color:var(--text3)">'+r.date+'</span></div></div>').join('')+'</div>':'<p style="font-size:11px;color:var(--text3);margin:6px 0">No reviews yet. Be the first!</p>';

let featHtml=p.features&&p.features.length?'<div style="margin:8px 0"><div style="font-size:11px;font-weight:600;color:var(--text2);margin-bottom:4px">✨ Features</div><ul style="list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:4px">'+p.features.map(f=>'<li style="background:var(--bg3);padding:3px 8px;border-radius:99px;font-size:10px;color:var(--text2)">'+f+'</li>').join('')+'</ul></div>':'';
let mrpHtml=p.mrp&&p.mrp>p.price?'<span style="text-decoration:line-through;color:var(--text3);font-size:14px;margin-right:6px">₹'+p.mrp.toLocaleString()+'</span><span style="background:var(--red);color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:99px;vertical-align:middle">'+(p.discount||Math.round((1-p.price/p.mrp)*100))+'% OFF</span>':'';
el.innerHTML='<div class="product-detail-wrap"><button class="back-btn" onclick="showSection(\'home\')">← Back to Shop</button><div class="detail-grid"><img class="detail-img" src="'+p.img+'" alt="'+p.name+'"><div class="detail-info"><div style="font-size:11px;color:var(--text3);text-transform:uppercase;font-weight:600">'+p.brand+'</div><h1>'+p.name+'</h1><div class="product-rating"><span class="stars">'+stars+'</span> <span>('+p.sales+' sold)</span>'+(p.reviewsCount?' <span style="font-size:11px;color:var(--text3)">| '+p.reviewsCount+' reviews</span>':'')+'</div><div class="detail-price">'+mrpHtml+' ₹'+p.price.toLocaleString()+'</div>'+featHtml+'<div class="detail-desc">'+p.desc+'</div><div class="detail-stock">'+(p.stock>10?'✓ In Stock ('+p.stock+' units)':'⚠ Only '+p.stock+' left!')+'</div><div class="product-actions"><button class="add-cart-btn" style="flex:1;padding:12px;font-size:13px" onclick="addToCart('+p.id+')">Add to Cart</button><button class="add-cart-btn" style="flex:1;padding:12px;font-size:13px;background:var(--amber)" onclick="addToCart('+p.id+');checkout()">Buy Now</button></div></div></div>'+
'<div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px"><h3 style="font-family:Outfit,sans-serif;font-size:.95rem;margin-bottom:8px">📝 Customer Reviews ('+revs.length+')</h3>'+revHtml+
'<div style="display:flex;gap:6px;margin-top:10px"><input id="reviewInput" placeholder="Write a review..." style="flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:8px 10px;font-size:11px;font-family:Inter,sans-serif;color:var(--text);outline:none"><select id="reviewRating" style="background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:8px;font-size:11px;color:var(--text);outline:none;font-family:Inter,sans-serif"><option>1★</option><option>2★</option><option>3★</option><option>4★</option><option selected>5★</option></select><button onclick="submitReview('+p.id+')" style="background:var(--violet);border:none;color:#fff;padding:8px 14px;border-radius:6px;font-size:11px;cursor:pointer;font-family:Inter,sans-serif;font-weight:600">Post</button></div></div>'+
(related.length?'<h3 style="font-family:Outfit,sans-serif;margin:24px 0 12px">Similar Products</h3><div class="products-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">'+related.map(x=>productCard(x)).join('')+'</div>':'')+'</div>'}

// ---- Contact Form ----
function submitContact(){
let name=document.getElementById('contactName');let email=document.getElementById('contactEmail');
let subj=document.getElementById('contactSubject');let msg=document.getElementById('contactMessage');
if(!name.value.trim()||!email.value.trim()||!msg.value.trim()){toast('Please fill in all fields');return}
toast('Thanks '+name.value.split(' ')[0]+'! Your message has been sent. We\'ll respond within 2 hours.');
closeModal('contactModal');
name.value='';email.value='';msg.value=''}

// ---- Coupons ----
const COUPONS={KRITHI10:{disc:10,min:500,msg:'10% off on ₹500+'},WELCOME100:{disc:100,min:0,msg:'₹100 off — Welcome!'},FREESHIP:{disc:0,min:0,msg:'Free Shipping',freeShip:true},SAVE50:{disc:50,min:200,msg:'₹50 off on ₹200+'}};
let appliedCoupon=null;
let paymentMethod='card';
const UPI_QR_ID='keerthikak004@oksbi';
const UPI_MERCHANT='KRITHI AI';

function applyCoupon(){
let inp=document.getElementById('couponInput');if(!inp)return;
let code=inp.value.trim().toUpperCase();
let c=COUPONS[code];
if(!c){toast('Invalid coupon code');return}
if(getCartTotal()<c.min){toast('Minimum ₹'+c.min+' required for '+code);return}
appliedCoupon=code;toast('Coupon applied: '+c.msg);renderCart();renderCheckoutSummary()}

// ---- Checkout ----
function checkout(){
if(!cart.length){toast('Cart is empty!');return}
appliedCoupon=null;
showSection('checkout');
renderCheckout()}

function renderCheckout(){
let el=document.getElementById('checkoutContent');
document.getElementById('step1Tab').className='step active';
document.getElementById('step2Tab').className='step';
document.getElementById('step3Tab').className='step';
el.innerHTML='<div class="checkout-form"><h3 style="font-size:1rem;margin-bottom:6px">Shipping Address</h3><div class="form-group"><label>Full Name</label><input class="form-input" value="Demo User"></div><div class="form-group"><label>Address</label><input class="form-input" value="123 KRITHI Lane, Anna Nagar"></div><div class="form-group"><label>City</label><input class="form-input" value="Chennai"></div><div class="form-group"><label>Phone</label><input class="form-input" value="+91 9876543210"></div><button class="checkout-btn" onclick="checkoutPayment()">Continue to Payment</button></div>'}

function checkoutPayment(){
document.getElementById('step1Tab').className='step done';
document.getElementById('step2Tab').className='step active';
document.getElementById('checkoutContent').innerHTML='<div class="checkout-form"><h3 style="font-size:1rem;margin-bottom:6px">Payment Method</h3><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px"><label class="pay-option" onclick="paymentMethod=\'netbanking\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay" checked> 🏦 Internet Banking: SBI, its associate banks, and other major Indian banks</label><label class="pay-option" onclick="paymentMethod=\'upi\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay"> 📱 UPI: BHIM, Google Pay, PhonePe, Paytm, and other UPI-enabled applications</label><label class="pay-option" onclick="paymentMethod=\'card\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay"> 💳 Card Payments: SBI ATM-cum-Debit Cards, other banks\' Debit Cards, and all major Credit Cards</label><label class="pay-option" onclick="paymentMethod=\'razorpay\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay"> 🔗 Razorpay (Cards / UPI / Wallets / NetBanking)</label><label class="pay-option" onclick="paymentMethod=\'qr\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay"> 📷 Pay via UPI QR (PhonePe / GPay / Paytm)</label><label class="pay-option" onclick="paymentMethod=\'cod\'" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--border);border-radius:8px;cursor:pointer"> <input type="radio" name="pay"> 💵 Cash on Delivery</label></div><button class="checkout-btn" onclick="checkoutConfirm()">Continue to Confirm</button></div>'}

function checkoutConfirm(){
document.getElementById('step2Tab').className='step done';
document.getElementById('step3Tab').className='step active';
let total=getCartTotal();let disc=0;let ship=total>=500?0:40;
if(appliedCoupon){let c=COUPONS[appliedCoupon];
if(c.freeShip)ship=0;else disc=c.disc;
if(c.disc>0)disc=Math.min(total*(c.disc/100),c.disc)}
total=total-disc+ship;
let oid='KRITHI-'+(1000+Math.floor(Math.random()*9000));
let payLabels={netbanking:'🏦 Internet Banking',card:'💳 Card Payments',upi:'📱 UPI',razorpay:'🔗 Razorpay (Cards/UPI/Wallets)',qr:'📷 UPI QR (PhonePe/GPay/Paytm)',cod:'💵 Cash on Delivery'};
let payLabel=payLabels[paymentMethod]||'💳 Credit Card';
document.getElementById('checkoutContent').innerHTML='<div class="checkout-form"><h3 style="font-size:1rem;margin-bottom:6px">Confirm Order</h3><div style="background:var(--bg3);padding:14px;border-radius:8px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Order ID</span><span style="font-family:monospace;color:var(--violet)">#'+oid+'</span></div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>Payment</span><span style="font-size:11px">'+payLabel+'</span></div><div style="display:flex;justify-content:space-between;font-size:12px"><span>Total Amount</span><span style="font-weight:700;font-size:16px">₹'+total.toLocaleString()+'</span></div></div><div style="background:var(--bg3);padding:14px;border-radius:8px;margin-bottom:12px"><div style="font-size:11px;color:var(--text2);margin-bottom:4px">Delivering to:</div><div style="font-size:12px">Demo User, 123 KRITHI Lane, Chennai</div></div><button class="checkout-btn" onclick="placeOrder(\''+oid+'\')">Place Order ✅</button></div>'}

function placeOrder(oid){
if(paymentMethod==='razorpay'){initRazorpayPayment(oid);return}
if(paymentMethod==='qr'){showQRPayment(oid);return}
finalizeOrder(oid)}

function finalizeOrder(oid){
let items=cart.map(c=>{let p=PRODUCTS.find(x=>x.id===c.id);return p?p.name:''}).filter(Boolean);
let total=getCartTotal();let disc=0;let ship=total>=500?0:40;
if(appliedCoupon){let c=COUPONS[appliedCoupon];
if(c.freeShip)ship=0;else disc=c.disc;
if(c.disc>0)disc=Math.min(total*(c.disc/100),c.disc)}
let order={id:oid,date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),items,total:total-disc+ship,status:'Processing',tracking:'KP'+oid.slice(-4)+'IN'};
orders.unshift(order);cart=[];updateCartCount();
if(currentUser){let u=registeredUsers.find(x=>x.email===currentUser.email);if(u){u.orderCount=(u.orderCount||0)+1;u.totalSpent=(u.totalSpent||0)+order.total;callAPI('PATCH','/api/auth/user/order-stats',{email:currentUser.email,total:order.total}).catch(()=>{})}}
saveState();
toast('Order placed! ID: '+oid);
showSection('home');
fetch(API_BASE+'/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:items.map(n=>{let p=PRODUCTS.find(x=>x.name===n);return{product:String(p?p.id:''),name:n,price:p?p.price:0,qty:1}}),total:order.total,status:'Processing',user:currentUser?currentUser.name:'Guest'})}).catch(()=>{})}

function initRazorpayPayment(oid){
let total=getCartTotal();let disc=0;let ship=total>=500?0:40;
if(appliedCoupon){let c=COUPONS[appliedCoupon];
if(c.freeShip)ship=0;else disc=c.disc;
if(c.disc>0)disc=Math.min(total*(c.disc/100),c.disc)}
let amount=total-disc+ship;
fetch(API_BASE+'/api/payment/create-order',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({amount,receipt:oid})})
.then(r=>r.json()).then(order=>{
if(!order.id){toast('Payment failed: could not create order');return}
let options={key:RAZORPAY_KEY_ID,amount:order.amount,currency:order.currency,name:'KRITHI AI',description:'Order '+oid,order_id:order.id,image:'https://keerthika-k004.github.io/krithi-ai/icon-192.png',handler:function(response){fetch(API_BASE+'/api/payment/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature})}).then(r=>r.json()).then(v=>{if(v.status==='ok'){toast('Payment successful!');finalizeOrder(oid)}else toast('Payment verification failed')}).catch(()=>finalizeOrder(oid))},modal:{ondismiss:function(){toast('Payment cancelled')}}};
let rzp=new Razorpay(options);rzp.open()}).catch(()=>{toast('Could not connect to payment server')})}

function showQRPayment(oid){
let total=getCartTotal();let disc=0;let ship=total>=500?0:40;
if(appliedCoupon){let c=COUPONS[appliedCoupon];
if(c.freeShip)ship=0;else disc=c.disc;
if(c.disc>0)disc=Math.min(total*(c.disc/100),c.disc)}
let amount=total-disc+ship;
let upiLink='upi://pay?pa='+UPI_QR_ID+'&pn='+encodeURIComponent(UPI_MERCHANT)+'&am='+amount+'&cu=INR&tn='+encodeURIComponent('Order '+oid);
let qrUrl='https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='+encodeURIComponent(upiLink);
let existing=document.getElementById('qrModalOverlay');if(existing)existing.remove();
let ov=document.createElement('div');ov.id='qrModalOverlay';ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center';
ov.onclick=function(e){if(e.target===ov){ov.remove();toast('Payment cancelled')}};
ov.innerHTML='<div style="background:var(--card);padding:28px;border-radius:16px;text-align:center;max-width:340px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.3)"><h3 style="margin-bottom:4px;font-family:Outfit,sans-serif">Scan to Pay</h3><p style="font-size:12px;color:var(--text2);margin-bottom:12px">Scan with PhonePe / GPay / Paytm</p><img src="'+qrUrl+'" alt="QR Code" style="width:220px;height:220px;border-radius:12px;margin-bottom:12px" crossorigin="anonymous"><div style="font-size:13px;font-weight:600;margin-bottom:4px">Amount: ₹'+amount.toLocaleString()+'</div><div style="font-size:11px;color:var(--text3);margin-bottom:12px">UPI ID: '+UPI_QR_ID+'</div><div style="display:flex;gap:8px;justify-content:center"><button class="btn-primary" onclick="document.getElementById(\'qrModalOverlay\').remove();finalizeOrder(\''+oid+'\')">✅ Paid</button><button class="checkout-btn" style="background:var(--bg2);color:var(--text)" onclick="document.getElementById(\'qrModalOverlay\').remove();toast(\'Payment cancelled\')">Cancel</button></div><p style="font-size:10px;color:var(--text3);margin-top:10px">After payment, click <strong>Paid</strong> to confirm</p></div>';
document.body.appendChild(ov)}

// ---- Admin ----
function showAdminPanel(){
showSection('admin');
renderAdmin('dashboard')}

function renderAdmin(sec){
let el=document.getElementById('adminContent');
if(!sec)sec='dashboard';
let sidebar='<div class="admin-panel"><div class="admin-sidebar"><h3>⚙️ AI Admin</h3>'+
['dashboard','users','prime','forecast','autopilot','products','sales','orders','customers','settings'].map(s=>'<button class="'+(sec===s?'active':'')+'" onclick="renderAdmin(\''+s+'\')">'+(s==='settings'?'⚙️ Settings':s.charAt(0).toUpperCase()+s.slice(1))+'</button>').join('')+
'<div style="border-top:1px solid var(--border);margin-top:10px;padding-top:10px"><button onclick="adminLogout()" style="color:var(--red)">🚪 Logout</button></div>'+
'</div><div class="admin-main">';
if(sec==='dashboard'){
let totalR=PRODUCTS.reduce((s,p)=>s+p.sales*p.price,0);
let topP=[...PRODUCTS].sort((a,b)=>b.sales-a.sales).slice(0,5);
let lowS=[...PRODUCTS].filter(p=>p.stock<20);
let cats=[...new Set(PRODUCTS.map(p=>p.cat))];
let catRev=cats.map(c=>{let items=PRODUCTS.filter(p=>p.cat===c);return{cat:c,rev:items.reduce((s,p)=>s+p.sales*p.price,0),cnt:items.length}}).sort((a,b)=>b.rev-a.rev);
let maxRev=Math.max(...catRev.map(c=>c.rev),1);
let maxSales=Math.max(...topP.map(p=>p.sales*p.price),1);
el.innerHTML=sidebar+'<h2>📊 Dashboard</h2><div class="stat-grid"><div class="stat-card"><div class="stat-value">₹'+(totalR/100000).toFixed(1)+'L</div><div class="stat-label">Revenue</div></div><div class="stat-card"><div class="stat-value">'+PRODUCTS.length+'</div><div class="stat-label">Products</div></div><div class="stat-card"><div class="stat-value">'+PRODUCTS.reduce((s,p)=>s+p.sales,0)+'</div><div class="stat-label">Total Sales</div></div><div class="stat-card"><div class="stat-value">'+USER_MATRIX.length+'</div><div class="stat-label">AI Profiles</div></div></div>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">'+
'<div style="background:var(--bg3);border-radius:8px;padding:12px"><h4 style="font-size:11px;color:var(--text2);margin-bottom:8px">💰 Revenue by Category</h4>'+catRev.map(c=>'<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;font-size:10px"><span style="min-width:55px;color:var(--text3)">'+c.cat+'</span><div style="flex:1;height:14px;background:var(--bg4);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+((c.rev/maxRev)*100).toFixed(1)+'%;background:linear-gradient(90deg,var(--violet),var(--violet2));border-radius:3px;transition:width .5s"></div></div><span style="min-width:40px;text-align:right;color:var(--mint);font-weight:600">₹'+(c.rev/1000).toFixed(0)+'K</span></div>').join('')+'</div>'+
'<div style="background:var(--bg3);border-radius:8px;padding:12px"><h4 style="font-size:11px;color:var(--text2);margin-bottom:8px">🔥 Top Products Revenue</h4>'+topP.map((p,i)=>'<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;font-size:10px"><span style="min-width:16px;font-weight:700;color:var(--violet)">#'+(i+1)+'</span><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+p.name.substring(0,18)+'</span><div style="width:50px;height:10px;background:var(--bg4);border-radius:2px;overflow:hidden"><div style="height:100%;width:'+(((p.sales*p.price)/maxSales)*100).toFixed(1)+'%;background:var(--mint);border-radius:2px"></div></div><span style="min-width:30px;text-align:right;font-weight:600;color:var(--amber)">₹'+((p.sales*p.price)/1000).toFixed(0)+'K</span></div>').join('')+'</div></div>'+
'<h3 style="font-size:12px;margin:0 0 8px;color:var(--text2)">⚠ Low Stock Alerts</h3>'+lowS.map(p=>'<div class="admin-row"><span>'+p.name+'</span><span style="color:var(--red);margin-left:auto">'+p.stock+' left</span></div>').join('')+'</div></div>'}
else if(sec==='users'){
el.innerHTML=sidebar+'<h2>👤 Registered Users</h2><div id="usersLoading" style="color:var(--text3);font-size:12px">Loading...</div></div></div>';
callAPI('GET','/api/auth/users').then(data=>{
  if(data&&data.users){
    let dbUsers=data.users;
    let seen=new Set(dbUsers.map(u=>u.email));
    let all=[...dbUsers,...registeredUsers.filter(u=>!seen.has(u.email))];
    renderUsersTable(el,sidebar,all)}
}).catch(()=>{renderUsersTable(el,sidebar,registeredUsers)})}
else if(sec==='prime'){
el.innerHTML=sidebar+'<div class="prime-chat"><div class="prime-chat-header"><div class="prime-chat-avatar"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><div><div class="prime-chat-title">KRITHI Prime</div><div class="prime-chat-status">● Online — NL2SQL AI</div></div></div><div class="prime-chat-messages" id="primeMessages"><div class="msg assistant"><div class="msg-bubble">Hello! I\'m <strong>KRITHI Prime</strong>, your admin AI assistant. Ask me anything about your business data!</div><div class="quick-replies"><button onclick="primeQuick(\'Show top products by sales\')">🏆 Top Products</button><button onclick="primeQuick(\'What is total revenue?\')">💰 Total Revenue</button><button onclick="primeQuick(\'Which products are low on stock?\')">📉 Low Stock</button><button onclick="primeQuick(\'Analyze electronics category\')">📊 Electronics</button></div></div></div><div class="prime-chat-input"><input type="text" id="primeInput" placeholder="Ask a business question..." onkeypress="primeKeyPress(event)"><button class="prime-send-btn" onclick="primeSendMessage()"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div></div></div></div>'}
else if(sec==='forecast'){
let rows=PRODUCTS.slice(0,10).map(p=>{let hist=[120,145,132,158,142,p.sales];let dp=demandPrediction(hist,3);return'<div class="admin-row"><span>'+p.name+'</span><span>Predicted: '+dp.predicted+'</span><span style="color:'+(dp.trend>0?'var(--green)':'var(--red)')+'">'+(dp.trend>0?'↑':'↓')+' '+Math.abs(dp.trend)+'%</span><span style="margin-left:auto;font-size:10px;color:var(--text3)">Next period</span></div>'}).join('');
el.innerHTML=sidebar+'<h2>📈 Demand Forecast</h2><p style="font-size:12px;color:var(--text2);margin-bottom:14px">AI predictions using Weighted Moving Average + Trend</p>'+rows+'</div></div>'}
else if(sec==='autopilot'){
let rows=PRODUCTS.map(p=>{let hist=[120,145,132,158,142,p.sales];let dp=demandPrediction(hist,3);let reorder=p.stock<Math.round(dp.predicted*0.3);return'<div class="admin-row"><span>'+(reorder?'⚠️ ':'')+p.name+'</span><span>Stock: '+p.stock+'</span><span>Predicted: '+dp.predicted+'</span><span style="color:'+(reorder?'var(--amber)':'var(--green)')+'">'+(reorder?'Reorder Needed':'OK')+'</span></div>'}).join('');
el.innerHTML=sidebar+'<h2>🤖 Automation Engine</h2><p style="font-size:12px;color:var(--text2);margin-bottom:14px">Automated inventory replenishment based on demand predictions</p>'+rows+'</div></div>'}
else if(sec==='products'){
el.innerHTML=sidebar+'<h2>📦 Products ('+PRODUCTS.length+')</h2>'+PRODUCTS.map(p=>'<div class="admin-row"><span>#'+p.id+'</span><span>'+p.name+'</span><span style="color:var(--text2)">'+p.cat+'</span><span>₹'+p.price.toLocaleString()+'</span><span style="font-size:10px;color:var(--text3)">'+p.stock+' in stock</span><button onclick="editProduct('+p.id+')" style="background:none;border:1px solid var(--border);color:var(--violet);padding:2px 10px;border-radius:4px;cursor:pointer;font-size:10px;font-family:Inter,sans-serif">✏️ Edit</button></div>').join('')+'</div></div>'}
else if(sec==='sales'){
let active=getActiveSale();
let totalCats=[...new Set(SALE_EVENTS.flatMap(s=>s.categories))];
let prodInSales=SALE_EVENTS.map(s=>({...s,count:PRODUCTS.filter(p=>s.categories.includes(p.cat)).length,rev:PRODUCTS.filter(p=>s.categories.includes(p.cat)).reduce((t,p)=>t+p.sales*p.price,0)}));
let maxRev=Math.max(...prodInSales.map(s=>s.rev),1);
renderSaleCalendar();
el.innerHTML=sidebar+
'<h2>📅 Sale Calendar</h2>'+
'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px">'+
  '<div class="stat-card"><div class="stat-value">'+(active?active.emoji+' '+active.name:'None')+'</div><div class="stat-label">Active Sale</div></div>'+
  '<div class="stat-card"><div class="stat-value">'+SALE_EVENTS.length+'</div><div class="stat-label">Total Events</div></div>'+
  '<div class="stat-card"><div class="stat-value">'+totalCats.length+'</div><div class="stat-label">Categories Covered</div></div>'+
  '<div class="stat-card"><div class="stat-value">'+PRODUCTS.filter(p=>active&&active.categories.includes(p.cat)).length+'</div><div class="stat-label">Products on Sale</div></div>'+
'</div>'+
'<div class="sale-calendar-grid" id="saleCalendarGrid"></div>'+
'<h3 style="font-size:12px;color:var(--text2);margin:16px 0 8px">📊 Revenue Impact by Event</h3>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
prodInSales.map(s=>'<div style="background:var(--bg3);border-radius:8px;padding:12px;border-left:3px solid '+(active&&active.id===s.id?'var(--violet)':'var(--border)')+'">'+
  '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'+
    '<span style="font-size:12px;font-weight:600">'+s.emoji+' '+s.name+'</span>'+
    '<span style="font-size:10px;color:var(--text3)">'+s.discount+'% OFF</span>'+
  '</div>'+
  '<div style="display:flex;gap:6px;font-size:10px;color:var(--text2);margin-bottom:4px">'+s.categories.map(c=>'<span style="background:var(--bg4);padding:1px 6px;border-radius:3px">'+c+'</span>').join('')+'</div>'+
  '<div style="display:flex;justify-content:space-between;font-size:10px">'+
    '<span>'+s.count+' products</span>'+
    '<span style="color:var(--mint)">₹'+(s.rev/100000).toFixed(1)+'L revenue</span>'+
  '</div>'+
  '<div style="height:4px;background:var(--bg4);border-radius:2px;margin-top:6px;overflow:hidden">'+
    '<div style="height:100%;width:'+((s.rev/maxRev)*100).toFixed(1)+'%;background:linear-gradient(90deg,var(--violet),var(--violet2));border-radius:2px"></div>'+
  '</div>'+
'</div>').join('')+
'</div></div></div>'}
else if(sec==='orders'){
let allOrders=orders.length?orders:[{id:'KRITHI-3842',date:'18 May 2026',items:['Crystal Embroidered Dress'],total:2499,status:'Delivered',tracking:'KP3842IN'},{id:'KRITHI-3841',date:'15 May 2026',items:['Wireless Headphones'],total:7999,status:'Shipped',tracking:'KP3841IN'}];
el.innerHTML=sidebar+'<h2>📋 All Orders</h2>'+allOrders.map(o=>'<div class="admin-row"><span style="font-family:monospace;font-size:11px;color:var(--violet)">'+o.id+'</span><span>'+o.items[0]+'...</span><span class="order-status '+o.status.toLowerCase()+'">'+o.status+'</span><span>₹'+o.total.toLocaleString()+'</span></div>').join('')+'</div></div>'}
else if(sec==='customers'){
let rows=USER_MATRIX.map((row,i)=>{let segs=classifyUser(row);return'<div class="admin-row"><span>User #'+(i+1)+'</span><span style="color:var(--violet)">'+segs.join(', ')+'</span><span>'+(row.reduce((s,v)=>s+v,0))+' interactions</span></div>'}).join('');
el.innerHTML=sidebar+'<h2>👥 AI Customer Segments</h2><p style="font-size:12px;color:var(--text2);margin-bottom:14px">Automatically classified by k-means scoring algorithm</p>'+rows+'</div></div>'}
else if(sec==='settings'){
el.innerHTML=sidebar+'<h2>⚙️ Admin Settings</h2><div style="display:grid;gap:16px">'+
// Profile Card
'<div style="background:var(--bg3);border-radius:10px;padding:16px"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Admin Profile</h3>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
'<div><label style="font-size:10px;color:var(--text3)">Email</label><div style="display:flex;gap:6px"><input id="adminEmailField" value="'+adminSettings.adminEmail+'" class="form-input" style="flex:1;padding:7px 10px;font-size:12px"><button onclick="sendChangeEmailOtp()" style="background:var(--violet);border:none;color:#fff;padding:7px 12px;border-radius:6px;cursor:pointer;font-size:10px;font-family:Inter,sans-serif;font-weight:600;white-space:nowrap">Change</button></div>'+
'<div id="adminEmailStatus" style="font-size:10px;color:var(--text3);margin-top:4px"></div></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Role</label><div style="font-size:12px;padding:8px 10px;background:var(--bg4);border-radius:6px;color:var(--mint)">Super Admin</div></div>'+
'</div></div>'+
// Store Settings
'<div style="background:var(--bg3);border-radius:10px;padding:16px"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Store Configuration</h3>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
'<div><label style="font-size:10px;color:var(--text3)">Store Name</label><input id="setStoreName" value="'+adminSettings.storeName+'" class="form-input" style="padding:7px 10px;font-size:12px" onchange="adminSettings.storeName=this.value;saveAdminState()"></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Currency</label><select id="setCurrency" class="form-input" style="padding:7px 10px;font-size:12px;appearance:auto" onchange="adminSettings.currency=this.value;saveAdminState()"><option value="INR"'+(adminSettings.currency==='INR'?' selected':'')+'>₹ INR</option><option value="USD"'+(adminSettings.currency==='USD'?' selected':'')+'>$ USD</option><option value="EUR"'+(adminSettings.currency==='EUR'?' selected':'')+'>€ EUR</option></select></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Tax Rate (%)</label><input id="setTax" type="number" value="'+adminSettings.taxRate+'" class="form-input" style="padding:7px 10px;font-size:12px" onchange="adminSettings.taxRate=parseInt(this.value)||0;saveAdminState()"></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Free Shipping Above (₹)</label><input id="setShip" type="number" value="'+adminSettings.shipThreshold+'" class="form-input" style="padding:7px 10px;font-size:12px" onchange="adminSettings.shipThreshold=parseInt(this.value)||0;saveAdminState()"></div>'+
'</div></div>'+
// Notifications
'<div style="background:var(--bg3);border-radius:10px;padding:16px"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> Notification Preferences</h3>'+
'<div style="display:flex;flex-direction:column;gap:8px">'+
['notifyLowStock','notifyDailyReport','notifyNewOrder'].map(k=>{
let labels={notifyLowStock:'🔴 Low Stock Alerts',notifyDailyReport:'📊 Daily Sales Report',notifyNewOrder:'🛒 New Order Notifications'};
let descs={notifyLowStock:'Get notified when product stock falls below threshold',notifyDailyReport:'Receive daily email with sales summary and analytics',notifyNewOrder:'Alert when a new order is placed on the store'};
return '<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg4);border-radius:6px;cursor:pointer"><input type="checkbox"'+(adminSettings[k]?' checked':'')+' onchange="adminSettings[\''+k+'\']=this.checked;saveAdminState()" style="accent-color:var(--violet)"><div><div style="font-size:12px">'+labels[k]+'</div><div style="font-size:9px;color:var(--text3)">'+descs[k]+'</div></div></label>'
}).join('')+'</div></div>'+
// Password Change
'<div style="background:var(--bg3);border-radius:10px;padding:16px"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Change Password</h3>'+
'<div id="pwStep1">'+
'<div style="display:flex;gap:8px;align-items:end">'+
'<div style="flex:1"><label style="font-size:10px;color:var(--text3)">Current Password</label><input type="password" id="curPass" placeholder="Enter current password" class="form-input" style="padding:7px 10px;font-size:12px" onkeypress="if(event.key===\'Enter\')verifyCurrentPassword()"></div>'+
'<button onclick="verifyCurrentPassword()" id="verifyPwBtn" style="background:var(--violet);border:none;color:#fff;padding:7px 16px;border-radius:6px;cursor:pointer;font-size:11px;font-family:Inter,sans-serif;font-weight:600;white-space:nowrap">Verify</button>'+
'</div>'+
'<div id="pwVerifyMsg" style="font-size:10px;color:var(--text3);margin-top:4px"></div>'+
'</div>'+
'<div id="pwStep2" style="display:none;margin-top:10px">'+
'<div style="display:flex;gap:8px;align-items:end;flex-wrap:wrap">'+
'<div style="flex:1;min-width:120px"><label style="font-size:10px;color:var(--text3)">New Password</label><input type="password" id="newPass" placeholder="Min 8 characters" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div style="flex:1;min-width:120px"><label style="font-size:10px;color:var(--text3)">Confirm New Password</label><input type="password" id="confirmPass" placeholder="Re-enter new password" class="form-input" style="padding:7px 10px;font-size:12px" onkeypress="if(event.key===\'Enter\')changeAdminPassword()"></div>'+
'<button onclick="changeAdminPassword()" id="updatePwBtn" style="background:var(--green);border:none;color:#fff;padding:7px 16px;border-radius:6px;cursor:pointer;font-size:11px;font-family:Inter,sans-serif;font-weight:600;white-space:nowrap">Update</button>'+
'</div>'+
'<div id="pwUpdateMsg" style="font-size:10px;color:var(--text3);margin-top:4px"></div>'+
'</div></div>'+
// Add Product
'<div style="background:var(--bg3);border-radius:10px;padding:16px" id="addProductCard"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add New Product</h3>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
'<div><label style="font-size:10px;color:var(--text3)">Product Name *</label><input id="apName" placeholder="e.g. Leather Handbag" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Category *</label><select id="apCat" class="form-input" style="padding:7px 10px;font-size:12px">'+
['fashion','mobiles','electronics','home','beauty','books','toys','sports','grocery'].map(c=>'<option value="'+c+'">'+c.charAt(0).toUpperCase()+c.slice(1)+'</option>').join('')+
'</select></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Price (₹) *</label><input id="apPrice" type="number" placeholder="e.g. 2499" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Stock *</label><input id="apStock" type="number" placeholder="e.g. 50" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div style="grid-column:1/3"><label style="font-size:10px;color:var(--text3)">Image URL</label><input id="apImg" placeholder="https://images.unsplash.com/..." class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div style="grid-column:1/3"><label style="font-size:10px;color:var(--text3)">Description</label><textarea id="apDesc" placeholder="Product description..." class="form-input" style="padding:7px 10px;font-size:12px;min-height:50px;resize:vertical"></textarea></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Brand</label><input id="apBrand" placeholder="e.g. Zara" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'<div><label style="font-size:10px;color:var(--text3)">Rating (0-5)</label><input id="apRating" type="number" min="0" max="5" step="0.1" placeholder="4.5" class="form-input" style="padding:7px 10px;font-size:12px"></div>'+
'</div>'+
'<button onclick="addNewProduct()" style="margin-top:12px;background:var(--violet);border:none;color:#fff;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:12px;font-family:Inter,sans-serif;font-weight:600">➕ Add Product</button>'+
'<div id="apStatus" style="margin-top:8px;font-size:11px;color:var(--green);display:none"></div>'+
'</div>'+
// Activity Log
'<div style="background:var(--bg3);border-radius:10px;padding:16px"><h3 style="font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:6px"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> Activity Log</h3>'+
'<div style="max-height:200px;overflow-y:auto;font-size:10px">'+(adminActivityLog.length?adminActivityLog.slice(0,30).map(e=>'<div style="display:flex;justify-content:space-between;padding:4px 6px;border-bottom:1px solid var(--border)"><span style="color:'+(e.action==='login_success'?'var(--mint)':'var(--text3)')+'">'+e.action+'</span><span style="color:var(--text2)">'+new Date(e.time).toLocaleString()+'</span></div>').join(''):'<div style="color:var(--text3);padding:8px;text-align:center">No activity recorded yet</div>')+'</div>'+
'<button onclick="adminActivityLog=[];saveAdminState();renderAdmin(\'settings\')" style="background:none;border:1px solid var(--border);color:var(--text3);padding:4px 10px;border-radius:4px;cursor:pointer;font-size:10px;margin-top:8px">🗑 Clear Log</button>'+
'</div>'+
'</div></div>'}}
function renderUsersTable(el,sidebar,list){
let rows=list.length?list.map((u,i)=>'<div class="admin-row"><span>#'+(i+1)+'</span><span style="color:var(--violet)">'+u.name+'</span><span style="font-size:11px;color:var(--text2)">'+u.email+'</span><span style="font-size:10px;color:var(--text3)">'+(u.phone||'-')+'</span><span style="font-size:10px">'+(u.registeredAt||u.createdAt?new Date(u.registeredAt||u.createdAt).toLocaleDateString():'-')+'</span><span style="font-size:10px;color:var(--amber)">'+(u.orderCount||0)+' orders / ₹'+((u.totalSpent||0).toLocaleString())+'</span><span style="font-size:10px;color:var(--text3)">'+(u.lastLogin?new Date(u.lastLogin).toLocaleDateString():'-')+'</span></div>').join(''):'<div class="admin-row" style="color:var(--text3);justify-content:center">No registered users yet</div>';
el.innerHTML=sidebar+'<h2>👤 Registered Users ('+list.length+')</h2><div style="display:grid;grid-template-columns:40px 1fr 1.2fr 0.8fr 0.8fr 1fr 0.8fr;gap:1px;background:var(--border);border-radius:8px;overflow:hidden;margin-bottom:10px;font-size:9px;color:var(--text2)"><div style="padding:6px 8px;background:var(--bg3);font-weight:600">#</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Name</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Email</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Phone</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Registered</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Orders/Spent</div><div style="padding:6px 8px;background:var(--bg3);font-weight:600">Last Login</div></div>'+rows+'</div></div>'}
function addNewProduct(){
  let name=document.getElementById('apName').value.trim();
  let cat=document.getElementById('apCat').value;
  let price=parseFloat(document.getElementById('apPrice').value);
  let stock=parseInt(document.getElementById('apStock').value);
  let img=document.getElementById('apImg').value.trim();
  let desc=document.getElementById('apDesc').value.trim();
  let brand=document.getElementById('apBrand').value.trim();
  let rating=parseFloat(document.getElementById('apRating').value);
  let st=document.getElementById('apStatus');
  if(!name||!price||isNaN(stock)){st.style.display='block';st.style.color='var(--red)';st.textContent='❌ Name, Price & Stock required';return}
  let id=Math.max(...PRODUCTS.map(p=>p.id))+1;
  PRODUCTS.push({id,name,cat,price,img:img||'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',desc:desc||name,brand:brand||'Generic',rating:rating||4,stock:stock||0,sales:0});
  st.style.display='block';st.style.color='var(--green)';st.textContent='✅ "'+name+'" added! ID: #'+id;
  document.getElementById('apName').value='';document.getElementById('apPrice').value='';document.getElementById('apStock').value='';
  document.getElementById('apImg').value='';document.getElementById('apDesc').value='';document.getElementById('apBrand').value='';document.getElementById('apRating').value='';
  adminAudit('product_added','Added: '+name);saveState();renderProducts(getFilteredProducts())}
let editingProductId=null;
function editProduct(id){
  let p=PRODUCTS.find(x=>x.id===id);if(!p){toast('Product not found');return}
  editingProductId=id;
  document.getElementById('epTitle').textContent='Edit: '+p.name;
  document.getElementById('epName').value=p.name;
  document.getElementById('epCat').value=p.cat;
  document.getElementById('epPrice').value=p.price;
  document.getElementById('epStock').value=p.stock;
  document.getElementById('epImg').value=p.img||'';
  document.getElementById('epDesc').value=p.desc||'';
  document.getElementById('epBrand').value=p.brand||'';
  document.getElementById('epRating').value=p.rating||'';
  document.getElementById('epStatus').style.display='none';
  showModal('editProductModal')}
function saveEditProduct(){
  let p=PRODUCTS.find(x=>x.id===editingProductId);if(!p)return
  let name=document.getElementById('epName').value.trim();
  let price=parseFloat(document.getElementById('epPrice').value);
  let stock=parseInt(document.getElementById('epStock').value);
  if(!name||!price||isNaN(stock)){let st=document.getElementById('epStatus');st.style.display='block';st.style.color='var(--red)';st.textContent='❌ Name, Price & Stock required';return}
  let oldName=p.name;
  p.name=name;p.cat=document.getElementById('epCat').value;p.price=price;p.stock=stock;
  p.img=document.getElementById('epImg').value.trim()||p.img;
  p.desc=document.getElementById('epDesc').value.trim()||p.desc;
  p.brand=document.getElementById('epBrand').value.trim()||p.brand;
  p.rating=parseFloat(document.getElementById('epRating').value)||p.rating;
  let st=document.getElementById('epStatus');st.style.display='block';st.style.color='var(--green)';st.textContent='✅ Updated!';
  adminAudit('product_edited','Edited: '+oldName+' → '+name);saveState();closeModal('editProductModal');
  renderAdmin('products');renderProducts(getFilteredProducts());toast('✅ "'+name+'" updated!')}

function primeQuick(msg){
let inp=document.getElementById('primeInput');
if(inp){inp.value=msg;primeSendMessage()}}

function primeSendMessage(){
let inp=document.getElementById('primeInput');
let q=inp?inp.value.trim():'';if(!q)return;
addPrimeMessage(q,true);inp.value='';
if(apiAvailable){
  addPrimeMessage('<em style="font-size:11px;color:var(--text3)">Processing...</em>',false);
  callAPI('POST','/api/prime',{query:q}).then(data=>{
    document.querySelectorAll('#primeMessages .msg:last-child .msg-bubble').forEach(el=>{
      if(el.innerHTML.includes('Processing'))el.parentElement.remove()});
    if(data.reply){addPrimeMessage(data.reply,false);addPrimeQuickReplies()}
  }).catch(()=>{setTimeout(()=>{primeQuery(q)},400)})}
else{setTimeout(()=>{primeQuery(q)},400)}}

function addPrimeMessage(msg,isUser){
let el=document.getElementById('primeMessages');if(!el)return;
let d=document.createElement('div');d.className='msg'+(isUser?' user':' assistant');
let b=document.createElement('div');b.className='msg-bubble';
if(isUser){b.textContent=msg}else b.innerHTML=msg;
d.appendChild(b);el.appendChild(d);el.scrollTop=el.scrollHeight}

function primeKeyPress(e){if(e.key==='Enter')primeSendMessage()}

function primeQuery(q){
let ql=q.toLowerCase();let ans='';let sql='';
if(ql.includes('top')||ql.includes('popular')||ql.includes('best')){
let top=[...PRODUCTS].sort((a,b)=>b.sales-a.sales).slice(0,5);
sql='SELECT name, sales, price, (sales * price) AS revenue\nFROM products\nORDER BY sales DESC\nLIMIT 5;';
ans='<strong>🏆 Top 5 Products by Sales</strong><div style="margin-top:8px">'+top.map((p,i)=>'<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:12px"><span style="font-weight:700;color:var(--violet);min-width:24px">#'+(i+1)+'</span><span style="flex:1">'+p.name+'</span><span style="color:var(--green)">'+p.sales+' sold</span><span style="color:var(--text2)">₹'+(p.sales*p.price).toLocaleString()+'</span></div>').join('')+'</div>'}
else if(ql.includes('revenue')||ql.includes('total')||ql.includes('sales')){let r=PRODUCTS.reduce((s,p)=>s+p.sales*p.price,0);
sql='SELECT SUM(sales * price) AS total_revenue, COUNT(*) AS total_products\nFROM products;';
ans='<strong>💰 Revenue Report</strong><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px"><div style="background:var(--bg3);padding:14px;border-radius:8px;text-align:center"><div style="font-size:1.3rem;font-weight:700;color:var(--violet)">₹'+(r/100000).toFixed(2)+'L</div><div style="font-size:10px;color:var(--text2);margin-top:2px">Total Revenue</div></div><div style="background:var(--bg3);padding:14px;border-radius:8px;text-align:center"><div style="font-size:1.3rem;font-weight:700;color:var(--mint)">'+PRODUCTS.length+'</div><div style="font-size:10px;color:var(--text2);margin-top:2px">Products</div></div></div>'}
else if(ql.includes('low')||ql.includes('stock')||ql.includes('inventory')){let low=PRODUCTS.filter(p=>p.stock<20);
sql='SELECT name, stock\nFROM products\nWHERE stock < 20\nORDER BY stock ASC;';
ans='<strong>⚠ Low Stock Alert</strong>'+(low.length?'<div style="margin-top:8px;max-height:200px;overflow-y:auto">'+low.map(p=>'<div style="display:flex;justify-content:space-between;padding:8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:12px"><span>'+p.name+'</span><span style="color:var(--red);font-weight:600">'+p.stock+' left</span></div>').join('')+'</div>':'<p style="color:var(--mint);margin-top:8px;font-size:13px">All products have sufficient stock ✓</p>')+'<p style="font-size:10px;color:var(--text3);margin-top:6px">'+low.length+' products need restock</p>'}
else if(ql.includes('electronic')||ql.includes('category')||ql.includes('analyze')){let cat=ql.includes('fashion')?'fashion':ql.includes('mobile')?'mobiles':ql.includes('beauty')?'beauty':ql.includes('electron')?'electronics':ql.includes('home')?'home':ql.includes('sport')?'sports':ql.includes('food')?'food':ql.includes('furniture')?'furniture':'electronics';let items=PRODUCTS.filter(p=>p.cat===cat);let rev=items.reduce((s,p)=>s+p.sales*p.price,0);
sql='SELECT category, COUNT(*) AS product_count, SUM(sales * price) AS revenue\nFROM products\nWHERE category = \''+cat+'\'\nGROUP BY category;';
ans='<strong>📊 '+cat.charAt(0).toUpperCase()+cat.slice(1)+' Analysis</strong><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px"><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--violet)">'+items.length+'</div><div style="font-size:9px;color:var(--text2)">Products</div></div><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--mint)">₹'+(rev/100000).toFixed(1)+'L</div><div style="font-size:9px;color:var(--text2)">Revenue</div></div></div><div style="margin-top:8px;max-height:150px;overflow-y:auto">'+items.slice(0,5).map(p=>'<div style="display:flex;justify-content:space-between;padding:6px;background:var(--bg3);border-radius:6px;margin-bottom:3px;font-size:11px"><span>'+p.name+'</span><span style="color:var(--green)">₹'+p.price.toLocaleString()+'</span></div>').join('')+'</div>'}
else if(ql.includes('help')||ql.includes('what')||ql.includes('can')||ql.includes('how')){ans='<strong>🤖 KRITHI Prime Help</strong><div style="margin-top:8px;font-size:12px;color:var(--text2);line-height:1.8">Try asking:<br>• "Top products"<br>• "Total revenue"<br>• "Low stock"<br>• "Analyze electronics"<br>• "Average price"<br>• "Best performing category"<br>• "Compare fashion vs electronics"<br>• "Products above ₹50,000"</div>'}
else {
  let primeMatch=matchFAQ(q,PRIME_FAQ);
  if(primeMatch){
    let cat=primeMatch.category;
    if(cat==='sales'&&ql.includes('top')){let top=[...PRODUCTS].sort((a,b)=>b.sales-a.sales).slice(0,5);
sql='SELECT name, sales, price, (sales * price) AS revenue\nFROM products\nORDER BY sales DESC\nLIMIT 5;';
ans='<strong>🏆 Top 5 Products by Sales</strong><div style="margin-top:8px">'+top.map((p,i)=>'<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:12px"><span style="font-weight:700;color:var(--violet);min-width:24px">#'+(i+1)+'</span><span style="flex:1">'+p.name+'</span><span style="color:var(--green)">'+p.sales+' sold</span><span style="color:var(--text2)">₹'+(p.sales*p.price).toLocaleString()+'</span></div>').join('')+'</div>'}
    else if(cat==='sales'){let r=PRODUCTS.reduce((s,p)=>s+p.sales*p.price,0);
sql='SELECT SUM(sales * price) AS total_revenue, COUNT(*) AS total_products\nFROM products;';
ans='<strong>💰 Revenue Report</strong><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px"><div style="background:var(--bg3);padding:14px;border-radius:8px;text-align:center"><div style="font-size:1.3rem;font-weight:700;color:var(--violet)">₹'+(r/100000).toFixed(2)+'L</div><div style="font-size:10px;color:var(--text2);margin-top:2px">Total Revenue</div></div><div style="background:var(--bg3);padding:14px;border-radius:8px;text-align:center"><div style="font-size:1.3rem;font-weight:700;color:var(--mint)">'+PRODUCTS.length+'</div><div style="font-size:10px;color:var(--text2);margin-top:2px">Products</div></div></div>'}
    else if(cat==='inventory'){let low=PRODUCTS.filter(p=>p.stock<20);
sql='SELECT name, stock\nFROM products\nWHERE stock < 20\nORDER BY stock ASC;';
ans='<strong>⚠ Low Stock Alert</strong>'+(low.length?'<div style="margin-top:8px;max-height:200px;overflow-y:auto">'+low.map(p=>'<div style="display:flex;justify-content:space-between;padding:8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:12px"><span>'+p.name+'</span><span style="color:var(--red);font-weight:600">'+p.stock+' left</span></div>').join('')+'</div>':'<p style="color:var(--mint);margin-top:8px;font-size:13px">All products have sufficient stock ✓</p>')+'<p style="font-size:10px;color:var(--text3);margin-top:6px">'+low.length+' products need restock</p>'}
    else if(cat==='analytics'){let items=PRODUCTS;let rev=items.reduce((s,p)=>s+p.sales*p.price,0);
sql='SELECT COUNT(*) AS products, SUM(sales * price) AS revenue, SUM(sales) AS total_sales\nFROM products;';
ans='<strong>📊 Business Overview</strong><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px"><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--violet)">'+items.length+'</div><div style="font-size:9px;color:var(--text2)">Products</div></div><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--mint)">₹'+(rev/100000).toFixed(1)+'L</div><div style="font-size:9px;color:var(--text2)">Revenue</div></div><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--amber)">'+items.reduce((s,p)=>s+p.sales,0)+'</div><div style="font-size:9px;color:var(--text2)">Total Sales</div></div></div>'}
    else if(cat==='pricing'){let prices=PRODUCTS.map(p=>p.price);let avg=Math.round(prices.reduce((s,p)=>s+p,0)/prices.length);let min=Math.min(...prices);let max=Math.max(...prices);
sql='SELECT AVG(price) AS avg_price, MIN(price) AS min_price, MAX(price) AS max_price\nFROM products;';
ans='<strong>💰 Pricing Overview</strong><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px"><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--mint)">₹'+avg.toLocaleString()+'</div><div style="font-size:9px;color:var(--text2)">Average</div></div><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--green)">₹'+min.toLocaleString()+'</div><div style="font-size:9px;color:var(--text2)">Min</div></div><div style="background:var(--bg3);padding:10px;border-radius:6px;text-align:center"><div style="font-size:1rem;font-weight:700;color:var(--violet)">₹'+max.toLocaleString()+'</div><div style="font-size:9px;color:var(--text2)">Max</div></div></div>'}
    else if(cat==='customers'){let segs=USER_MATRIX.map((row,i)=>{let s=classifyUser(row);return 'User #'+(i+1)+': '+s.join(', ')}).join('; ');
sql='SELECT user_id, segment_tags, interaction_count\nFROM user_segments\nORDER BY interaction_count DESC;';
ans='<strong>👥 Customer Segments</strong><div style="margin-top:8px">'+USER_MATRIX.map((row,i)=>{let segs=classifyUser(row);return'<div style="display:flex;justify-content:space-between;padding:6px 8px;background:var(--bg3);border-radius:6px;margin-bottom:3px;font-size:11px"><span style="color:var(--violet)">User #'+(i+1)+'</span><span>'+segs.join(', ')+'</span><span style="color:var(--text3)">'+row.reduce((s,v)=>s+v,0)+' interactions</span></div>'}).join('')+'</div>'}
    else ans='<p style="color:var(--text2);font-size:12px">I found a matching query but couldn\'t compute the result. Try being more specific.</p>'}
  else ans='<p style="color:var(--text3);font-size:12px">Hmm, I didn\'t understand that. Try one of these:<br>• <strong>Top products</strong><br>• <strong>Total revenue</strong><br>• <strong>Low stock</strong><br>• <strong>Analyze [category]</strong></p>'}
if(sql)ans+='<div class="prime-sql" onclick="this.classList.toggle(\'open\')"><div class="prime-sql-label">▶ SQL Query</div><pre class="prime-sql-code">'+sql+'</pre></div>';
addPrimeMessage(ans,false);
addPrimeQuickReplies()}

function addPrimeQuickReplies(){
let el=document.getElementById('primeMessages');if(!el)return;
let chips=document.createElement('div');chips.className='quick-replies';chips.style.marginTop='4px';
['🏆 Top Products','💰 Total Revenue','📉 Low Stock','📊 Electronics'].forEach(t=>{let b=document.createElement('button');b.textContent=t;b.onclick=()=>primeQuick(t);chips.appendChild(b)});
el.appendChild(chips);el.scrollTop=el.scrollHeight}

// ---- Chat ----
function toggleChat(){
let w=document.getElementById('chatWidget');let t=document.getElementById('chatTrigger');
w.classList.toggle('open');t.style.display=w.classList.contains('open')?'none':'flex';
if(w.classList.contains('open')){let inp=document.getElementById('chatInput');if(inp)setTimeout(()=>inp.focus(),100)}}

function openChat(){document.getElementById('chatWidget').classList.add('open');document.getElementById('chatTrigger').style.display='none';document.getElementById('chatInput').focus()}

function addTypingIndicator(){
let el=document.getElementById('chatMessages');
let d=document.createElement('div');d.className='msg assistant';d.id='typingIndicator';
let b=document.createElement('div');b.className='msg-bubble';b.style.cssText='display:flex;gap:4px;align-items:center';
for(let i=0;i<3;i++){let dot=document.createElement('span');dot.style.cssText='width:6px;height:6px;border-radius:50%;background:var(--text3);animation:typingDot 1.4s ease-in-out '+((i*0.2)+'s')+' infinite;display:inline-block';b.appendChild(dot)}
d.appendChild(b);el.appendChild(d);el.scrollTop=el.scrollHeight}

function removeTypingIndicator(){
let el=document.getElementById('typingIndicator');
if(el)el.remove()}

function sendChatMessage(){
let inp=document.getElementById('chatInput');let q=inp.value.trim();if(!q)return;
addChatMessage(q,true);inp.value='';addTypingIndicator();
if(apiAvailable){
  callAPI('/api/chat',{message:q}).then(data=>{
    removeTypingIndicator();
    if(data.reply)addChatMessage(data.reply,false);
    if(data.suggestions){let chips=document.createElement('div');chips.className='quick-replies';
      data.suggestions.forEach(t=>{let b=document.createElement('button');b.textContent=t;b.onclick=()=>sendQuick(t);chips.appendChild(b)});
      document.getElementById('chatMessages').appendChild(chips)}
    addQuickReplies()}).catch(()=>{removeTypingIndicator();clientChatResponse(q)})}
else{setTimeout(()=>{removeTypingIndicator();clientChatResponse(q)},600)}}

function clientChatResponse(q){
let matched=matchFAQ(q,FAQ);
let prodResults=searchProducts(q,3);
let reply='';
if(matched){
  reply=matched.a;
  if(matched.category==='products'||matched.category==='general'){
    let prodHtml=formatProductResults(prodResults);
    if(prodHtml)reply+=prodHtml;}
}else if(prodResults.length){
  reply='I found some products that might interest you:'+formatProductResults(prodResults)+'<div style="font-size:10px;color:var(--text3);margin-top:4px">Try asking about orders, returns, or AI features too!</div>'}
else if(q.toLowerCase().includes('krithi')||q.toLowerCase().includes('who are you')){
  reply='I\'m <strong>KRITHI Care</strong>, your AI shopping assistant powered by 4 ML algorithms! I can help with products, orders, deals, returns, and more. How can I assist you today? 🚀'}
else if(q.toLowerCase().includes('hello')||q.toLowerCase().includes('hi')||q.toLowerCase().includes('hey')){
  reply='Hello! 👋 Welcome to KRITHI AI. How can I make your shopping experience better today?'}
else if(q.toLowerCase().includes('thank')){
  reply='You\'re welcome! Happy shopping with KRITHI AI! 🎉 If you need anything else, I\'m here 24/7.'}
else if(q.toLowerCase().includes('bye')||q.toLowerCase().includes('goodbye')){
  reply='Goodbye! 👋 Come back anytime. KRITHI Care is always here for you!'}
else{
  reply='I can help with products, orders, deals, AI features, and more! Try clicking one of the suggestions below or ask me something specific.'}
addChatMessage(reply,false);
addQuickReplies()}

function addQuickReplies(){
let el=document.getElementById('chatMessages');
let chips=document.createElement('div');chips.className='quick-replies';chips.style.marginTop='4px';
['📦 Track Order','🔥 Today\'s Deals','🤖 Tell me about AI','🛠️ Admin help'].forEach(t=>{let b=document.createElement('button');b.textContent=t;b.onclick=()=>sendQuick(t);chips.appendChild(b)});
el.appendChild(chips);el.scrollTop=el.scrollHeight}

function sendQuick(msg){
document.getElementById('chatInput').value=msg;sendChatMessage()}

function addChatMessage(msg,isUser){
let el=document.getElementById('chatMessages');
let d=document.createElement('div');d.className='msg'+(isUser?' user':' assistant');
let b=document.createElement('div');b.className='msg-bubble';
if(isUser)b.textContent=msg;else b.innerHTML=msg;
d.appendChild(b);el.appendChild(d);el.scrollTop=el.scrollHeight}

function chatKeyPress(e){if(e.key==='Enter')sendChatMessage()}

// ---- Auth ----
function showModal(id){
closeAllModals();
document.getElementById(id).classList.remove('hidden')}

function closeModal(id){
document.getElementById(id).classList.add('hidden')}

function closeAllModals(){
document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.add('hidden'))}

function switchModal(closeId,openId){
document.getElementById(closeId).classList.add('hidden');
document.getElementById(openId).classList.remove('hidden')}

function doLogin(){
let email=document.getElementById('loginEmail').value||'demo@krithi.ai';
callAPI('POST','/api/auth/login',{email}).then(data=>{
  if(data&&data.success){
    let u=data.user;
    let existing=registeredUsers.find(x=>x.email===u.email);
    if(existing){existing.lastLogin=new Date().toISOString();existing.name=u.name;existing.phone=u.phone||existing.phone}
    else{registeredUsers.push({name:u.name,email:u.email,phone:u.phone||'-',registeredAt:new Date().toISOString(),lastLogin:new Date().toISOString(),orderCount:(u.orderCount||0),totalSpent:(u.totalSpent||0)});saveState()}
    currentUser={name:u.name,email:u.email,phone:u.phone};
    applyLoginUI()}
  else fallbackLogin(email)
}).catch(()=>{fallbackLogin(email)})}
function fallbackLogin(email){
let existing=registeredUsers.find(u=>u.email===email);
if(existing){existing.lastLogin=new Date().toISOString();currentUser={name:existing.name,email,phone:existing.phone}
}else{currentUser={name:'Demo User',email}}
applyLoginUI()}
function applyLoginUI(){
document.getElementById('navUserName').textContent='Hi, '+(currentUser.name||'Demo').split(' ')[0];
document.getElementById('dropdownHeader').innerHTML='<span>Welcome, '+(currentUser.name||'Demo User')+'</span>';
document.getElementById('logoutBtn').classList.remove('hidden');
document.getElementById('navLogoutBtn')&&document.getElementById('navLogoutBtn').classList.remove('hidden');
closeAllModals();saveState();toast('Welcome back, '+currentUser.name+'!')}
function demoLogin(){
document.getElementById('loginEmail').value='demo@krithi.ai';
document.getElementById('loginPassword').value='password123';
doLogin()}

// ---- Admin Auth ----
let adminLoggedIn=false;
let adminPendingEmail=null;
let adminFailCount=0;
let adminLockedUntil=0;
let adminActivityLog=[];
let adminSessionToken=null;
let adminSettings={storeName:'KRITHI AI',currency:'INR',taxRate:18,shipThreshold:500,notifyLowStock:true,notifyDailyReport:false,notifyNewOrder:true,adminEmail:'admin@krithi.ai'};

function loadAdminState(){
try{let s=localStorage.getItem('krithi_admin');if(s){let d=JSON.parse(s);adminLoggedIn=d.loggedIn||false;if(d.token)adminSessionToken=d.token;if(d.settings)Object.assign(adminSettings,d.settings);if(d.activityLog)adminActivityLog=d.activityLog}
if(adminLoggedIn)document.querySelector('.admin-link')&&(document.querySelector('.admin-link').innerHTML='<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Dashboard')}catch(e){}}

function saveAdminState(){
try{localStorage.setItem('krithi_admin',JSON.stringify({loggedIn:adminLoggedIn,token:adminSessionToken,settings:adminSettings,activityLog:adminActivityLog}))}catch(e){}}

function adminAudit(action,detail){
adminActivityLog.unshift({action,detail,email:adminSettings.adminEmail,time:Date.now()});
if(adminActivityLog.length>100)adminActivityLog.length=100;
saveAdminState()}

function adminLogin(){
let now=Date.now();
if(now<adminLockedUntil){let s=Math.ceil((adminLockedUntil-now)/1000);toast('🔒 Account locked. Try again in '+s+'s');return}
let email=document.getElementById('adminEmail').value.trim();
let pass=document.getElementById('adminPassword').value.trim();
if(!email||!pass){toast('Please enter email and password');return}
let btn=document.getElementById('adminLoginBtn');if(btn){btn.disabled=true;btn.textContent='⏳ Verifying...'}
function fail(){
adminFailCount++;
if(adminFailCount>=5){adminLockedUntil=now+60000;adminFailCount=0;toast('🔒 Too many failed attempts. Locked for 60s')}
else{toast('Invalid credentials ('+adminFailCount+'/'+5+')')}
adminAudit('login_failed',email+' from '+(navigator.userAgent||'unknown'));
if(btn){btn.disabled=false;btn.textContent='Login'}}
if(apiAvailable){
callAPI('POST','/api/auth/admin/login',{email,password:pass}).then(data=>{
if(data.success){adminPendingEmail=data.email;closeModal('adminLoginModal');showAdminOtpModal(data._demo?data._demo.otp:null)}
else{fail()}
if(btn){btn.disabled=false;btn.textContent='Login'}
}).catch(()=>{fallbackLogin(email,pass)})}
else{fallbackLogin(email,pass)}}

function fallbackLogin(email,pass){
if(email.toLowerCase()==='admin@krithi.ai'&&pass==='admin123'){
adminPendingEmail='admin@krithi.ai';closeModal('adminLoginModal');
showAdminOtpModal();toast('OTP sent to admin@krithi.ai (demo: 123456)')
}else{
adminFailCount++;
if(adminFailCount>=5){adminLockedUntil=Date.now()+60000;adminFailCount=0;toast('🔒 Locked for 60s')}
else{toast('Invalid credentials ('+adminFailCount+'/'+5+')')}
adminAudit('login_failed',email+' from '+(navigator.userAgent||'unknown'))}
let btn=document.getElementById('adminLoginBtn');if(btn){btn.disabled=false;btn.textContent='Login'}}

function showAdminLoginModal(){
if(adminLoggedIn){showAdminPanel();return}
closeAllModals();
document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open'));
document.getElementById('adminLoginModal').classList.remove('hidden');
document.getElementById('adminEmail').focus()}

function showAdminOtpModal(demoOtp){
let el=document.getElementById('adminOtpError');if(el)el.style.display='none';
for(let i=1;i<=6;i++){let inp=document.getElementById('ao'+i);if(inp)inp.value=''}
document.getElementById('adminOtpModal').classList.remove('hidden');
document.getElementById('ao1').focus();
if(demoOtp){
document.getElementById('adminOtpTimer').innerHTML='📧 Demo OTP: <strong style="color:var(--violet)">'+demoOtp+'</strong>'}
else{document.getElementById('adminOtpTimer').innerHTML='📧 Check console for OTP (demo: 123456)'}}

function adminVerifyOtp(){
let code='';
for(let i=1;i<=6;i++)code+=document.getElementById('ao'+i).value||'';
if(code.length<6){document.getElementById('adminOtpError').textContent='Please enter all 6 digits';document.getElementById('adminOtpError').style.display='block';return}
let el=document.getElementById('adminOtpError');if(el)el.style.display='none';
if(apiAvailable){
callAPI('POST','/api/auth/admin/verify-otp',{email:adminPendingEmail,otp:code}).then(data=>{
if(data.success){
adminSessionToken=data.token;
adminLoggedIn=true;
adminSettings.adminEmail=data.user.email;
saveAdminState();
closeModal('adminOtpModal');
adminAudit('login_success',data.user.email);
toast('✅ Verified! Welcome back, Admin.');
showAdminPanel()}
}).catch(()=>{otpFallbackVerify(code)})}
else{otpFallbackVerify(code)}}

function otpFallbackVerify(code){
let validCode='123456';
if(code!==validCode){
document.getElementById('adminOtpError').textContent='❌ Invalid OTP. Try 123456';
document.getElementById('adminOtpError').style.display='block';
adminAudit('verify_failed',adminPendingEmail);
return}
adminLoggedIn=true;
adminSettings.adminEmail=adminPendingEmail||'admin@krithi.ai';
adminSessionToken='demo-token-'+Date.now();
saveAdminState();
closeModal('adminOtpModal');
adminAudit('login_success',adminSettings.adminEmail);
toast('✅ Verified! Welcome back, Admin.');
showAdminPanel()}

function aoMove(el,next){
if(el.value.length===1&&next<=6)document.getElementById('ao'+next)&&document.getElementById('ao'+next).focus()}
function aoBack(el,cur,e){
if(e.key==='Backspace'&&el.value.length===0&&cur>1)document.getElementById('ao'+(cur-1))&&document.getElementById('ao'+(cur-1)).focus()}

function demoAdminLogin(){
adminFailCount=0;
adminLoggedIn=true;
adminSettings.adminEmail='admin@krithi.ai';
saveAdminState();
adminAudit('login_success','admin@krithi.ai (quick demo)');
closeAllModals();
document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open'));
document.querySelector('.admin-link')&&(document.querySelector('.admin-link').innerHTML='<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Dashboard');
toast('✅ Logged in as Admin');
showAdminPanel()}

function adminLogout(){
adminAudit('logout','Admin logged out');
adminLoggedIn=false;currentUser=null;adminSessionToken=null;
if(apiAvailable)callAPI('POST','/api/auth/admin/logout',{}).catch(()=>{});
saveAdminState();saveState();
document.querySelector('.admin-link')&&(document.querySelector('.admin-link').innerHTML='<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Admin Dashboard');
document.getElementById('navUserName').textContent='Login';
document.getElementById('dropdownHeader').innerHTML='<span>New customer?</span> <a href="#" onclick="showModal(\'registerModal\')" class="signup-link">Sign Up</a>';
document.getElementById('logoutBtn').classList.add('hidden');
document.getElementById('navLogoutBtn')&&document.getElementById('navLogoutBtn').classList.add('hidden');
closeModal('confirmModal');showSection('home');toast('Logged out of admin')}

// Update showAdminPanel to check auth
const origShowAdminPanel=showAdminPanel;
showAdminPanel=function(){
if(!adminLoggedIn){showAdminLoginModal();return}
document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open'));
document.querySelector('.admin-link')&&(document.querySelector('.admin-link').innerHTML='<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Dashboard');
origShowAdminPanel()}

function doRegister(){
let name=document.getElementById('regName').value||'Demo User';
let email=document.getElementById('regEmail').value||'demo@krithi.ai';
let phone=document.getElementById('regPhone').value||'-';
let password=document.getElementById('regPassword').value;
let now=new Date().toISOString();
callAPI('POST','/api/auth/register',{name,email,phone,password}).then(data=>{
  if(data.success){
    let u=data.user;
    registeredUsers.push({name:u.name,email:u.email,phone:u.phone||'-',registeredAt:now,lastLogin:now,orderCount:0,totalSpent:0});
    saveState();applyRegisterUI(u.name,u.email,u.phone)}
  else{toast(data.error||'Registration failed');if(data.error&&data.error.includes('Database')){catchFallbackRegister(name,email,phone,now)}}
}).catch(()=>{catchFallbackRegister(name,email,phone,now)})}
function catchFallbackRegister(name,email,phone,now){
if(!registeredUsers.find(u=>u.email===email)){
  registeredUsers.push({name,email,phone,registeredAt:now||new Date().toISOString(),lastLogin:now||new Date().toISOString(),orderCount:0,totalSpent:0});saveState()}
applyRegisterUI(name,email,phone)}
function applyRegisterUI(name,email,phone){
currentUser={name,email,phone};
document.getElementById('navUserName').textContent='Hi, '+name.split(' ')[0];
document.getElementById('dropdownHeader').innerHTML='<span>Welcome, '+name+'</span>';
document.getElementById('logoutBtn').classList.remove('hidden');
document.getElementById('navLogoutBtn')&&document.getElementById('navLogoutBtn').classList.remove('hidden');
closeAllModals();toast('Account created! 100 bonus points added! 🎉')}

// ---- Forgot Password ----
function sendResetLink(){
let email=document.getElementById('forgotEmail').value.trim();
if(!email){toast('Please enter your email');return}
toast('Reset link sent to '+email+'! Check your inbox.');
closeModal('forgotModal')}

// ---- OTP Login ----
let otpContact='';let otpCode='';
function showOTPLogin(){
closeModal('loginModal');showModal('otpModal');
document.getElementById('otpStep1').classList.remove('hidden');
document.getElementById('otpStep2').classList.add('hidden')}

function sendOTP(){
let contact=document.getElementById('otpContact').value.trim();
if(!contact){toast('Please enter email or phone');return}
otpContact=contact;
otpCode=String(Math.floor(100000+Math.random()*900000));
document.getElementById('otpDestination').textContent=contact;
document.getElementById('otpStep1').classList.add('hidden');
document.getElementById('otpStep2').classList.remove('hidden');
document.getElementById('otp1').focus();
toast('OTP sent to '+contact+' (demo: '+otpCode+')');
let t=30;let el=document.getElementById('otpTimer');
let iv=setInterval(()=>{t--;if(el)el.textContent='('+t+'s)';if(t<=0){clearInterval(iv);if(el)el.textContent='📨 Resend'}},1000)}

function otpMove(inp,next){if(inp.value&&next<=6)document.getElementById('otp'+next).focus()}
function otpBack(e,cur){if(e.key==='Backspace'&&!document.getElementById('otp'+cur).value&&cur>1)document.getElementById('otp'+(cur-1)).focus()}

function otpVerify(){
let code='';for(let i=1;i<=6;i++)code+=document.getElementById('otp'+i).value||'';
if(code.length===6)setTimeout(()=>verifyOTP(),200)}

function verifyOTP(){
let code='';for(let i=1;i<=6;i++)code+=document.getElementById('otp'+i).value||'';
if(code.length!==6){toast('Please enter the complete 6-digit OTP');return}
if(code!==otpCode){toast('Invalid OTP. Try again.');return}
closeModal('otpModal');
currentUser={name:'OTP User',email:otpContact};
document.getElementById('navUserName').textContent='Hi, User';
document.getElementById('dropdownHeader').innerHTML='<span>Welcome, OTP User</span>';
document.getElementById('logoutBtn').classList.remove('hidden');
document.getElementById('navLogoutBtn')&&document.getElementById('navLogoutBtn').classList.remove('hidden');
toast('Logged in via OTP! Welcome!')}

function resendOTP(){
otpCode=String(Math.floor(100000+Math.random()*900000));
toast('New OTP sent! (demo: '+otpCode+')');
document.getElementById('otpTimer').textContent='(30s)';let t=30;
let el=document.getElementById('otpTimer');
clearInterval(window._otpInterval);
window._otpInterval=setInterval(()=>{t--;if(el)el.textContent='('+t+'s)';if(t<=0){clearInterval(window._otpInterval);if(el)el.textContent='📨 Resend'}},1000)}

// ---- Session Timeout ----
let sessionTimer=null;
const SESSION_TIMEOUT=30*60*1000;

function resetSessionTimer(){
if(sessionTimer)clearTimeout(sessionTimer);
if(currentUser)sessionTimer=setTimeout(()=>{
toast('Session expired. Please login again.');
forceLogout()},SESSION_TIMEOUT)}

document.addEventListener('click',()=>resetSessionTimer());
document.addEventListener('keydown',()=>resetSessionTimer());
document.addEventListener('mousemove',()=>resetSessionTimer());

function forceLogout(){
if(sessionTimer)clearTimeout(sessionTimer);
currentUser=null;adminLoggedIn=false;adminSessionToken=null;saveState();saveAdminState();
document.getElementById('navUserName').textContent='Login';
document.getElementById('dropdownHeader').innerHTML='<span>New customer?</span> <a href="#" onclick="showModal(\'registerModal\')" class="signup-link">Sign Up</a>';
document.getElementById('logoutBtn').classList.add('hidden');
document.getElementById('navLogoutBtn')&&document.getElementById('navLogoutBtn').classList.add('hidden');
if(document.querySelector('.admin-link'))document.querySelector('.admin-link').innerHTML='<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Admin Dashboard';
closeAllModals();showSection('home')}

function confirmLogout(){
document.getElementById('confirmMsg').textContent='Are you sure you want to logout?';
document.getElementById('confirmAction').onclick=()=>{closeModal('confirmModal');forceLogout()};
showModal('confirmModal')}

function logout(){
if(!currentUser&&!adminLoggedIn)return;
if(currentUser||adminLoggedIn)confirmLogout()}

// ---- Banner Slider ----
function goToSlide(n){
let slides=document.querySelectorAll('.banner-slide');
let dots=document.querySelectorAll('.dot');
slides.forEach(s=>s.classList.remove('active'));dots.forEach(d=>d.classList.remove('active'));
slides[n].classList.add('active');dots[n].classList.add('active');
currentSlide=n}

function nextSlide(){let total=document.querySelectorAll('.banner-slide').length;goToSlide((currentSlide+1)%total);resetSlideInterval()}
function prevSlide(){let total=document.querySelectorAll('.banner-slide').length;goToSlide((currentSlide-1+total)%total);resetSlideInterval()}
function resetSlideInterval(){clearInterval(slideInterval);slideInterval=setInterval(()=>nextSlide(),5000)}

// ---- Section Nav ----
function showSection(name){
document.querySelectorAll('#homeSection,#cartSection,#wishlistSection,#ordersSection,#productDetailSection,#checkoutSection,#adminSection,#profileSection,#plusSection,#rewardsSection,#notificationsSection').forEach(s=>s.classList.add('hidden'));
if(name==='home')document.getElementById('homeSection').classList.remove('hidden');
else if(name==='cart'){document.getElementById('cartSection').classList.remove('hidden');renderCart()}
else if(name==='wishlist'){document.getElementById('wishlistSection').classList.remove('hidden');renderWishlist()}
else if(name==='orders'){document.getElementById('ordersSection').classList.remove('hidden');renderOrdersList()}
else if(name==='productDetail')document.getElementById('productDetailSection').classList.remove('hidden');
else if(name==='checkout')document.getElementById('checkoutSection').classList.remove('hidden');
else if(name==='admin')document.getElementById('adminSection').classList.remove('hidden');
else if(name==='profile'){document.getElementById('profileSection').classList.remove('hidden');renderProfile()}
else if(name==='plus'){document.getElementById('plusSection').classList.remove('hidden');renderPlusZone()}
else if(name==='rewards'){document.getElementById('rewardsSection').classList.remove('hidden');renderRewards()}
else if(name==='notifications'){document.getElementById('notificationsSection').classList.remove('hidden');renderNotifications()}}

function showSellerModal(){showModal('sellerModal')}
function showAdvertiseModal(){showModal('advertiseModal')}
function renderNotifications(){
  let prefs=[{icon:'🔔',label:'Order Updates',desc:'Tracking, delivery, and status changes',on:true},
  {icon:'🏷️',label:'Deals & Offers',desc:'Personalized discounts and flash sales',on:true},
  {icon:'⭐',label:'Recommendations',desc:'AI-curated product suggestions',on:true},
  {icon:'📣',label:'Newsletter',desc:'Weekly KRITHI AI updates',on:false},
  {icon:'🤖',label:'KRITHI Care',desc:'Chat and support notifications',on:true}];
  document.getElementById('notificationsContent').innerHTML=
  '<div class="page-header"><h2>🔔 Notification Settings</h2></div>'+
  '<div class="notif-container">'+prefs.map((p,i)=>'<div class="notif-card"><div class="notif-left"><span class="notif-icon">'+p.icon+'</span><div><strong>'+p.label+'</strong><p>'+p.desc+'</p></div></div><label class="toggle"><input type="checkbox" '+(p.on?'checked':'')+' onchange="toast(\''+p.label+' '+(p.on?'disabled':'enabled')+'\')"><span class="toggle-slider"></span></label></div>').join('')+'</div>'
}
function showProfile(){
  if(currentUser){showSection('profile')}
  else{showModal('loginModal')}
}
function renderProfile(){
  let u=currentUser||{name:'Guest',email:'guest@krithi.ai',phone:'N/A'};
  let orderCount=registeredUsers.find(x=>x.email===u.email)?.orderCount||0;
  let totalSpent=registeredUsers.find(x=>x.email===u.email)?.totalSpent||0;
  document.getElementById('profileContent').innerHTML=
  '<div class="profile-card"><div class="profile-avatar">'+(u.name?u.name.charAt(0).toUpperCase():'G')+'</div>'+
  '<h3>'+u.name+'</h3><p class="profile-email">'+u.email+'</p><p class="profile-phone">📞 '+u.phone+'</p>'+
  '<div class="profile-stats"><div class="profile-stat"><strong>'+orderCount+'</strong><span>Orders</span></div>'+
  '<div class="profile-stat"><strong>₹'+(totalSpent).toLocaleString()+'</strong><span>Total Spent</span></div>'+
  '<div class="profile-stat"><strong>'+(currentUser?'Online':'Offline')+'</strong><span>Status</span></div></div></div>'
}
function renderPlusZone(){
  document.getElementById('plusContent').innerHTML=
  '<div class="plus-hero"><div class="plus-badge">KRITHI<span>Plus</span></div>'+
  '<h2>Unlock Premium Shopping Experience</h2><p>Free shipping • Early access • Exclusive deals • 24x7 priority support</p>'+
  '<button class="btn-primary" onclick="toast(\'🎉 Welcome to KRITHI Plus! Free trial activated.\')">Start Free Trial →</button></div>'+
  '<div class="plus-features"><div class="plus-card"><span>🚚</span><h4>Free Delivery</h4><p>On all orders, no minimum</p></div>'+
  '<div class="plus-card"><span>🎯</span><h4>Early Access</h4><p>Sale access 24hrs before everyone</p></div>'+
  '<div class="plus-card"><span>⭐</span><h4>Extra 5% Off</h4><p>On every purchase</p></div>'+
  '<div class="plus-card"><span>🎬</span><h4>KRITHI Originals</h4><p>Exclusive content & events</p></div></div>'
}
function renderRewards(){
  let points=Math.floor((registeredUsers.find(x=>x.email===currentUser?.email)?.totalSpent||0)/100);
  let tier=points>500?'🥇 Gold':points>200?'🥈 Silver':'🥉 Bronze';
  document.getElementById('rewardsContent').innerHTML=
  '<div class="rewards-header"><div class="rewards-tier">'+tier+'</div><h2>KRITHI Rewards</h2><p>Earn points on every purchase</p></div>'+
  '<div class="rewards-points"><span class="points-value">'+points+'</span><span class="points-label">Points Earned</span>'+
  '<div class="rewards-bar"><div class="rewards-fill" style="width:'+Math.min(points/5,100)+'%"></div></div>'+
  '<p class="points-next">'+(500-points>0?'Next tier in '+(500-points)+' more points':'🥇 You are at the top tier!')+'</p></div>'+
  '<div class="rewards-perks"><h3>Available Perks</h3>'+
  '<div class="perk-card"><span>🎫</span><div><strong>₹50 Coupon</strong><p>Redeem 100 points</p></div><button onclick="toast(\'🎫 Coupon applied!\')" class="perk-btn"'+(points<100?' disabled':'')+'>Redeem</button></div>'+
  '<div class="perk-card"><span>🚚</span><div><strong>Free Shipping</strong><p>Redeem 50 points</p></div><button onclick="toast(\'🚚 Free shipping activated!\')" class="perk-btn"'+(points<50?' disabled':'')+'>Redeem</button></div>'+
  '<div class="perk-card"><span>🏷️</span><div><strong>10% Off Coupon</strong><p>Redeem 250 points</p></div><button onclick="toast(\'🏷️ 10% off coupon applied!\')" class="perk-btn"'+(points<250?' disabled':'')+'>Redeem</button></div></div>'
}
// ---- Toast ----
function toast(m){
let el=document.getElementById('toast');el.textContent=m;el.classList.add('show');
setTimeout(()=>el.classList.remove('show'),2200)}

// ---- Dropdown ----
function toggleDropdown(id){
let el=document.getElementById(id);
el.classList.toggle('open');
document.querySelectorAll('.dropdown-menu').forEach(m=>{if(m.id!==id)m.classList.remove('open')})}

// Close dropdowns on outside click
document.addEventListener('click',function(e){
if(!e.target.closest('.login-dropdown')&&!e.target.closest('.nav-item')){document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open'))}})

// ---- API Detection & Integration ----
let apiAvailable=false;
const API_BASE='http://localhost:3000';
const RAZORPAY_KEY_ID='rzp_test_XXXXXXXXXXXXXXXX';

function checkAPI(){
  fetch(API_BASE+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:'ping'})})
  .then(r=>r.ok).then(ok=>{apiAvailable=ok;if(ok)console.log('🖥️ KRITHI AI Server API connected')})
  .catch(()=>{apiAvailable=false})}

function callAPI(method,endpoint,data){
  let opts={method,headers:{'Content-Type':'application/json'}};
  if(data)opts.body=JSON.stringify(data);
  return fetch(API_BASE+endpoint,opts).then(r=>{apiAvailable=true;return r.json()}).catch(()=>{apiAvailable=false;return Promise.reject('API not available')})}

// ---- Init ----
function requireAdminReauth(callback){
document.getElementById('confirmMsg').innerHTML='For security, please re-enter your admin password to continue:<br><input type="password" id="reauthPass" class="form-input" style="margin-top:8px;font-size:13px" placeholder="Enter admin password">';
document.getElementById('confirmAction').onclick=()=>{
let p=document.getElementById('reauthPass').value;let btn=document.getElementById('confirmAction');
btn.disabled=true;btn.textContent='Verifying...';
let check=(ok)=>{if(!ok){btn.disabled=false;btn.textContent='Yes';toast('Incorrect password');return}
closeModal('confirmModal');adminAudit('reauth_verified','Sensitive action authorized');callback()};
fetch(API_BASE+'/api/auth/admin/verify-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:adminSettings.adminEmail,password:p})})
.then(r=>r.json()).then(d=>check(d.valid)).catch(()=>check(p==='admin123'))};
showModal('confirmModal')}

let pendingNewEmail=null;
function sendChangeEmailOtp(){
let inp=document.getElementById('adminEmailField');
let status=document.getElementById('adminEmailStatus');
let email=inp.value.trim();
if(!email||!email.includes('@')){status.textContent='Please enter a valid email';status.style.color='var(--red)';return}
status.textContent='Sending OTP...';status.style.color='var(--text3)';
fetch(API_BASE+'/api/auth/admin/send-change-email-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({newEmail:email})})
.then(r=>r.json()).then(d=>{
if(d.success){
pendingNewEmail=email;
if(d._demo&&d._demo.otp)showChangeEmailOtpModal(d._demo.otp);
else{status.textContent='OTP sent to '+email;status.style.color='var(--mint)';showChangeEmailOtpModal()}
}else status.textContent=d.error||'Failed to send OTP'})
.catch(()=>{status.textContent='Server unavailable';status.style.color='var(--red)'})}
function showChangeEmailOtpModal(demoOtp){
let existing=document.getElementById('changeEmailOtpModal');
if(existing)existing.remove();
let div=document.createElement('div');div.id='changeEmailOtpModal';div.className='modal-overlay';div.onclick=function(){this.remove()};
div.innerHTML='<div class="modal" style="max-width:380px" onclick="event.stopPropagation()"><div class="modal-right" style="text-align:center;padding:24px"><button class="modal-close" onclick="this.closest(\'.modal-overlay\').remove()">✕</button><h3 style="font-size:14px;margin-bottom:4px">Verify New Email</h3><div style="font-size:11px;color:var(--text2);margin-bottom:12px">OTP sent to <strong>'+pendingNewEmail+'</strong>'+(demoOtp?'<br><span style="color:var(--amber);font-size:10px">Demo OTP: '+demoOtp+'</span>':'')+'</div><div id="ceOtpError" style="font-size:11px;color:var(--red);margin-bottom:8px;display:none"></div><div style="display:flex;gap:6px;justify-content:center;margin:12px 0"><input type="text" class="otp-input" id="ce1" maxlength="1" oninput="ceMove(this,2)" onkeydown="ceBack(this,1,event)" autofocus><input type="text" class="otp-input" id="ce2" maxlength="1" oninput="ceMove(this,3)" onkeydown="ceBack(this,2,event)"><input type="text" class="otp-input" id="ce3" maxlength="1" oninput="ceMove(this,4)" onkeydown="ceBack(this,3,event)"><input type="text" class="otp-input" id="ce4" maxlength="1" oninput="ceMove(this,5)" onkeydown="ceBack(this,4,event)"><input type="text" class="otp-input" id="ce5" maxlength="1" oninput="ceMove(this,6)" onkeydown="ceBack(this,5,event)"><input type="text" class="otp-input" id="ce6" maxlength="1" oninput="ceVerifyOtp()" onkeydown="ceBack(this,6,event)"></div><button class="btn-primary full" onclick="ceVerifyOtp()">Verify & Update Email</button></div></div>';document.body.appendChild(div);setTimeout(()=>document.getElementById('ce1').focus(),100)}
function ceMove(el,n){if(el.value&&n<=6)document.getElementById('ce'+n).focus()}
function ceBack(el,n,ev){if(ev.key==='Backspace'&&!el.value&&n>1)document.getElementById('ce'+n).focus()}
function ceVerifyOtp(){
let otp='';for(let i=1;i<=6;i++){let inp=document.getElementById('ce'+i);if(inp)otp+=inp.value}
if(otp.length!==6){document.getElementById('ceOtpError').textContent='Please enter all 6 digits';document.getElementById('ceOtpError').style.display='block';return}
fetch(API_BASE+'/api/auth/admin/verify-change-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({newEmail:pendingNewEmail,otp,currentEmail:adminSettings.adminEmail})})
.then(r=>r.json()).then(d=>{
if(d.success){
adminSettings.adminEmail=d.email;saveAdminState();adminAudit('email_changed',d.email);
document.getElementById('adminEmailField').value=d.email;
document.getElementById('adminEmailStatus').textContent='Email updated successfully';document.getElementById('adminEmailStatus').style.color='var(--mint)';
let m=document.getElementById('changeEmailOtpModal');if(m)m.remove();toast('Email updated to '+d.email)
}else{document.getElementById('ceOtpError').textContent=d.error||'Verification failed';document.getElementById('ceOtpError').style.display='block'}
}).catch(()=>{document.getElementById('ceOtpError').textContent='Server unavailable';document.getElementById('ceOtpError').style.display='block'})}
let fpContext='user';let fpOtpCode=null;
function showForgotPasswordModal(type){
fpContext=type||'user';fpOtpCode=null;
let m=document.getElementById('forgotPasswordModal');if(!m)return;
document.getElementById('fpStep1').style.display='block';
document.getElementById('fpStep2').style.display='none';
document.getElementById('fpStep3').style.display='none';
document.getElementById('fpSendMsg').textContent='';
document.getElementById('fpOtpError').style.display='none';
document.getElementById('fpResetMsg').textContent='';
document.getElementById('fpEmail').value='';
document.getElementById('fpNewPass').value='';
document.getElementById('fpConfirmPass').value='';
document.getElementById('fpSubtext').textContent=type==='admin'?'Enter your admin email to receive a password reset OTP':'Enter your registered email to receive a password reset OTP';
m.classList.remove('hidden');
setTimeout(()=>document.getElementById('fpEmail').focus(),150)}
function fpSendOtp(){
let email=document.getElementById('fpEmail').value.trim();
let msg=document.getElementById('fpSendMsg');
let btn=document.getElementById('fpSendBtn');
if(!email||!email.includes('@')){msg.textContent='Please enter a valid email';msg.style.color='var(--red)';return}
msg.textContent='Sending OTP...';msg.style.color='var(--text3)';btn.disabled=true;
fetch(API_BASE+'/api/auth/forgot-password/send-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,type:fpContext})})
.then(r=>r.json()).then(d=>{
btn.disabled=false;
if(d.success){
fpOtpCode=d._demo&&d._demo.otp;
document.getElementById('fpStep1').style.display='none';
document.getElementById('fpStep2').style.display='block';
document.getElementById('fpEmailDisplay').textContent=email;
startFpTimer();
setTimeout(()=>document.getElementById('fpo1').focus(),100);
if(fpOtpCode)document.getElementById('fpOtpError').innerHTML='Demo OTP: <strong>'+fpOtpCode+'</strong>';document.getElementById('fpOtpError').style.display=fpOtpCode?'block':'none';document.getElementById('fpOtpError').style.color='var(--amber)'
}else{msg.textContent=d.error||'Failed to send OTP';msg.style.color='var(--red)'}
}).catch(()=>{btn.disabled=false;msg.textContent='Server unavailable. Try again later.';msg.style.color='var(--red)'})}
let fpTimerInterval=null;
function startFpTimer(){let sec=300;let el=document.getElementById('fpTimer');if(fpTimerInterval)clearInterval(fpTimerInterval);fpTimerInterval=setInterval(()=>{let m=Math.floor(sec/60);let s=sec%60;el.textContent='⏱ Code expires in '+m+':'+(s<10?'0':'')+s;sec--;if(sec<0){clearInterval(fpTimerInterval);el.textContent='⏱ Code expired';document.getElementById('fpOtpError').textContent='OTP expired. Please request a new one.';document.getElementById('fpOtpError').style.display='block';document.getElementById('fpOtpError').style.color='var(--red)'}},1000)}
function fpMove(el,n){if(el.value&&n<=6)document.getElementById('fpo'+n).focus()}
function fpBack(el,n,ev){if(ev.key==='Backspace'&&!el.value&&n>1)document.getElementById('fpo'+(n-1)).focus()}
function fpVerifyOtp(){
let otp='';for(let i=1;i<=6;i++){let inp=document.getElementById('fpo'+i);if(inp)otp+=inp.value}
if(otp.length!==6){document.getElementById('fpOtpError').textContent='Please enter all 6 digits';document.getElementById('fpOtpError').style.display='block';document.getElementById('fpOtpError').style.color='var(--red)';return}
document.getElementById('fpOtpError').style.display='none';
// For demo OTP flow, skip server verification if OTP matches demo code
let email=document.getElementById('fpEmail').value.trim();
if(fpOtpCode&&otp===fpOtpCode){
if(fpTimerInterval)clearInterval(fpTimerInterval);
document.getElementById('fpStep2').style.display='none';
document.getElementById('fpStep3').style.display='block';
setTimeout(()=>document.getElementById('fpNewPass').focus(),100);return}
// Otherwise verify via server
fetch(API_BASE+'/api/auth/forgot-password/reset',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,otp,newPassword:'__verify_only__'})})
.then(r=>r.json()).then(d=>{
if(d.success||d.message==='Password reset successfully'){
if(fpTimerInterval)clearInterval(fpTimerInterval);
document.getElementById('fpStep2').style.display='none';
document.getElementById('fpStep3').style.display='block';
setTimeout(()=>document.getElementById('fpNewPass').focus(),100)
}else{document.getElementById('fpOtpError').textContent=d.error||'Invalid OTP';document.getElementById('fpOtpError').style.display='block';document.getElementById('fpOtpError').style.color='var(--red)'}
}).catch(()=>{document.getElementById('fpOtpError').textContent='Server unavailable';document.getElementById('fpOtpError').style.display='block';document.getElementById('fpOtpError').style.color='var(--red)'})}
function fpResetPassword(){
let newPass=document.getElementById('fpNewPass').value;
let confirmPass=document.getElementById('fpConfirmPass').value;
let msg=document.getElementById('fpResetMsg');
let btn=document.getElementById('fpResetBtn');
if(!newPass||newPass.length<8){msg.textContent='Password must be at least 8 characters';msg.style.color='var(--red)';return}
if(newPass!==confirmPass){msg.textContent='Passwords do not match';msg.style.color='var(--red)';return}
let email=document.getElementById('fpEmail').value.trim();
msg.textContent='Resetting...';msg.style.color='var(--text3)';btn.disabled=true;
fetch(API_BASE+'/api/auth/forgot-password/reset',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,otp:fpOtpCode||'verified',newPassword:newPass})})
.then(r=>r.json()).then(d=>{
btn.disabled=false;
if(d.success){
msg.textContent='✓ Password reset successfully!';msg.style.color='var(--mint)';
setTimeout(()=>{closeModal('forgotPasswordModal');toast('Password reset! Login with your new password.')},1500)
}else msg.textContent=d.error||'Failed to reset password'
}).catch(()=>{btn.disabled=false;msg.textContent='Server unavailable. Password not changed.';msg.style.color='var(--red)'})}
function verifyCurrentPassword(){
let cur=document.getElementById('curPass');let msg=document.getElementById('pwVerifyMsg');
if(!cur||!cur.value.trim()){msg.textContent='Please enter your current password';msg.style.color='var(--red)';return}
msg.textContent='Verifying...';msg.style.color='var(--text3)';
fetch(API_BASE+'/api/auth/admin/verify-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:adminSettings.adminEmail,password:cur.value})})
.then(r=>r.json()).then(d=>{
if(d.valid){
msg.textContent='✓ Current password verified';msg.style.color='var(--mint)';
document.getElementById('pwStep1').style.display='none';
document.getElementById('pwStep2').style.display='block';
setTimeout(()=>document.getElementById('newPass').focus(),100)
}else{msg.textContent=d.error||'Incorrect password';msg.style.color='var(--red)'}
}).catch(()=>{msg.textContent='Server unavailable. Check fallback: try "admin123"';msg.style.color='var(--amber)'})}
function changeAdminPassword(){
let cur=document.getElementById('curPass');let nw=document.getElementById('newPass');let cf=document.getElementById('confirmPass');let msg=document.getElementById('pwUpdateMsg');
if(!nw||!cf)return;
if(nw.value.length<8){msg.textContent='New password must be at least 8 characters';msg.style.color='var(--red)';return}
if(nw.value!==cf.value){msg.textContent='Passwords do not match';msg.style.color='var(--red)';return}
msg.textContent='Updating...';msg.style.color='var(--text3)';
fetch(API_BASE+'/api/auth/admin/change-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:adminSettings.adminEmail,currentPassword:cur.value,newPassword:nw.value})})
.then(r=>r.json()).then(d=>{
if(d.success){toast('Password updated successfully!');adminAudit('password_changed',adminSettings.adminEmail);msg.textContent='✓ Password updated';msg.style.color='var(--mint)';setTimeout(()=>resetPasswordForm(),2000)}
else msg.textContent=d.error||'Failed to update password'})
.catch(()=>{msg.textContent='Server unavailable. Password not changed.';msg.style.color='var(--red)'})}
function resetPasswordForm(){
let s1=document.getElementById('pwStep1');let s2=document.getElementById('pwStep2');
if(s1)s1.style.display='block';if(s2)s2.style.display='none';
let cur=document.getElementById('curPass');let nw=document.getElementById('newPass');let cf=document.getElementById('confirmPass');let msg=document.getElementById('pwVerifyMsg');
if(cur)cur.value='';if(nw)nw.value='';if(cf)cf.value='';
if(msg){msg.textContent='';msg.style.color='var(--text3)'}
let msg2=document.getElementById('pwUpdateMsg');if(msg2){msg2.textContent='';msg2.style.color='var(--text3)'}}

function addNewProduct(){
let name=document.getElementById('apName');if(!name)return;
let cat=document.getElementById('apCat');let price=document.getElementById('apPrice');
let stock=document.getElementById('apStock');let img=document.getElementById('apImg');
let desc=document.getElementById('apDesc');let brand=document.getElementById('apBrand');
let rating=document.getElementById('apRating');
let n=name.value.trim();if(!n){toast('Please enter product name');name.focus();return}
let p=parseInt(price.value);if(!p||p<1){toast('Please enter a valid price');price.focus();return}
let s=parseInt(stock.value);if(isNaN(s)||s<0){toast('Please enter a valid stock number');stock.focus();return}
let r=rating.value?Math.min(5,Math.max(0,parseFloat(rating.value)||4.5)):4.5;
let b=brand.value.trim()||'Generic';
let maxId=Math.max(...PRODUCTS.map(x=>x.id),0);
let existCats=[...new Set(PRODUCTS.map(x=>x.cat))];
if(!existCats.includes(cat.value)){toast('Please select a valid category');return}
PRODUCTS.push({id:maxId+1,name:n,cat:cat.value,price:p,stock:s,
img:img.value.trim()||'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
desc:desc.value.trim()||'No description provided.',rating:r,stock:s,brand:b,sales:0,new:true
});
let el=document.getElementById('apStatus');
if(el){el.style.display='block';el.textContent='✅ "'+n+'" added successfully!';el.style.color='var(--green)'}
name.value='';price.value='';stock.value='';img.value='';desc.value='';brand.value='';
if(rating)rating.value='';
toast('Product "'+n+'" added!');adminAudit('product_added','ID '+(maxId+1)+': '+n);
saveState();renderProducts(getFilteredProducts());showSection('home')}

// ---- Homepage Sections ----
function renderDeals(){
let el=document.getElementById('dealGrid');if(!el)return;
let pool=PRODUCTS.filter(p=>p.sales>15).slice(0,8);
if(pool.length<4)pool=PRODUCTS.slice(0,8);
el.innerHTML=pool.map(p=>{
let discount=p.discount||Math.floor(15+Math.random()*35);
let orig=p.mrp||Math.round(p.price/(1-discount/100));
return '<div class="deal-card" onclick="showProductDetail('+p.id+')">'+
'<div class="deal-discount">-'+discount+'%</div>'+
'<img class="deal-img" src="'+(p.img||'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop')+'" alt="'+p.name+'" loading="lazy">'+
'<div class="deal-name">'+p.name.substring(0,20)+'</div>'+
'<div class="deal-price"><span class="deal-curr">₹'+p.price.toLocaleString()+'</span> <span class="deal-orig">₹'+orig.toLocaleString()+'</span></div>'+
'</div>'}).join('')}

let dealEndTime=Date.now()+8*60*60*1000;

function updateDealTimer(){
let diff=Math.max(0,dealEndTime-Date.now());
let h=Math.floor(diff/3600000);
let m=Math.floor((diff%3600000)/60000);
let s=Math.floor((diff%60000)/1000);
let el=document.getElementById('countdownDisplay');
if(el)el.textContent=String(h).padStart(2,'0')+'h '+String(m).padStart(2,'0')+'m '+String(s).padStart(2,'0')+'s'}

function subscribeNewsletter(){
let el=document.getElementById('newsletterEmail');
let v=el?el.value.trim():'';
if(!v||!v.includes('@')){toast('Please enter a valid email address');return}
toast('🎉 Subscribed! Welcome to KRITHI AI updates.');el.value=''}

let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  document.getElementById('installAppLink').style.display='inline';
  let b=document.getElementById('installBanner');
  if(!localStorage.getItem('installDismissed'))b.classList.remove('hidden')});
function promptInstall(e){
  if(e)e.preventDefault();
  if(!deferredPrompt){toast('Open Chrome menu → Install app');return}
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(r=>{
    deferredPrompt=null;
    document.getElementById('installAppLink').style.display='none';
    document.getElementById('installBanner').classList.add('hidden');
    if(r.outcome==='accepted')toast('✅ KRITHI AI installed!');
    else toast('Install cancelled — you can install anytime from the footer')})}
function dismissInstallBanner(){
  localStorage.setItem('installDismissed','1');
  document.getElementById('installBanner').classList.add('hidden')}

function init(){
loadState();loadAdminState();
seedReviews();
fetch(API_BASE+'/api/products?limit=500').then(r=>r.json()).then(data=>{
  if(data&&data.products&&data.products.length){
    PRODUCTS.length=0;data.products.forEach((p,i)=>{PRODUCTS.push({id:i+1,...p,_id:undefined,__v:undefined})});
    renderDeals();renderProducts(getFilteredProducts());renderWishlist();renderOrdersList()}
}).catch(()=>{});
initSeasonUI();
renderSaleCalendar();
renderDeals();updateDealTimer();setInterval(updateDealTimer,1000);
renderProducts(getFilteredProducts());
updateCartCount();
renderWishlist();
renderOrdersList();
slideInterval=setInterval(()=>nextSlide(),5000);
checkAPI()}

init();
