import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";

import { ModalWallet } from "../../components/modalWallet";
interface IHeaderWallet {
  text: string;
  value: string;
}


export function HeaderWallet({ text, value }: IHeaderWallet) {
  let date = new Date()
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.viewTitle_Modal}>
          <Text style={styles.title}>{text}</Text>
          <ModalWallet text="teste" />
        </SafeAreaView>
          <Text style={styles.value}>R$ {value}</Text>
          <Text style={styles.data}>{(date.toLocaleDateString())}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

