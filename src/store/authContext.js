import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
export const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  userType: null,
  name: null,
  gender: null,
  age: null,
  email: null,
  id: null,
  phoneNumber: null,
  bio: null,
  isLoading: false,
  firstTime: true,
  unityMessages: [],
  mirrorMessages: [],
  destinyMessages: [],
  loadMessages: () => {},
  register: () => {},
  login: () => {},
  changeLoading: () => {},
  changeFirstTime: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [userObject, setUserObject] = useState({});
  const [token, setToken] = useState();
  const [unityMessages, setUnityMessages] = useState([]);
  const [mirrorMessages, setMirrorMessages] = useState([]);
  const [destinyMessages, setDestinyMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const authenticate = async (user) => {
    if (user && user.token) {
      setUserObject(user.user);
      setToken(user.token);
      await AsyncStorage.setItem("firstTime", firstTime.toString());
      await AsyncStorage.setItem("token", user.token);
      await AsyncStorage.setItem("userType", user.user.user_type);
      await AsyncStorage.setItem("name", user.user.fullname);
      await AsyncStorage.setItem("gender", user.user.gender);
      await AsyncStorage.setItem("age", user.user.age.toString());
      await AsyncStorage.setItem("email", user.user.email);
      await AsyncStorage.setItem("id", user.user.id.toString());
      await AsyncStorage.setItem("phoneNumber", user.user.phone_number);
      await AsyncStorage.setItem("bio", user.user.bio);
    }
  };
  const loadMessages = (messages, chatRoom) => {
    switch (chatRoom) {
      case "unity":
        setUnityMessages(messages);
        break;
      case "mirror":
        setMirrorMessages(messages);
        break;
      case "destiny":
        setDestinyMessages(messages);
        break;
    }
  };

  const changeLoading = (value) => {
    setLoading(value);
  };

  const changeFirstTime = async (value) => {
    setFirstTime(value);
    await AsyncStorage.setItem("firstTime", JSON.stringify(value));
  };
  const value = {
    token: token,
    isAuthenticated: !!token,
    userType: userObject.user_type,
    name: userObject.fullname,
    gender: userObject.gender,
    age: userObject.age,
    email: userObject.email,
    id: userObject.id,
    phoneNumber: userObject.phone_number,
    bio: userObject.bio,
    isLoading: loading,
    unityMessages: unityMessages,
    mirrorMessages: mirrorMessages,
    destinyMessages: destinyMessages,
    firstTime: firstTime,
    loadMessages: loadMessages,
    register: authenticate,
    login: authenticate,
    changeLoading: changeLoading,
    changeFirstTime: changeFirstTime,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
