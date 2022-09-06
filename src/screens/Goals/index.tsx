import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

import TristeImg  from "../../assets/triste.png";

interface IRouteParams {
  token: string;
}

export function Goals() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Metas </Text>
        <ModalPattern
          text={
            "Aqui você encontra as principais funcionalidades do BestFinance."
          }
        />
      </SafeAreaView>

          <SafeAreaView style={styles.body}>
            <Text style={styles.textInBody}>Você ainda não {`\n`}
                tem metas!</Text>
            <Image
            style={styles.image}
            source={TristeImg}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.add}>

          </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
