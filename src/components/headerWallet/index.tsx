import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";

import { ModalPattern } from "../../components/modalPattern";
interface IHeaderWallet {
  text: string;
}

export function HeaderWallet({ text }: IHeaderWallet) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.viewTitle_Modal}>
          <Text style={styles.title}>{text}</Text>
          <ModalPattern text="teste" />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
