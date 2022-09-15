import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text,  } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxCategoryVideos } from "../../components/boxCategoryVideos";

import Capa1 from "../../assets/capas_renda_fixa/capa1.png";
import Capa2 from "../../assets/capas_renda_fixa/capa2.png";
import Capa3 from "../../assets/capas_renda_fixa/capa3.png";
import Capa4 from "../../assets/capas_renda_fixa/capa4.png";
import Capa5 from "../../assets/capas_renda_fixa/capa5.png";


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
      <BoxCategoryVideos text="Video 2" source={Capa2}/>
      <BoxCategoryVideos text="Video 3" source={Capa3}/>
      <BoxCategoryVideos text="Video 4" source={Capa4}/>
      <BoxCategoryVideos text="Video 5" source={Capa5}/>
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
