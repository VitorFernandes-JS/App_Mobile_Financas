import React from "react";
import { styles } from "./styles";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxCategoryVideos } from "../../components/boxCategoryVideos";
import { Cover_Actions } from "../../utils/cover";

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
            text="O que fazer com 1000 reais?"
            source={Cover_Actions[0]}
          />
          <BoxCategoryVideos
            text="5 hábitos dos milionários"
            source={Cover_Actions[1]}
          />
          <BoxCategoryVideos
            text="Como começar a investir?"
            source={Cover_Actions[2]}
          />
          <BoxCategoryVideos
            text="5 erros que te deixam mais pobre!"
            source={Cover_Actions[3]}
          />
          <BoxCategoryVideos
            text="Investindo em ações na prática!"
            source={Cover_Actions[4]}
          />
        </ScrollView>
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
