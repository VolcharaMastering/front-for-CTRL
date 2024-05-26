import Cookies from 'js-cookie';

// check token
const checkToken = () => {
  const token = Cookies.get('token');
  if (token) {
    return token;
  } else {
    return false;
  }
};

const deleteToken = () => {
  Cookies.remove('token');
};

export { checkToken, deleteToken };