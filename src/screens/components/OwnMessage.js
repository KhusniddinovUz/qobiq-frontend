import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

const OwnMessage = (props) => {
  return (
    <View style={styles.ownMessageContainer} key={props.id}>
      <Text style={styles.ownMessage}>{props.message.content}</Text>
    </View>
  );
};

export default OwnMessage;
