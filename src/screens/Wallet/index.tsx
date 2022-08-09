import React from "react";
import { SafeAreaView, Text } from "react-native";

import WalletImg from "../../assets/wallet.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { styles } from "./styles";

interface IWalletProps {
  token: string;
}

export function Wallet({ token }: IWalletProps) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWallet
        text="Carteira "
        value="100.000,00"
        token={token}
        img={WalletImg}
      />
      <SafeAreaView style={styles.box}>
        <Text style={styles.textEnter}>Entrada:</Text>
        <Text style={styles.valueOpen}>R$ 4.000,00</Text>
        <SafeAreaView style={styles.line}/>
        <Text style={styles.textLeft}>Saída:</Text>
        <Text style={styles.valueLeft}>R$ 10.000,00</Text>
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
