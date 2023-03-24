import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { dummyMessages } from "./dummyData";
import styles from "./styles";
import { ScrollView } from "react-native";
import RegularMessage from "./components/RegularMessage";
import OwnMessage from "./components/OwnMessage";
import SendMessage from "./components/SendMessage";

const Group = (props) => {
  const [messages, setMessages] = useState(dummyMessages);
  const { club } = props.route.params;
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
              if (message.owner === "Toto") {
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
