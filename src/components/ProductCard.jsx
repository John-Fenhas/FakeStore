export default function ProductCard({ product }) {
  return (
    <div>
      <div className="group/card overflow-hidden rounded-md cursor-pointer w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-3/5 aspect-[1/1.6] object-contain hover:scale-125 duration-800"
        />
        {/* {isMobile ? (
          <div className="absolute bottom-4 right-4 bg-gray-300 p-1 rounded-md">
            <svg
              focusable="false"
              width="24"
              height="24"
              className="icon icon--quick-buy-shopping-bag   "
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 4H5L4 20H20C19.7517 16.0273 19.375 10 19.375 10"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
              <path
                d="M9 7V7C9 8.65685 10.3431 10 12 10V10C13.6569 10 15 8.65685 15 7V7"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
              <path
                d="M20 0V8M16 4H24"
                stroke="currentColor"
                strokwidth="1.6"
              ></path>
            </svg>
          </div>
        ) : (
          <>

          </>
        )} */}

        <button
          className={`
            absolute left-4 right-4 -bottom-12
            h-10
            bg-white
            border border-gray-200
            rounded-lg
            text-sm
            opacity-0
            z-50
            transition-all duration-500
            group-hover/card:opacity-100
            group-hover/card:-translate-y-14
            cursor-pointer
            group-hover
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
