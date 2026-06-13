import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGrid({ products, isLoading }) {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
}
