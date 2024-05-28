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
    console.log("ERRORLOG",this.logs);
  };
  setSuccess = (successData) => {
    this.logs = successData;
    console.log("ERRORLOG",this.logs);
  };
}
export default new ApiLogsStore();
