import { makeAutoObservable } from "mobx";

class ReviewsStore {
  reviews = [];

  constructor() {
    makeAutoObservable(this);
  }

  setClean = () => {
    this.reviews = [];
  };

  setReviews = (data) => {
    this.reviews = data;
  };  
}
export default new ReviewsStore();
