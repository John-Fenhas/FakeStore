export default function searchbar({ handleSearch }) {
  return (
    <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-search-icon lucide-search"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
      <input
        className=" border-none outline-none text-sm"
        type="text"
        placeholder="What are you looking for?"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}
