import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadMessages = async (chatRoom) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/chat/messages/",
      { params: { chat_room: chatRoom } }
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

export const createMessage = async (message) => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: { Authorization: `Token ${token}` },
  };
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/chat/create/",
      message,
      config
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
