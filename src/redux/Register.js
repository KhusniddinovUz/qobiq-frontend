import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import { useSelector } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";

const Register = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate("Clubs");
    }
  });

  const registerHandler = () => {
    dispatch(
      register({ username, password, email, group_number: groupNumber })
    );
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"handled"}
    >
      <View style={styles.authContainer}>
        <View style={styles.authHeaderBox}>
          <Text style={styles.authHeader}>Create your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Your name" />
            <View style={styles.inputIconWrapper}>
              <FontAwesome5 solid name="user" color="#00CDBD" size={25} />
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Email" />
            <View style={styles.inputIconWrapper}>
              <FontAwesome5 solid name="envelope" color="#00CDBD" size={25} />
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Phone Number" />
            <View style={styles.inputIconWrapper}>
              <FontAwesome5 solid name="phone-alt" color="#00CDBD" size={25} />
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Password" />
            <View style={styles.inputIconWrapper}>
              <FontAwesome5 solid name="lock" color="#00CDBD" size={25} />
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Bio"
              multiline={true}
              numberOfLines={10}
            />
            <View style={styles.inputIconWrapper}>
              <FontAwesome5
                solid
                name="comment-alt"
                color="#00CDBD"
                size={25}
              />
            </View>
          </View>
          <Pressable style={styles.authButton} onPress={registerHandler}>
            <Text style={styles.text}>Sign up</Text>
          </Pressable>
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
            <Text style={[styles.authText]}>Already have an account?</Text>
            <Text
              style={[styles.primaryText, { fontWeight: "bold", fontSize: 18 }]}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Sign in
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
