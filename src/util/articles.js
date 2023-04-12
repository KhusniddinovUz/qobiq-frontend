import axios from "axios";

export const loadArticles = async () => {
  try {
    const response = await axios.get(
      "https://qobiq-backend.herokuapp.com/api/articles/"
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
