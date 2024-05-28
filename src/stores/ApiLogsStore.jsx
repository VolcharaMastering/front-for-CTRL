import { makeAutoObservable } from "mobx";

class ApiLogsStore {
  logs = "";

  constructor() {
    makeAutoObservable(this);
  }

  setClean = () => {
    this.logs = "";
  };

  setError = (errorData) => {
    this.logs = errorData;
  };
  setSuccess = (successData) => {
    this.logs = successData;
  };
}
export default new ApiLogsStore();
