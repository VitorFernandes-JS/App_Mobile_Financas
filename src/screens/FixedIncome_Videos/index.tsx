import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxCategoryVideos } from "../../components/boxCategoryVideos";

import Capa1 from "../../assets/capas_renda_fixa/capa1.png";



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

      <SafeAreaView style={styles.viewBoxCategoryVideos}>
      <BoxCategoryVideos text="Video 1" source={Capa1}/>
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
