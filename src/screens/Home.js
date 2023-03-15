import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";
import { List } from "react-native-paper";
import styles from "./styles";
import ClubsList from "./dummyData";

const Home = (props) => {
  const { navigation } = props;
  const [clubs, setClubs] = useState([ClubsList]);
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

  const Item = ({ club }) => (
    <List.Item
      // key={club.id}
      title={club["club_name"]}
      onPress={() => navigation.navigate("Club", { club: club })}
      style={[styles.boxShadow, styles.chatsList]}
    />
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.authContainer}>
        <FlatList
          data={clubs}
          renderItem={(item) => <Item club={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
