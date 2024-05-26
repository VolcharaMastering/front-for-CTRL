import { getMe } from "../../api/users";
import UserState from "../../stores/UserState";
import { checkToken, deleteToken } from "./cookies";

const checkUserAuth = () => {
  const token = checkToken();

  if (token) {
    const user = getMe(token);
    UserState.setLogIn(user);
  } else {
    return "not authorized";
  }
};

const logOut = () => {
  UserState.setLogOut();
  deleteToken();
  return "Successfully logged out";
};

export { checkUserAuth, logOut };
