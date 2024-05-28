import { makeAutoObservable } from "mobx";
import { sortReviews } from "../api/reviews";
import ChecketPlaceState from "./ChecketPlaceState";

class SortingState {
  sortBy = { sortBy: "date", sortDirection: "asc" };

  constructor() {
    makeAutoObservable(this);
  }

  setDefault = () => {
    this.sortBy = { sortBy: "date", sortDirection: "asc" };
  };

  setOrder = (data) => {
    this.sortBy = {
      ...this.sortBy,
      ...data,
    };
    sortReviews(ChecketPlaceState.checked._id, this.sortBy.sortBy, this.sortBy.sortDirection);
  };
}
export default new SortingState();
