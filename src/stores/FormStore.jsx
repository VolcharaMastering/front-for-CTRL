import { makeAutoObservable } from "mobx";

class FormStore {
  form = {};

  constructor() {
    makeAutoObservable(this);
  }

  setClean = () => {
    this.form = {};
  };

  setForm = (data) => {
    this.form = data;
  };
}
export default new FormStore();
