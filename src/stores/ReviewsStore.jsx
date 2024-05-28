import { makeAutoObservable } from "mobx";

class ReviewsStore {
  reviews = [];

  constructor() {
    makeAutoObservable(this);
  }

  setClean = () => {
    this.reviews = [];
  };

  setPlaces = (data) => {
    this.reviews = data;
  };  
}
export default new ReviewsStore();
