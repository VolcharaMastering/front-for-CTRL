import { makeAutoObservable } from "mobx";

class EyeState {
  isOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleEye = () => {
    this.isOpened = !this.isOpened;
  };
}
export default new EyeState();
