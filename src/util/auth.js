import axios from "axios";

export const register = async (user) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/register/",
    user
  );
  return response.data;
};

export const login = async (user) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login/", user);
    console.log("login success");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
