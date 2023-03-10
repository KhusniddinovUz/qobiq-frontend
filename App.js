import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import {Provider as ReduxProvider} from "react-redux";
import store from "./src/redux/store";

const App = () => {
    return (<PaperProvider>
        <ReduxProvider store={store}>
            <MainStackNavigator/>
        </ReduxProvider>
    </PaperProvider>);
};

export default App;
