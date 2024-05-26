import api from "../plugins/axios";
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
    return userData.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const register = async (data) => {
  try {
    const userData = await api.post("register", data);
    UserState.setLogIn(userData.data);
    setCookie(userData.data);
    return userData.data;
  } catch (error) {
    console.log(error);
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

export { login, register, getMe };
