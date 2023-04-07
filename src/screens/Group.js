import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native";
import RegularMessage from "./components/RegularMessage";
import OwnMessage from "./components/OwnMessage";
import SendMessage from "./components/SendMessage";
import { AuthContext } from "../store/authContext";
import { loadMessages } from "../util/chat";

const Group = (props) => {
  const { club } = props.route.params;
  const [messages, setMessages] = useState([]);
  const ctx = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loadMessages(club.id);
        ctx.loadMessages(response, club.id);
      } catch (error) {
        Alert.alert(error.cause);
      }
      setTimeout(() => {
        ctx.changeLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);
  useEffect(() => {
    switch (club.id) {
      case "unity":
        setMessages(ctx.unityMessages);
        break;
      case "mirror":
        setMessages(ctx.mirrorMessages);
        break;
      case "destiny":
        setMessages(ctx.destinyMessages);
        break;
    }
  }, [ctx.unityMessages, ctx.mirrorMessages, ctx.destinyMessages]);
  if (ctx.isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00CDBD" />
      </View>
    );
  } else
    return (
      <View style={styles.groupContainer}>
        <Text
          style={{
            height: 60,
            fontSize: 40,
            textAlign: "center",
          }}
        >
          {club.club_name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {messages &&
              messages.map((message) => {
                if (message.sender.username === "Shakhobiddin") {
                  return <OwnMessage key={message.id} message={message} />;
                } else {
                  return <RegularMessage key={message.id} message={message} />;
                }
              })}
          </ScrollView>
        </View>
        <SendMessage />
      </View>
    );
};

export default Group;
