// ---- FAQ Dataset ----
// Each entry: { q, a, keywords[], category }
const FAQ = [
  // Orders & Shipping
  { q: "How do I track my order?", a: "Go to My Orders page and use your tracking ID (format: KPXXXXIN). You'll see real-time status updates there.", keywords: ["track","order","where","shipping","status","delivery","package"], category: "orders" },
  { q: "What is the estimated delivery time?", a: "Standard delivery takes 3-5 business days. Express shipping delivers in 1-2 days. Free shipping on orders above ₹500.", keywords: ["delivery","shipping","time","how long","arrive","reach"], category: "orders" },
  { q: "Can I change my shipping address?", a: "Yes, you can change the shipping address before the order is dispatched. Go to My Orders and select 'Edit Address' on the active order.", keywords: ["address","change","shipping","delivery","location","modify"], category: "orders" },
  { q: "Do you ship internationally?", a: "Currently we ship across India only. We're expanding to international shipping soon!", keywords: ["international","abroad","ship","country","outside","global"], category: "orders" },
  { q: "What if my package is lost or damaged?", a: "Contact KRITHI Care immediately. We'll investigate and either send a replacement or issue a full refund within 48 hours.", keywords: ["lost","damage","broken","missing","wrong","incorrect"], category: "orders" },
  { q: "How do I cancel my order?", a: "You can cancel within 1 hour of placing via My Orders. After dispatch, initiate a return instead.", keywords: ["cancel","change mind","don't want","undo"], category: "orders" },

  // Returns & Refunds
  { q: "What is your return policy?", a: "We offer 30-day hassle-free returns from delivery. Items must be unused with tags. Free pickup for eligible items.", keywords: ["return","policy","hassle","30 day","30-day","refund"], category: "returns" },
  { q: "How long do refunds take?", a: "Refunds are processed within 3-5 business days after pickup. UPI/credit card refunds are instant, others take 5-7 days.", keywords: ["refund","money","back","cash","reversal"], category: "returns" },
  { q: "Can I exchange an item?", a: "Yes! Start a return and select 'Exchange' as the reason. We'll pick up the old item and deliver the new one within 3 days.", keywords: ["exchange","swap","replace","different","size","color"], category: "returns" },
  { q: "Do you offer free returns?", a: "Yes, returns are free for all KRITHI Plus members. Standard users get free returns on orders above ₹1000.", keywords: ["free","return","cost","charge","fee"], category: "returns" },
  { q: "What items cannot be returned?", a: "Innerwear, perishable food items, personalized products, and software cannot be returned unless defective.", keywords: ["non-return","excluded","cannot","restricted","exception"], category: "returns" },

  // Products & Recommendations
  { q: "Can you recommend products for me?", a: "Our AI uses Collaborative Filtering to analyze your preferences! Browse the shop — the 'AI Picks For You' section shows personalized recommendations based on your behavior.", keywords: ["recommend","suggest","personalize","ai pick","for you"], category: "products" },
  { q: "What are the top selling products?", a: "Check the shop section sorted by 'Top Rated' or visit the Admin Dashboard for detailed sales data. Our top performers include the iPhone 15 Pro, Nike Running Shoes, and Crystal Dress!", keywords: ["top","best","selling","popular","trending","bestseller"], category: "products" },
  { q: "How do I search for products?", a: "Use the search bar at the top! It uses TF-IDF AI search to find the most relevant products. Try searching by brand, category, or product name.", keywords: ["search","find","look","browse","filter"], category: "products" },
  { q: "Are all products authentic?", a: "100% genuine products with brand warranty. We source directly from brands or authorized distributors. Look for the 'Fulfilled by KRITHI AI' badge.", keywords: ["authentic","genuine","original","real","fake","warranty"], category: "products" },
  { q: "How do I know my size?", a: "Each product page has a size guide. If unsure, order two sizes — free returns make it easy to send back what doesn't fit!", keywords: ["size","fit","measure","sizing","chart","guide"], category: "products" },
  { q: "Do you have sales and discounts?", a: "Yes! Check the 'Flash Sale' banners for limited-time deals. We also have AI-personalized discounts shown on product cards. The AI predicts demand to offer you the best prices.", keywords: ["sale","discount","deal","offer","price drop","coupon"], category: "products" },
  { q: "What brands do you carry?", a: "We carry Apple, Samsung, Sony, Nike, Adidas, Puma, Louis Vuitton, Zara, Prada, and 50+ more premium brands across all categories.", keywords: ["brand","label","designer","company","make"], category: "products" },
  { q: "Can I pre-order upcoming products?", a: "Yes! Look for the 'Pre-order' badge on upcoming releases. You'll be charged 10% upfront and the remainder on dispatch.", keywords: ["preorder","pre-order","upcoming","future","coming soon","notify"], category: "products" },

  // Payments & Pricing
  { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, UPI (GPay, PhonePe, Paytm), Net Banking, and Cash on Delivery. EMI options available on select cards.", keywords: ["pay","payment","card","visa","mastercard","upi","cod","method"], category: "payment" },
  { q: "Is Cash on Delivery available?", a: "Yes! COD is available on orders up to ₹50,000. A small convenience fee of ₹30 applies for COD orders below ₹1000.", keywords: ["cod","cash","delivery","pay on","hand"], category: "payment" },
  { q: "Do you offer EMI?", a: "Yes! EMI is available on orders above ₹3,000 with leading banks — HDFC, ICICI, SBI, Axis. No-cost EMI on select cards.", keywords: ["emi","installment","finance","monthly","no cost"], category: "payment" },
  { q: "How does pricing work with AI?", a: "Our AI analyzes market trends, demand patterns, and competitor pricing using Weighted Moving Average algorithms to ensure you get the best value.", keywords: ["pricing","price","cost","rate","value","afford"], category: "payment" },
  { q: "Are there any hidden charges?", a: "No hidden charges! The price you see is the final price. Shipping is free above ₹500. Taxes are included in the displayed price.", keywords: ["hidden","charge","extra","fee","gst","tax"], category: "payment" },

  // Account & Login
  { q: "How do I create an account?", a: "Click 'Login' at the top right and choose 'Sign Up'. Enter your name, email, and phone number. You'll get 100 bonus points on signup!", keywords: ["signup","sign up","register","create","account","new"], category: "account" },
  { q: "I forgot my password", a: "On the Login page, click 'Forgot Password'. We'll send a reset link to your registered email within 60 seconds.", keywords: ["forgot","password","reset","can't login","remember"], category: "account" },
  { q: "How do I view my wishlist?", a: "Click the heart icon on any product or go to the Wishlist page from the user menu. Your wishlist is saved across sessions.", keywords: ["wishlist","save","favorite","heart","bookmark","later"], category: "account" },
  { q: "What are KRITHI Plus benefits?", a: "KRITHI Plus members get free shipping on all orders, early access to sales, exclusive discounts, priority customer support, and 5x reward points!", keywords: ["plus","premium","member","subscription","benefit","reward"], category: "account" },
  { q: "How do I delete my account?", a: "Contact KRITHI Care to request account deletion. Your data will be removed within 7 working days per our Privacy Policy.", keywords: ["delete","remove","close","deactivate","unsubscribe"], category: "account" },

  // AI Features
  { q: "What AI algorithms does KRITHI use?", a: "We use 4 powerful AI algorithms: 1) Collaborative Filtering (Cosine Similarity) for recommendations, 2) TF-IDF Search for intelligent product search, 3) k-means User Profiling for segmentation, and 4) WMA Demand Prediction for inventory forecasting.", keywords: ["ai","algorithm","ml","machine learning","intelligence","how work"], category: "ai" },
  { q: "How does Collaborative Filtering work?", a: "It finds users with similar tastes to yours using cosine similarity, then recommends products those similar users liked but you haven't tried yet. The more you shop, the smarter it gets!", keywords: ["collaborative","filter","cosine","similarity","similar user"], category: "ai" },
  { q: "What is TF-IDF search?", a: "TF-IDF (Term Frequency-Inverse Document Frequency) scores products based on how unique and relevant your search terms are. It's like Google Search but for our product catalog!", keywords: ["tfidf","tf-idf","search","term","frequency","document"], category: "ai" },
  { q: "How does demand prediction work?", a: "We use Weighted Moving Average (WMA) with trend analysis. Recent sales get higher weight (50% latest, 30% previous, 20% oldest). The trend shows whether demand is rising or falling.", keywords: ["demand","predict","forecast","wma","moving average","trend"], category: "ai" },
  { q: "How does the Admin Automation Engine work?", a: "It predicts future demand for every product and flags items needing restock. Green = sufficient stock, Amber = reorder needed. This automates inventory management.", keywords: ["autopilot","admin","inventory","restock","automated"], category: "ai" },
  { q: "Can AI customize my shopping experience?", a: "Absolutely! Our AI profiles your preferences, curates the 'For You' feed, sends price alerts on watched items, and even predicts what you might need next season!", keywords: ["personalize","custom","experience","curated","feed"], category: "ai" },

  // Company Info
  { q: "What is KRITHI AI?", a: "KRITHI AI is India's AI-powered e-commerce platform that uses machine learning to personalize your shopping experience with smart recommendations, demand forecasting, and 24x7 AI support.", keywords: ["krithi","company","about","what is","platform"], category: "company" },
  { q: "Where is KRITHI located?", a: "Our headquarters is in Anna Nagar, Chennai, Tamil Nadu - 600040, India. We serve customers across the country.", keywords: ["address","location","office","headquarter","chennai"], category: "company" },
  { q: "How do I contact support?", a: "KRITHI Care is available 24x7! Just chat with me here, or call our helpline. We're always happy to help.", keywords: ["contact","support","help","care","reach","call"], category: "company" },
  { q: "Does KRITHI have a mobile app?", a: "Yes! Download the KRITHI AI app from Google Play Store or Apple App Store for a seamless shopping experience with AI features on the go.", keywords: ["app","mobile","android","ios","download","phone"], category: "company" },
  { q: "How do I become a seller?", a: "Click 'Become a Seller' in the More menu. Our AI-powered seller dashboard helps you manage listings, forecast demand, and optimize pricing.", keywords: ["seller","vendor","sell","business","partner","merchant"], category: "company" },

  // General Help
  { q: "How do I use the chatbot?", a: "Just type your question below! I can help with orders, products, returns, AI features, and more. Try clicking one of the quick reply buttons above.", keywords: ["chatbot","chat","bot","ask","question","help"], category: "general" },
  { q: "Can I talk to a human?", a: "For complex issues, you can request a callback from the admin panel or escalate via email. KRITHI Care AI handles most queries instantly!", keywords: ["human","agent","person","real","call","callback"], category: "general" },
  { q: "Is my data secure?", a: "Yes! We use 256-bit SSL encryption, never share your data with third parties, and our AI processes data locally. See our Privacy Policy for details.", keywords: ["secure","privacy","data","safe","encrypt","protection"], category: "general" },
  { q: "How do rewards work?", a: "Earn points on every purchase (1 point = ₹1). Redeem at checkout or unlock exclusive perks. KRITHI Plus members earn 5x points!", keywords: ["reward","point","redeem","earn","loyalty","coin"], category: "general" },
  { q: "What is the warranty policy?", a: "All products come with brand warranty (6-24 months depending on category). KRITHI AI extends an additional 30-day satisfaction guarantee.", keywords: ["warranty","guarantee","assurance","cover","protection plan"], category: "general" },
  { q: "What is KRITHI Prime?", a: "KRITHI Prime is our premium subscription with free shipping, early sale access, 5x rewards, and priority support. Subscribe from KRITHI Plus Zone!", keywords: ["prime","membership","premium","krithi plus","subscribe"], category: "account" },
  { q: "How do I get free shipping?", a: "Standard users get free shipping on orders above ₹500. KRITHI Prime members enjoy free shipping on ALL orders with no minimum!", keywords: ["free shipping","no cost","delivery charge","shipping fee"], category: "orders" },
];

// ---- KRITHI Prime FAQ (Business Q&A) ----
const PRIME_FAQ = [
  { q: "What is KRITHI Prime?", a: "KRITHI Prime is a premium AI-driven subscription tier that unlocks exclusive benefits like free shipping on all orders, early access to flash sales, AI-powered personalized deals, priority 24x7 support, and 5x reward points on every purchase.", keywords: ["prime","what is","premium","subscription","tier","membership"], category: "prime" },
  { q: "How do I subscribe to KRITHI Prime?", a: "Go to the KRITHI Plus Zone from the user menu and click 'Subscribe'. We offer monthly (₹199) and yearly (₹1,999) plans. Yearly saves you 16%!", keywords: ["subscribe","signup","join","enroll","register","get prime"], category: "prime" },
  { q: "What are KRITHI Prime benefits?", a: "Prime members get: 1) Free shipping on all orders — no minimum, 2) Early access to all Flash Sales, 3) AI-curated 'Prime Exclusives' deals, 4) Priority 24x7 KRITHI Care, 5) 5x reward points, and 6) Extended 60-day returns.", keywords: ["benefit","perk","advantage","feature","included","offer"], category: "prime" },
  { q: "How much does KRITHI Prime cost?", a: "Monthly plan: ₹199/month. Yearly plan: ₹1,999/year (saves 16%). We also offer a 7-day free trial for new subscribers — cancel anytime.", keywords: ["price","cost","fee","payment","plan","pricing"], category: "prime" },
  { q: "Is there a free trial for Prime?", a: "Yes! New users get a 7-day free trial with full access to all Prime benefits. Cancel anytime before the trial ends — no charges.", keywords: ["trial","free","test","sample","demo","try"], category: "prime" },
  { q: "Can I cancel KRITHI Prime?", a: "Yes, you can cancel anytime from Settings → Manage Subscription. Your benefits continue until the billing period ends. No cancellation fees.", keywords: ["cancel","stop","end","terminate","unsubscribe","quit"], category: "prime" },
  { q: "Does Prime include video or music?", a: "Currently KRITHI Prime focuses on shopping benefits — free shipping, early sale access, extra rewards, and priority support. We may add entertainment features in the future!", keywords: ["video","music","ott","entertainment","streaming","watch"], category: "prime" },
  { q: "How do Prime rewards work?", a: "Prime members earn 5 points per ₹100 spent (vs 1 point for standard users). 100 points = ₹1 discount at checkout. Points never expire for active Prime members.", keywords: ["reward","point","cashback","earn","redeem","loyalty"], category: "prime" },
  { q: "Can I gift KRITHI Prime to someone?", a: "Yes! Go to KRITHI Plus Zone → Gift Prime. Enter the recipient's email, choose a plan, and pay. They get a welcome email with instructions.", keywords: ["gift","share","send","family","friend","give"], category: "prime" },
  { q: "What is Prime exclusive early access?", a: "Prime members get to shop Flash Sales and new arrivals 24 hours before everyone else. You'll see a 'Prime Early Access' badge on eligible deals.", keywords: ["early","access","exclusive","pre-sale","before","priority"], category: "prime" },
  { q: "Are there student discounts for Prime?", a: "We're launching a KRITHI Prime Student plan soon at 50% off! Register your interest in Settings → Notifications to get notified.", keywords: ["student","discount","education","college","school","youth"], category: "prime" },
  { q: "What are the top selling products?", a: "", keywords: ["top","selling","popular","best","bestseller","highest"], category: "sales" },
  { q: "What is total revenue?", a: "", keywords: ["revenue","total","earnings","income","turnover"], category: "sales" },
  { q: "Which products are low on stock?", a: "", keywords: ["low","stock","inventory","restock","running out","shortage"], category: "inventory" },
  { q: "Analyze a category", a: "", keywords: ["analyze","category","electronics","fashion","mobiles","beauty","home","sports","food","furniture"], category: "analytics" },
  { q: "How many products do we have?", a: "", keywords: ["how many","count","total products","catalog"], category: "inventory" },
  { q: "What is the average product price?", a: "", keywords: ["average","mean","price","pricing","cost"], category: "pricing" },
  { q: "Which brands are most popular?", a: "", keywords: ["brand","popular","most sold","top brand"], category: "analytics" },
  { q: "Show me customer segments", a: "", keywords: ["customer","segment","user","profile","demographic"], category: "customers" },
  { q: "What is the sales forecast?", a: "", keywords: ["forecast","predict","future","trend","projection"], category: "analytics" },
  { q: "Which products need urgent restock?", a: "", keywords: ["urgent","critical","emergency","immediate","reorder"], category: "inventory" },
  { q: "What are today's deals?", a: "", keywords: ["deal","offer","sale","discount","flash","promotion"], category: "sales" },
  { q: "Compare two categories", a: "", keywords: ["compare","vs","versus","difference","between"], category: "analytics" },
  { q: "What is our best performing category?", a: "", keywords: ["best","performing","category","top category","leading"], category: "analytics" },
  { q: "Show me products priced above ₹50,000", a: "", keywords: ["above","high","price range","premium","expensive","costly"], category: "pricing" },
  { q: "What are the cheapest products?", a: "", keywords: ["cheap","lowest","affordable","budget","under","below"], category: "pricing" },
];

// ---- TF-IDF FAQ Matcher ----
function buildVocab(entries) {
  let vocab = {};
  entries.forEach(e => {
    let words = (e.q + " " + e.keywords.join(" ")).toLowerCase().split(/\s+/).filter(w => w.length > 1);
    words.forEach(w => { vocab[w] = (vocab[w] || 0) + 1; });
  });
  return vocab;
}

function tfidfScore(query, entry, vocab, N) {
  let qWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 1);
  let docText = (entry.q + " " + entry.keywords.join(" ")).toLowerCase();
  let docWords = docText.split(/\s+/);
  let score = 0;
  for (let w of qWords) {
    let tf = docWords.filter(x => x === w).length / Math.max(docWords.length, 1);
    let idf = Math.log((N + 1) / ((vocab[w] || 0) + 1)) + 1;
    score += tf * idf;
  }
  // Boost for keyword matches
  let kwMatch = entry.keywords.filter(k => query.toLowerCase().includes(k)).length;
  score += kwMatch * 0.15;
  return score;
}

