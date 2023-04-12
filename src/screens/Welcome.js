import React, { useEffect, useContext } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import logo from "../../logo-big.png";
import particles from "../../particles.png";
import styles from "./styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthContext } from "../store/authContext";

const Welcome = (props) => {
  const { navigation } = props;
  const [fontsLoaded] = useFonts({
    Verdana: require("../../assets/fonts/Verdana.ttf"),
  });
  const ctx = useContext(AuthContext);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    if (ctx.firstTime === false) {
      navigation.navigate("Register");
    }
  }, [ctx.firstTime]);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  if (ctx.isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00CDBD" />
      </View>
    );
  } else
    return (
      <View
        style={{
          position: "relative",
          width: "90%",
          height: "90%",
          margin: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <View>
          <View
            style={{
              marginTop: 70,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 400,
            }}
          >
            <Image
              source={particles}
              style={{
                position: "absolute",
                alignSelf: "center",
              }}
            />
            <Image
              source={logo}
              style={{
                position: "absolute",
                alignSelf: "center",
                justifyContent: "center",
              }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 50, color: "#00CDBD", fontFamily: "Verdana" }}
          >
            Welcome To
          </Text>
          <Text
            style={{ fontSize: 50, color: "#00CDBD", fontFamily: "Verdana" }}
          >
            The Qobiq
          </Text>
          <Pressable
            style={[styles.authButton, { marginTop: 50 }]}
            onPress={() => {
              ctx.changeFirstTime(false);
              navigation.navigate("Register");
            }}
          >
            <Text style={[styles.text, { fontFamily: "Verdana" }]}>Next</Text>
          </Pressable>
        </View>
      </View>
    );
};
export default Welcome;
