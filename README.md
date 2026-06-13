
# FakeStore

A single-page app built with React that fetches and displays products from the [Fake Store API](https://fakestoreapi.com/products). You can search by name and filter by category.

## Live Demo

> Add your deployment URL here.

---

## Getting Started

```bash
git clone https://github.com/your-username/fakestore.git
cd fakestore
npm install
npm run dev
```


---

## Features

- Fetches products from the Fake Store API on load
- Real-time search that filters by product name
- Category dropdown to filter by All, Men's Clothing, Women's Clothing, Jewelery, or Electronics
- Skeleton loading cards while data is being fetched
- Error message if the API call fails
- Empty state if nothing matches your search or filter
- Fully responsive across mobile, tablet, and desktop

---

## Tech Stack

- React
- Tailwind 
- Axios
- Vite
  

---

## Folder Structure

```
src/
├── components/
│   ├── CategoryDropdown.jsx
│   ├── CategoryFilter.jsx
│   ├── EmptyState.jsx
│   ├── ErrorState.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductCardSkeleton.jsx
│   ├── ProductGrid.jsx
│   └── Searchbar.jsx
├── hooks/
│   └── useProducts.js
├── utils/
│   └── api.js
├── index.css
└── App.jsx
```

---

## Challenges

**Making sure the Search and Filters work simultaneously and don't cause unnecessary re-renders.
