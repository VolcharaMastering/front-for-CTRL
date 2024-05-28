import { makeAutoObservable } from "mobx";

class UserState {
  userData = {};

  constructor() {
    makeAutoObservable(this);
  }

  setLogOut = () => {
    this.userData = {};
  };

  setLogIn = (data) => {
    this.userData = { ...data, logedIn: true };
    console.log(this.userData.logedIn, data);
  };
}
export default new UserState();
