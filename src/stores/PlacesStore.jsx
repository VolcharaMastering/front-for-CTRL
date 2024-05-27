import { makeAutoObservable } from "mobx";

class PlacesStore {
  places = [];

  constructor() {
    makeAutoObservable(this);
  }

  setClean = () => {
    this.places = [];
  };

  setPlaces = (data) => {
    this.places = data;
  };  
}
export default new PlacesStore();
