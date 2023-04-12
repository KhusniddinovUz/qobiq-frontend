import axios from "axios";

export const register = async (user) => {
  try {
    const response = await axios.post(
      "https://qobiq-backend.herokuapp.com/api/register/",
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
    const response = await axios.post(
      "https://qobiq-backend.herokuapp.com/api/login/",
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
