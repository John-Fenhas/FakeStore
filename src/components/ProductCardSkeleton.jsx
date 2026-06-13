export default function ProductCardSkeleton() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md w-full">
        {/* Image */}
        <div className="w-full aspect-square min-h-64 rounded-md shimmer" />

        {/* Button */}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center mt-3 gap-2 w-full">
        {/* Title */}
        <div className="h-4 w-3/4 rounded shimmer" />

        {/* Price */}
        <div className="h-3 w-1/3 rounded shimmer" />
      </div>
    </div>
  );
}
