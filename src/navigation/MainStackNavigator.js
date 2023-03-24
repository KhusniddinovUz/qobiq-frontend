import React, { useEffect, useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Group from "../screens/Group";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { AuthContext } from "../store/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
    primary: "#00CDBD",
    secondary: "#FFF",
  },
};
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Group" component={Group} />
    </Stack.Navigator>
  );
};
const MainStackNavigator = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("token");
      const name = await AsyncStorage.getItem("name");
      const userType = await AsyncStorage.getItem("userType");
      const gender = await AsyncStorage.getItem("gender");
      const age = await AsyncStorage.getItem("age");
      const email = await AsyncStorage.getItem("email");
      const id = await AsyncStorage.getItem("id");
      const phoneNumber = await AsyncStorage.getItem("phoneNumber");
      const bio = await AsyncStorage.getItem("bio");
      const user = {
        id,
        user_type: userType,
        fullname: name,
        email,
        age,
        gender,
        phone_number: phoneNumber,
        bio,
      };
      const data = { token: token, user: user };
      if (token) {
        authCtx.login(data);
      }
    };
    fetchUser();
  }, []);
  return (
    <NavigationContainer theme={MyTheme}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default MainStackNavigator;
