export default function ProductCard({ product }) {
  return (
    <div className="bg-slate-50 rounded-xl shadow-sm py-4">
      <div className="relative group/card overflow-hidden rounded-md cursor-pointer w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-3/5 aspect-[1/1.4] object-contain group-hover/card:scale-125 duration-800"
        />

        <button
          className={`
            absolute left-4 right-4 -bottom-12
            h-10
            bg-slate-50
            border border-gray-200
            rounded-lg
            text-sm
            opacity-0
            z-50
            transition-all duration-500
            group-hover/card:opacity-100
            group-hover/card:-translate-y-14
            hover:bg-slate-200
            cursor-pointer
            
            `}
        >
          + Add To Cart
        </button>
      </div>

      <div className="flex flex-col items-center mt-4 text-sm leading-relaxed w-full">
        <p className="font-medium text-gray-700 cursor-pointer text-center w-fit">
          {product.title}
        </p>

        <p className="text-gray-800 text-xs">{product.price} EGP</p>
      </div>
    </div>
  );
}
