import { makeAutoObservable } from "mobx";

class PopupState {
  popups = {};

  constructor() {
    makeAutoObservable(this);
  }

  setClosed = () => {
    this.popups = {};
  };

  setOpened = (data) => {
    this.popups = data;
  };
}
export default new PopupState();
