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

export function FixedIncome({ token }: IVideosProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Renda Fixa </Text>
        <ModalPattern
          text={"Aqui você encontra vídeos sobre renda fixa!"}
        />
      </SafeAreaView>
      <BoxVideos/>
      
      <SafeAreaView style={styles.boxVideo}>
        <SafeAreaView style={styles.boxStart}>
          <Text style={styles.start}>COMECE AQUI! </Text>
        </SafeAreaView>
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
