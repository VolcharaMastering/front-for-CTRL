import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { findPlaces } from "../../api/places";
import "./SearchBar.scss";
import MenuCheckedState from "../../stores/MenuCheckedState";

const SearchBar = observer(() => {
  const [searchString, setSearchString] = useState("");

  const handleSearch = () => {
    if (searchString.length > 1) {
      if (MenuCheckedState.checked === "places") {
        findPlaces(searchString);
      }
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchString]);
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {MenuCheckedState.checked === "places" ? (
        <>
          <label htmlFor="search-bar__label">Search for places</label>
          <input
            id="search-string"
            name="searchString"
            value={searchString}
            className="search-bar__input"
            placeholder="Enter search request"
            onChange={(e) => setSearchString(e.target.value)}
            required
            type="text"
          />
        </>
      ) : (
        <>
          <label htmlFor="search-bar__label">Search for details</label>
          <input
            id="search-string"
            name="searchString"
            value={searchString}
            className="search-bar__input"
            placeholder="Enter search request"
            onChange={(e) => setSearchString(e.target.value)}
            required
            type="text"
          />
        </>
      )}
    </form>
  );
});
export default SearchBar;
