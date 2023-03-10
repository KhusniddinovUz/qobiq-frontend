import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Club = (props) => {
  const { club } = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>{club["club_name"]}</Text>
      <Text style={styles.texts}>{club["club_definition"]}</Text>
      <Text style={styles.texts}>Club Time: {club["club_time"]}</Text>
      <Text style={styles.texts}>Students: {club["active_students"]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
  },
  center: {
    textAlign: "center",
  },
  texts: {
    width: "60%",
    padding: 20,
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "left",
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default Club;
