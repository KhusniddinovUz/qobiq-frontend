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
  register: () => {},
  login: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [userObject, setUserObject] = useState({});
  const [token, setToken] = useState();
  const authenticate = async (user) => {
    setUserObject(user.user);
    setToken(user.token);
    if (user.token) {
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
    register: authenticate,
    login: authenticate,
  };
  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
