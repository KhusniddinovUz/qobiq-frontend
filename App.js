import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";
import AuthContextProvider from "./src/store/authContext";

const App = () => {
  return (
    <PaperProvider>
      <AuthContextProvider>
        <ReduxProvider store={store}>
          <MainStackNavigator />
        </ReduxProvider>
      </AuthContextProvider>
    </PaperProvider>
  );
};

export default App;
