import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import TrocaImg from "../../assets/troca.png";

import { ModalWallet } from "../../components/modalWallet";
interface IHeaderWallet {
  text: string;
  value: string;
  token: string;
  img: any;
}

export function HeaderWallet({ text, value, token, img }: IHeaderWallet) {
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
          <ModalWallet text="Aqui você tem um controle total da sua carteira, basta adicionar um gasto/ganho e começar a simular!" />
        </SafeAreaView>
        <Text style={styles.value}>R$ {value}</Text>
        <Text style={styles.data}>{date.toLocaleDateString()}</Text>
        <Image source={img} style={styles.walletImg}></Image>
        <RectButton onPress={handleWalletInvestment} style={styles.trocaImg1}>
          <Image source={TrocaImg} style={styles.trocaImg}></Image>
        </RectButton>
      </SafeAreaView>
    </SafeAreaView>
  );
}
