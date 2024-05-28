import { makeAutoObservable } from "mobx";

class ChecketPlaceState {
  checked = {lat: 55.75017078646975, lng: 37.60995090007783};

  constructor() {
    makeAutoObservable(this);
  }

  setCheckedPlase = (data) => {
    this.checked = data;
  };

  setDefaultChecked = () => {
    this.checked = {lat: 55.75017078646975, lng: 37.60995090007783};
  };
}
export default new ChecketPlaceState();
