import CategoryDropdown from "./CategoryDropdown";
import Searchbar from "./Searchbar";
export default function CategoryFilter({ handleCategoryChange, handleSearch }) {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center pt-24">
      <div className="">product number</div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <CategoryDropdown handleCategoryChange={handleCategoryChange} />
        <Searchbar handleSearch={handleSearch} />
      </div>
    </div>
  );
}
