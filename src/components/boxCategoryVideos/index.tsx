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
          scalesPageToFit={true}
          bounces={true}
          javaScriptEnabled
          style={styles.webView}
          source={{ uri: "https://www.youtube.com/watch?v=5BTA6rL1ulE&t=24s"}}
          automaticallyAdjustContentInsets={false}
        />
      <SafeAreaView style={styles.boxText}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
