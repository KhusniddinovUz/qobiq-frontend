import React from "react";
import styles from "../styles";
import { Text, View } from "react-native";

const RegularMessage = (props) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={[styles.messageOwner]}>{props.message.owner}</Text>
      <Text>{props.message.message}</Text>
    </View>
  );
};

export default RegularMessage;
