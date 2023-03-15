import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { useSelector } from "react-redux";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loginHandler = () => {
    dispatch(login({ username: username, password: password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate("Clubs");
    }
  });

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"handled"}
    >
      <View style={styles.authContainer}>
        <View style={styles.authHeaderBox}>
          <Text style={styles.authHeader}>Login to your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={{ paddingTop: 20 }}>
            <View style={[styles.inputBox, styles.loginInputBox]}>
              <TextInput
                style={styles.input}
                value={username}
                placeholder="Email"
                placeholderTextColor="#9E9E9E"
                onChangeText={(text) => {
                  setUsername(text);
                }}
              />
              <View style={styles.inputIconWrapper}>
                <FontAwesome5 solid name="envelope" color="#00CDBD" size={25} />
              </View>
            </View>
            <View style={[styles.inputBox, styles.loginInputBox]}>
              <TextInput
                style={styles.input}
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
              <Text style={styles.text}>Sign in</Text>
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
                  navigation.navigate("Register");
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
