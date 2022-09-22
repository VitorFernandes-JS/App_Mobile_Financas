import React from "react";
import { styles } from "./styles";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxVideos } from "../../components/boxVideos";
import { BoxCategoryVideos } from "../../components/boxCategoryVideos";
import { Cover_Fixed_Income } from "../../utils/cover";

interface IVideosProps {
  token: string;
}

export function Actions({ token }: IVideosProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Ações </Text>
        <ModalPattern text={"Aqui você encontra vídeos sobre ações!"} />
      </SafeAreaView>

      <SafeAreaView style={styles.viewBoxCategoryVideos}>
          <ScrollView contentContainerStyle={styles.contentScollView}>
          <BoxCategoryVideos
            text="Como fazer renda extra na Internet"
            source={Cover_Fixed_Income[0]}
          />
          <BoxCategoryVideos text="3 formas de ganhar dinheiro EXTRA!" source={Cover_Fixed_Income[1]} />
          <BoxCategoryVideos text="Faça uma renda extra com o jogo Axie Infinity!" source={Cover_Fixed_Income[2]} />
          <BoxCategoryVideos text="Qual é o melhor banco digital da atualidade?" source={Cover_Fixed_Income[3]} />
          <BoxCategoryVideos text="Aplicativos que te dão dinheiro para fazer tarefas!" source={Cover_Fixed_Income[4]} />
          </ScrollView>
        </SafeAreaView>
      

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
