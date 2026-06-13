import CategoryDropdown from "./CategoryDropdown";
import Searchbar from "./Searchbar";
export default function CategoryFilter({
  productCount,
  handleCategoryChange,
  handleSearch,
  isLoading,
}) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center pt-24">
      <div className="text-xs pb-1.5">
        {isLoading ? "" : ` ${productCount} Products Available`}
      </div>
      <div className="flex flex-col gap-1.5 md:flex-row md:gap-4 items-center ">
        <CategoryDropdown handleCategoryChange={handleCategoryChange} />
        <Searchbar handleSearch={handleSearch} />
      </div>
    </div>
  );
}
