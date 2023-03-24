import axios from "axios";

export const register = async (user) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register/",
      user
    );
    return response.data;
  } catch (e) {
    let error = "";
    for (const key in e.response.data) {
      error += `${key.toUpperCase()} : ${e.response.data[key]}\n`;
    }
    throw new Error("Failed login", { cause: error });
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login/", user);
    return response.data;
  } catch (e) {
    let error = "";
    for (const key in e.response.data) {
      error += `${key.toUpperCase()} : ${e.response.data[key]}\n`;
    }
    throw new Error("Failed login", { cause: error });
  }
};
