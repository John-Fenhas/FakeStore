import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGrid({
  error,
  isEmpty,
  productCount,
  products,
  isLoading,
}) {
  if (isEmpty) {
    return <EmptyState />;
  }
  if (error) {
    return <ErrorState />;
  }
  return (
    <div className="py-14 md:py-20">
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
