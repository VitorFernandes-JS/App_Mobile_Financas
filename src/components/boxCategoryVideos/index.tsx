import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { WebView } from 'react-native-webview';

interface IBoxCategoryVideos {
    text: string;
}

export function BoxCategoryVideos({ text }: IBoxCategoryVideos) {
  return (
        <SafeAreaView style={styles.body}>
            <SafeAreaView style={styles.boxText}>
              <WebView source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/watch?v=5BTA6rL1ulE&t=24s"></iframe>'}} />
                <Text style={styles.text}>{text}</Text>
            </SafeAreaView>
    </SafeAreaView>
  );
}