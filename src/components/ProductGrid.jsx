import ProductCard from "./ProductCard";

export default function ProductGrid({ products, isLoading }) {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
        {isLoading ? (
          <div>ADD SKELATON</div>
        ) : (
          products.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
}
