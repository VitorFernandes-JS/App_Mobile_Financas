import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxVideos } from "../../components/boxVideos";

interface IVideosProps {
  token: string;
}

export function Videos({ token }: IVideosProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

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
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
