import CategoryFilter from "./components/CategoryFilter";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-10/12 mx-auto">
        <CategoryFilter />
        <ProductGrid />
      </div>
    </>
  );
}

export default App;
