import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchSelector from "react-native-switch-selector";
import DropDownPicker from "react-native-dropdown-picker";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AuthContext } from "../store/authContext";
import { register } from "../util/auth";
import styles from "./styles";

const Register = (props) => {
  const [fontsLoaded] = useFonts({
    Verdana: require("../../assets/fonts/Verdana.ttf"),
  });
  const authCtx = useContext(AuthContext);
  const { navigation } = props;
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setType("student");
    setGender("male");
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    DropDownPicker.setListMode("MODAL");
  }, []);

  const options = [
    { label: "Student", value: "student" },
    { label: "Mentor", value: "mentor" },
  ];
  const registerHandler = async () => {
    const user = {
      user_type: type,
      username: email,
      fullname: name,
      email: email,
      age: age,
      gender: gender,
      phone_number: phoneNumber,
      bio: bio,
      password: password,
    };
    try {
      const response = await register(user);
      authCtx.register(response);
    } catch (error) {
      Alert.alert(error.cause);
    }
  };
  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"handled"}
    >
      <View style={styles.authContainer}>
        <View style={styles.authHeaderBox}>
          <Text style={[styles.authHeader, { fontFamily: "Verdana" }]}>
            Create your Account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={{ marginBottom: 20 }}>
            <View style={styles.inputBox}>
              <SwitchSelector
                textStyle={{ fontFamily: "Verdana" }}
                selectedTextStyle={{ fontFamily: "Verdana" }}
                options={options}
                initial={0}
                buttonColor={"#00CDBD"}
                onPress={(value) => {
                  setType(value);
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={name}
                onChangeText={(val) => setName(val)}
                style={[styles.input, { fontFamily: "Verdana" }]}
                placeholder="Your name"
              />
              <View style={styles.inputIconWrapper}>
                <FontAwesome5 solid name="user" color="#00CDBD" size={25} />
              </View>
            </View>
            <View style={[styles.inputBox, styles.genderAgeBox]}>
              <View
                style={[
                  styles.genderAgeInput,
                  {
                    width: "45%",
                    borderRadius: 20,
                  },
                ]}
              >
                <DropDownPicker
                  textStyle={{
                    fontFamily: "Verdana",
                  }}
                  style={{
                    backgroundColor: "#F7F7F7",
                    borderRadius: 20,
                    paddingLeft: 20,
                    borderColor: "#f7f7f7",
                  }}
                  arrowIconContainerStyle={{
                    backgroundColor: "#00CDBD",
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  ArrowDownIconComponent={() => (
                    <FontAwesome5 name="chevron-down" color="#fff" size={15} />
                  )}
                  ArrowUpIconComponent={() => (
                    <FontAwesome5 name="chevron-up" color="#fff" size={15} />
                  )}
                  modalAnimationType="slide"
                  open={open}
                  value={gender}
                  items={items}
                  setOpen={setOpen}
                  setValue={setGender}
                  setItems={setItems}
                />
              </View>
              <TextInput
                value={age}
                onChangeText={(val) => setAge(val)}
                style={[
                  styles.input,
                  styles.genderAgeInput,
                  { fontFamily: "Verdana" },
                ]}
                placeholder="Age"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={email}
                onChangeText={(val) => setEmail(val)}
                style={[styles.input, { fontFamily: "Verdana" }]}
                placeholder="Email"
              />
              <View style={styles.inputIconWrapper}>
                <FontAwesome5 solid name="envelope" color="#00CDBD" size={25} />
              </View>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={phoneNumber}
                onChangeText={(val) => setPhoneNumber(val)}
                style={[styles.input, { fontFamily: "Verdana" }]}
                placeholder="Phone Number"
              />
              <View style={styles.inputIconWrapper}>
                <FontAwesome5
                  solid
                  name="phone-alt"
                  color="#00CDBD"
                  size={25}
                />
              </View>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={password}
                onChangeText={(val) => setPassword(val)}
                style={[styles.input, { fontFamily: "Verdana" }]}
                placeholder="Password"
              />
              <View style={styles.inputIconWrapper}>
                <FontAwesome5 solid name="lock" color="#00CDBD" size={25} />
              </View>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={bio}
                onChangeText={(val) => setBio(val)}
                style={[styles.input, { fontFamily: "Verdana" }]}
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
              <Text
                onPress={registerHandler}
                style={[styles.text, { fontFamily: "Verdana" }]}
              >
                Sign up
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
              <Text style={[styles.authText]}>Already have an account?</Text>
              <Text
                style={[
                  styles.primaryText,
                  { fontWeight: "bold", fontSize: 18 },
                ]}
                onPress={() => {
                  navigation.replace("Login");
                }}
              >
                Sign in
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
