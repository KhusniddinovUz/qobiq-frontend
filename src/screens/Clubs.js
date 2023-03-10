import { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { List } from "react-native-paper";
import styles from "./styles";

const Clubs = (props) => {
  const { navigation } = props;
  const [clubs, setClubs] = useState([]);
  const [err, setErr] = useState();
  useEffect(() => {
    axios
      .get("https://newuuclubs.herokuapp.com/api/clubs?format=json")
      .then((data) => {
        setClubs(data.data);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.authContainer}>
        {clubs &&
          clubs.map((club) => (
            <List.Item
              onPress={() => navigation.navigate("Club", { club: club })}
              style={[styles.boxShadow, styles.clubsList]}
              key={club["id"]}
              title={club["club_name"]}
            />
          ))}
      </View>
    </View>
  );
};

export default Clubs;
