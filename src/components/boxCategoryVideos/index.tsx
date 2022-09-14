import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { WebView } from "react-native-webview";

interface IBoxCategoryVideos {
  text: string;
}

export function BoxCategoryVideos({ text }: IBoxCategoryVideos) {
  return (
    <SafeAreaView style={styles.body}>
      <WebView
        source={{ uri: "https://www.youtube.com/embed/t-yMB8LuzVs" }}
        style={{ marginTop: 20 }}
      />
                  
      <SafeAreaView style={styles.boxText}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
