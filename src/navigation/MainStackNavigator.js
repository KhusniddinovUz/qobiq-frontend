import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Club from "../screens/Club";
import Login from "../screens/Login";
import Register from "../screens/Register";

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

const MainStackNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Clubs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Clubs" component={Home} />
        <Stack.Screen name="Club" component={Club} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
