import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxVideos } from "../../components/boxVideos";
import { WebView } from 'react-native-webview';
import { useRoute } from "@react-navigation/native";

interface IRouteParams {
  token: string;
}

export function Videos() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Vídeos </Text>
        <ModalPattern
          text={
            "Aqui você consegue ver vídeos sobre o que você está procurando!"
          }
        />
      </SafeAreaView>
      <BoxVideos />

      <SafeAreaView style={styles.boxVideo}>
        <SafeAreaView style={styles.boxStart}>
          <Text style={styles.start}>COMECE AQUI! </Text>
        </SafeAreaView>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/bxUksd21WnA" }}
          style={styles.video}
        />
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
