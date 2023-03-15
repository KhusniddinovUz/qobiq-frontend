import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import { useSelector } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SwitchSelector from "react-native-switch-selector";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const Register = (props) => {
  const { navigation } = props;
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState();
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // setType("student");
  // setGender("male");

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate("Clubs");
    }
    setType("student");
    setGender("male");
  }, []);

  const options = [
    { label: "Student", value: "student" },
    { label: "Mentor", value: "mentor" },
  ];
  const registerHandler = () => {
    dispatch(
      register({
        user_type: type,
        username: email,
        fullname: name,
        email: email,
        age: age,
        gender: gender,
        phone_number: phoneNumber,
        bio: bio,
        password: password,
      })
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
          <View style={{ marginBottom: 20 }}>
            <View style={styles.inputBox}>
              <SwitchSelector
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
                style={styles.input}
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
                    backgroundColor: "#F7F7F7",
                  },
                ]}
              >
                <Picker
                  dropdownIconColor={"#00CDBD"}
                  selectedValue={gender}
                  onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>
              <TextInput
                value={age}
                onChangeText={(val) => setAge(val)}
                style={[styles.input, styles.genderAgeInput]}
                placeholder="Age"
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                value={email}
                onChangeText={(val) => setEmail(val)}
                style={styles.input}
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
                style={styles.input}
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
                style={styles.input}
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
              <Text
                onPress={() => {
                  registerHandler();
                  console.log(
                    type,
                    name,
                    gender,
                    age,
                    email,
                    phoneNumber,
                    password,
                    bio
                  );
                }}
                style={styles.text}
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
                  navigation.navigate("Login");
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
