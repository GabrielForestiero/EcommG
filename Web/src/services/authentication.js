import * as axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = (email, password) => {
  return axios
    .post(`${API_URL}api/auth/login`, {
      email,
      password,
    }).then((resp) => {
      localStorage.setItem('token', resp.data.token);
    })
    .catch((err) => {
      return { error: err.response };
    });
};

export default login;
