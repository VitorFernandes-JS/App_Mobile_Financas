import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

// import { WebView } from "react-native-webview";

interface IBoxCategoryVideos {
  text: string;
  source: any;
}

export function BoxCategoryVideos({ text, source }: IBoxCategoryVideos) {
  return (
    <SafeAreaView style={styles.body}>
      <RectButton>
        <Image source={source} />
      </RectButton>
      
      {/* {/* <WebView
        source={{ uri: "https://www.youtube.com/embed/t-yMB8LuzVs" }}
        style={{ marginTop: 20 }}
      /> 
      < */}
      <SafeAreaView style={styles.boxText}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
