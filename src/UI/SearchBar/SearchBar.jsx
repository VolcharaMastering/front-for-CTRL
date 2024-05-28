import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { findPlaces } from "../../api/places";
import MenuCheckedState from "../../stores/MenuCheckedState";
import { findReviews } from "../../api/reviews";
import "./SearchBar.scss";
import ChecketPlaceState from "../../stores/ChecketPlaceState";

const SearchBar = observer(() => {
  const [searchString, setSearchString] = useState("");
  const placeId = ChecketPlaceState.checked._id;

  const handleSearch = () => {
      if (MenuCheckedState.checked === "places") {
        findPlaces(searchString);
      } else {
        findReviews(placeId, searchString);
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
          <label htmlFor="search-bar__label">Search for reviews</label>
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
