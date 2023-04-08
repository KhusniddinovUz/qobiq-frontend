import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../store/authContext";
import { login } from "../util/auth";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const Login = (props) => {
  const [fontsLoaded] = useFonts({
    Verdana: require("../../assets/fonts/Verdana.ttf"),
  });
  const authCtx = useContext(AuthContext);
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    authCtx.changeLoading(true);
    try {
      const user = await login({ username: username, password: password });
      authCtx.login(user);
    } catch (error) {
      Alert.alert(error.cause);
    }
    setTimeout(() => {
      authCtx.changeLoading(false);
    }, 500);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  if (authCtx.isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00CDBD" />
      </View>
    );
  } else
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"handled"}
      >
        <View style={styles.authContainer}>
          <View style={styles.authHeaderBox}>
            <Text style={[styles.authHeader, { fontFamily: "Verdana" }]}>
              Login to your Account
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ paddingTop: 20 }}>
              <View style={[styles.inputBox, styles.loginInputBox]}>
                <TextInput
                  style={[styles.input, { fontFamily: "Verdana" }]}
                  value={username}
                  placeholder="Email"
                  placeholderTextColor="#9E9E9E"
                  onChangeText={(text) => {
                    setUsername(text);
                  }}
                />
                <View style={styles.inputIconWrapper}>
                  <FontAwesome5
                    solid
                    name="envelope"
                    color="#00CDBD"
                    size={25}
                  />
                </View>
              </View>
              <View style={[styles.inputBox, styles.loginInputBox]}>
                <TextInput
                  style={[styles.input, { fontFamily: "Verdana" }]}
                  value={password}
                  placeholder="Password"
                  placeholderTextColor="#9E9E9E"
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
                <View style={styles.inputIconWrapper}>
                  <FontAwesome5 name="lock" color="#00CDBD" size={25} />
                </View>
              </View>
              <Pressable
                style={[styles.authButton, styles.loginAuthButton]}
                onPress={loginHandler}
              >
                <Text style={[styles.text, { fontFamily: "Verdana" }]}>
                  Sign in
                </Text>
              </Pressable>
            </View>
            <View>
              <View style={styles.authLine}>
                <View
                  style={{
                    borderStyle: "solid",
                    borderColor: "#DCDCDC",
                    borderWidth: 1,
                    width: "80%",
                  }}
                ></View>
              </View>
              <View style={[styles.flexView, styles.bottom]}>
                <Text style={[styles.authText]}>Don't have an account? </Text>
                <Text
                  style={[
                    styles.primaryText,
                    { fontWeight: "bold", fontSize: 18 },
                  ]}
                  onPress={() => {
                    navigation.replace("Register");
                  }}
                >
                  Sign up
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
};

export default Login;
