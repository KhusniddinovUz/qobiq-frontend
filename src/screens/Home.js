import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { List } from "react-native-paper";
import styles from "./styles";
import { dummyClubs } from "./dummyData";
import qobiqImg from "../../qobiq.png";

const Home = (props) => {
  const { navigation } = props;
  const [clubs, setClubs] = useState(dummyClubs);
  const [err, setErr] = useState();
  useEffect(() => {
    // axios
    //   .get("https://newuuclubs.herokuapp.com/api/clubs?format=json")
    //   .then((data) => {
    //     setClubs(data.data);
    //   })
    //   .catch((error) => {
    //     setErr(error);
    //     console.log(err);
    //   });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={qobiqImg} />
        <Text style={{ color: "#00CDBD", fontSize: 25, marginLeft: 10 }}>
          The Qobiq
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25, color: "#898989" }}>Groups</Text>
        <View
          style={{
            borderStyle: "solid",
            borderColor: "#898989",
            borderWidth: 1,
            width: "70%",
            marginTop: 10,
            height: 1,
          }}
        ></View>
      </View>
      <View>
        {clubs &&
          clubs.map((club) => (
            <List.Item
              key={club.id}
              title="Group Name"
              titleStyle={{ color: "#fff", fontSize: 25 }}
              description="Group description"
              descriptionStyle={{ color: "#898989", fontSize: 18 }}
              onPress={() => navigation.navigate("Group", { club: club })}
              style={[styles.boxShadow, styles.chatsList]}
            />
          ))}
      </View>
    </View>
  );
};

export default Home;
