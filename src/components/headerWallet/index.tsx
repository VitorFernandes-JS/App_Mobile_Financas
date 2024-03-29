import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import TrocaImg from "../../assets/troca.png";

import { ModalWallet } from "../../components/modalWallet";
interface IHeaderWallet {
  text: string;
  value: number;
  token: string;
  img: any;
  textModal: string;
}

export function HeaderWallet({ text, value, token, img, textModal }: IHeaderWallet) {
  const navigation = useNavigation();

  function handleWalletInvestment() {
    navigation.navigate("WalletInvestment", { token });
  }

  let date = new Date();
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.viewTitle_Modal}>
          <Text style={styles.title}>{text}</Text>
          <ModalWallet text={textModal} />
        </SafeAreaView>
        <Text style={styles.value}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(value)}</Text>
        <Text style={styles.data}>{date.toLocaleDateString()}</Text>
        <Image source={img} style={styles.walletImg}></Image>
        <BorderlessButton onPress={handleWalletInvestment} style={styles.trocaImg1}>
          <Image source={TrocaImg} style={styles.trocaImg}></Image>
        </BorderlessButton>
      </SafeAreaView>
    </SafeAreaView>
  );
}
