import api from "../plugins/axios";
import ApiLogsStore from "../stores/ApiLogsStore";
import PopupState from "../stores/PopupState";
import UserState from "../stores/UserState";
import Cookies from 'js-cookie';

const setCookie = (data) => {
    const token = data.token;
    Cookies.set('token', token, { expires: 2 });
}
const login = async (data) => {
  try {
    const userData = await api.post("login", data);
    UserState.setLogIn(userData.data);
    setCookie(userData.data);
    ApiLogsStore.setSuccess("You are logged in");
    PopupState.setClosed();
    return userData.data;
  } catch (error) {
    console.log(error);
    ApiLogsStore.setError(error.response.data.message);
    throw error;
  }
};

const registerUser = async (data) => {
  try {
    const userData = await api.post("register", data);
    ApiLogsStore.setSuccess("You Registered successfully");
    return userData.data;
  } catch (error) {
    console.log(error);
    ApiLogsStore.setError(error.response.data.message);
    throw error;
  }
};

const getMe = async (token) => {
  try {
    const userData = await api.get("users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    UserState.setLogIn(userData.data);
    return userData.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { login, registerUser, getMe };
