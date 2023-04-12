import React, { useEffect, useContext } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { AuthContext } from "../store/authContext";
import { loadArticles } from "../util/articles";
import styles from "./styles";
import { List } from "react-native-paper";

const Recommendation = (props) => {
  const { navigation } = props;
  const ctx = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      ctx.changeLoading(true);
      try {
        const data = await loadArticles();
        ctx.loadArticles(data);
      } catch (error) {
        Alert.alert(error.cause);
      }
      ctx.changeLoading(false);
    };
    fetchData();
  }, []);

  if (ctx.isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00CDBD" />
      </View>
    );
  } else
    return (
      <View style={{ paddingTop: 50 }}>
        {ctx.articles &&
          ctx.articles.map((article) => {
            return (
              <List.Item
                key={article.timestamp}
                title={article.title}
                titleStyle={{ color: "#fff", fontSize: 25 }}
                onPress={() => {
                  navigation.navigate("Article", { article: article });
                }}
                style={[
                  styles.boxShadow,
                  styles.chatsList,
                  { borderRadius: 10 },
                ]}
              />
            );
          })}
      </View>
    );
};

export default Recommendation;
