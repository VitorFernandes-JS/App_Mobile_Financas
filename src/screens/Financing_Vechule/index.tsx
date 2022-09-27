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

export function Financing_Vechule() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Financiamento </Text>
        <ModalPattern
          text={
            "Aqui você consegue simular um financiamento! Para isso, preencha os campos abaixo e clique em 'Simular'"
          }
        />
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
