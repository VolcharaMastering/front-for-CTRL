import { makeAutoObservable } from "mobx";

class MenuState {
  isOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  setClosed = () => {
    this.isOpened = false;
  };

  setOpened = () => {
    this.isOpened = true;
  };
}
export default new MenuState();
