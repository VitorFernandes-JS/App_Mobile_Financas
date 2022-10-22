import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

interface IRouteParams {
  token: string;
}

export function Favorite() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Favoritos </Text>
        <ModalPattern
          text={
            "Aqui você encontra todos os seus vídeos marcados como favoritos"
          }
        />
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
