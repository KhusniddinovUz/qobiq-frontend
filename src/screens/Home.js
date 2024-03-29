import { useState, useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";
import { dummyClubs } from "./dummyData";
import qobiqImg from "../../qobiq.png";
import { AuthContext } from "../store/authContext";

const Home = (props) => {
  const { navigation } = props;
  const [clubs, setClubs] = useState(dummyClubs);
  const useCtx = useContext(AuthContext);

  return (
    <ScrollView style={[styles.container, { marginTop: 30 }]}>
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
              title={club.club_name}
              titleStyle={{ color: "#fff", fontSize: 25 }}
              description={club.club_definition}
              descriptionStyle={{ color: "#898989", fontSize: 18 }}
              onPress={() => {
                navigation.navigate("Group", { club: club });
                useCtx.changeLoading(true);
              }}
              style={[styles.boxShadow, styles.chatsList]}
            />
          ))}
        <View
          style={{
            marginTop: 50,
            borderColor: "#898989",
            borderStyle: "solid",
            borderWidth: 1,
            width: "80%",
            height: 1,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></View>
        <List.Item
          key="recommendation"
          title="Recommendation"
          titleStyle={{ color: "#fff", fontSize: 25 }}
          onPress={() => {
            navigation.navigate("Recommendation");
          }}
          style={[
            styles.boxShadow,
            styles.chatsList,
            { marginTop: 30, marginBottom: 30, borderRadius: 20 },
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
