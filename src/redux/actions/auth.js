import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "./types";
import axios from "axios";

export const login = (user) => (dispatch) => {
  axios
    .post("https://newuuclubs.herokuapp.com/api/auth/login/", user)
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const register = (user) => (dispatch) => {
  axios
    .post("https://newuuclubs.herokuapp.com/api/auth/register/", user)
    .then((data) => {
      dispatch({ type: REGISTER_SUCCESS, payload: data.data });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
