import React from "react";
import { TextInput, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "../styles";

const SendMessage = () => {
  return (
    <View style={styles.sendMessageContainer}>
      <View style={styles.sendMessageInputWrapper}>
        <TextInput style={styles.sendMessageInput} placeholder={"Message"} />
        <View style={styles.sendMessageIconWrapper}>
          <FontAwesome5 solid name="telegram-plane" color="#00CDBD" size={25} />
        </View>
      </View>
    </View>
  );
};

export default SendMessage;
