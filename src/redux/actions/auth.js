import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "./types";
import axios from "axios";

export const login = (user) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/login/", user)
    .then((data) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
      console.log("success", data.data);
    })
    .catch((err) => {
      console.log("error", err.response.data);
    });
};

export const register = (user) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/register/", user)
    .then((data) => {
      dispatch({ type: REGISTER_SUCCESS, payload: data.data });
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
