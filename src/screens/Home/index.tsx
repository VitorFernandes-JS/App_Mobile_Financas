import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ButtonHome } from "../../components/buttonHome";
import { ModalPattern } from "../../components/modalPattern";

interface IHomeProps {
  token: string;
}

export function Home({ token }: IHomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Menu </Text>
        <ModalPattern
          text={
            "Aqui você encontra as principais funcionalidades do BestFinance."
          }
        />
      </SafeAreaView>
      <ButtonHome token={token}/>
      <Baseboard token={token}/>
    </SafeAreaView>
  );
}
