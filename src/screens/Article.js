import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

const Article = (props) => {
  const { article } = props.route.params;
  return (
    <View style={styles.articleContainer}>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <ScrollView style={{ paddingBottom: 100 }}>
        <Text style={styles.articleContent}>{article.content}</Text>
      </ScrollView>
    </View>
  );
};

export default Article;
