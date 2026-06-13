import { useRef, useState, useEffect } from "react";

export default function CategoryDropdown({ handleCategoryChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const categories = [
    "All",
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  const [currentValue, setCurrentValue] = useState("All");
  let selected = categories.find((category) => category === currentValue);

  // outside ref click listner to close dropdown
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-max">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl px-4 text-sm focus:outline-none "
      >
        <span className="text-slate-600 pr-2">Filter by category:</span>
        <span className={`py-0.5 rounded text-slate-800 text-sm pr-2`}>
          {selected}
        </span>

        <svg
          className={`h-3 w-3 text-gray-800 transition ${open && "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-10 mt-1 w-full rounded-xl bg-white shadow-sm shadow-gray-500 overflow-hidden max-h-80 overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.2) transparent",
          }}
        >
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => {
                setOpen(false);
                setCurrentValue(category);
                handleCategoryChange(category);
                console.log(category);
              }}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-white/5 transition"
            >
              <span className={`px-2 py-0.5 rounded text-gray-800 text-sm`}>
                {category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
