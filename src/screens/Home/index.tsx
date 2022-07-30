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
      <Header />
      <Text style={styles.title}>Menu <ModalPattern/></Text>
      <ButtonHome token={token} />
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
