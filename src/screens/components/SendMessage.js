import React, { useState, useContext } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../../store/authContext";
import styles from "../styles";
import { createMessage, loadMessages } from "../../util/chat";

const SendMessage = (props) => {
  const chatRoom = props.chatRoom;
  const ctx = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const submitHandler = async () => {
    if (message.trim() !== "") {
      ctx.changeLoading(true);
      try {
        await createMessage({
          content: message.trim(),
          chat_room: chatRoom,
        });
        const response = await loadMessages(chatRoom);
        ctx.loadMessages(response, chatRoom);
      } catch (err) {
        Alert.alert(err.cause);
      }
      ctx.changeLoading(false);
    }
  };
  return (
    <View style={styles.sendMessageContainer}>
      <View style={styles.sendMessageInputWrapper}>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.sendMessageInput}
          placeholder={"Message"}
        />
        <View style={styles.sendMessageIconWrapper}>
          <TouchableOpacity onPress={submitHandler}>
            <FontAwesome5
              solid
              name="telegram-plane"
              color="#00CDBD"
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SendMessage;
