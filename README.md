# KRITHI AI — Shop Smarter with AI

India's AI-powered e-commerce platform — a fully client-side shopping experience with machine learning recommendations, intelligent search, demand forecasting, and a 24x7 AI chatbot.

## Features

- **4 AI Algorithms** — Collaborative Filtering (cosine similarity), TF-IDF search, k-means user profiling, WMA demand prediction
- **Full Shopping Flow** — Browse, search, cart, wishlist, compare (up to 4 products), coupons, checkout, order tracking
- **Admin Dashboard** — Revenue analytics, AI chat assistant (NL2SQL), demand forecast, auto-restock alerts, customer segmentation, store settings
- **KRITHI Care Chatbot** — TF-IDF FAQ matching with 60+ curated answers across 8 categories
- **Responsive Dark Theme** — Mobile-friendly, animated UI with sparkline price charts

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JS |
| Styling | CSS Custom Properties, Dark Theme |
| Persistence | LocalStorage |
| AI | Pure JS (no libraries) |
| Deployment | GitHub Pages |

## How to Run

Open `index.html` in any browser — no server required.

## Demo Credentials

| Role | Email | Password |
|---|---|---|
| Customer | `demo@krithi.ai` | `password123` |
| Admin | `admin@krithi.ai` | `admin123` |

## Project Structure

```
├── index.html              # Main entry point
├── css/style.css           # All styles
├── js/
│   ├── app.js              # Core app logic (963 lines)
│   └── faq.js              # FAQ dataset + TF-IDF matcher
├── .gitignore
└── README.md
```

## API (Optional Backend)

The app can connect to a backend at `http://localhost:3000` with endpoints `/api/chat` and `/api/prime`, but works fully offline by default.
