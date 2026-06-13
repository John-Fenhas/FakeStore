import { useEffect, useMemo, useRef, useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, isLoading, error } = useProducts();

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const searchTimer = useRef();

  const filteredProducts = useMemo(() => {
    if (!products) {
      return;
    }

    let result = [...products];

    if (categoryFilter !== "all") {
      result = result.filter((item) => item.category === categoryFilter);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) =>
        item.title.toLowerCase().includes(query),
      );
    }

    return result;
  }, [products, categoryFilter, searchQuery]);

  const productCount = filteredProducts?.length;

  const isEmpty = !isLoading && !error && filteredProducts.length === 0;

  function handleCategoryChange(category) {
    setCategoryFilter(category.toLowerCase());
  }

  function handleSearch(e) {
    const value = e.target.value.toLocaleLowerCase();
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => setSearchQuery(value), 200);
  }

  return (
    <>
      <Navbar />
      <div className="max-w-10/12 mx-auto">
        <CategoryFilter
          productCount={productCount}
          handleSearch={handleSearch}
          handleCategoryChange={handleCategoryChange}
          isLoading={isLoading}
        />
        <ProductGrid
          products={filteredProducts}
          isLoading={isLoading}
          isEmpty={isEmpty}
          error={error}
        />
      </div>
    </>
  );
}

export default App;
