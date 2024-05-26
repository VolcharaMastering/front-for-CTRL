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
    console.log(this.popups.popupData, data);
  };
}
export default new PopupState();
