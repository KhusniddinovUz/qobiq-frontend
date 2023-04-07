import React from "react";
import styles from "../styles";
import { Text, View } from "react-native";

const RegularMessage = (props) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={[styles.messageOwner]}>{props.message.sender.username}</Text>
      <Text>{props.message.content}</Text>
    </View>
  );
};

export default RegularMessage;
