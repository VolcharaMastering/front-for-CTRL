import { makeAutoObservable } from "mobx";

class MenuCheckedState {
  checked = "places";

  constructor() {
    makeAutoObservable(this);
  }

  setPlaces = () => {
    this.checked = "places";
  };
  setDetails = () => {
    this.checked = "details";
  };
}
export default new MenuCheckedState();
