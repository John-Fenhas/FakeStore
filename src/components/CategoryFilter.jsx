import CategoryDropdown from "./CategoryDropdown";
import Searchbar from "./Searchbar";
export default function CategoryFilter() {
  return (
    <div className="flex flex-row justify-between items-center pt-24">
      <div className="">product number</div>
      <div className="flex gap-4 items-center">
        <CategoryDropdown />
        <Searchbar />
      </div>
    </div>
  );
}
