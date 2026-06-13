export default function EmptyState() {
  return (
    <div className="py-14">
      <div className="flex flex-row min-h-32 justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-alert-icon lucide-search-alert"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 7v4" />
          <path d="M11 15h.01" />
        </svg>
        <span className="text-sm">No results found. Try something else!</span>
      </div>
    </div>
  );
}
