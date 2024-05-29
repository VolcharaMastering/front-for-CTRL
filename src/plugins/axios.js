import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-for-ctrl.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;