function matchFAQ(query, faqData) {
  if (!faqData || !faqData.length) return null;
  let vocab = buildVocab(faqData);
  let N = faqData.length;
  let scored = faqData.map(e => ({
    entry: e,
    score: tfidfScore(query, e, vocab, N)
  }));
  scored.sort((a, b) => b.score - a.score);
  if (scored[0].score > 0.05) return scored[0].entry;
  return null;
}

// ---- Product Data Query (using dataset for KRITHI Care) ----
function searchProducts(query, limit = 3) {
  query = query.toLowerCase();
  let results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.cat.toLowerCase().includes(query) ||
    p.desc.toLowerCase().includes(query)
  );
  if (results.length === 0) {
    // Try TF-IDF on product data
    let vocab = {};
    let docs = PRODUCTS.map(p => (p.name + " " + p.brand + " " + p.cat).toLowerCase().split(/\s+/).filter(w => w.length > 1));
    docs.forEach(d => d.forEach(w => { vocab[w] = (vocab[w] || 0) + 1; }));
    let qWords = query.split(/\s+/).filter(w => w.length > 1);
    let scored = PRODUCTS.map((p, i) => {
      let score = 0;
      for (let w of qWords) {
        let tf = docs[i].filter(x => x === w).length / Math.max(docs[i].length, 1);
        let idf = Math.log((PRODUCTS.length + 1) / ((vocab[w] || 0) + 1)) + 1;
        score += tf * idf;
      }
      return { product: p, score };
    });
    scored.sort((a, b) => b.score - a.score);
    results = scored.filter(s => s.score > 0).slice(0, limit).map(s => s.product);
  }
  return results.slice(0, limit);
}

function formatProductResults(products) {
  if (!products || !products.length) return "";
  return products.map(p =>
    `<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--bg3);border-radius:6px;margin-bottom:4px;font-size:11px">
      <img src="${p.img}" style="width:28px;height:28px;border-radius:4px;object-fit:cover" alt="">
      <span style="flex:1;font-weight:500">${p.name}</span>
      <span style="color:var(--violet);font-weight:600">₹${p.price.toLocaleString()}</span>
    </div>`
  ).join('');
}
