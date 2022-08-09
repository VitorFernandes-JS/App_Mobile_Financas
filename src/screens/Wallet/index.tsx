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
        value="1000,00"
        token={token}
        img={WalletImg}
      />
      <SafeAreaView style={styles.box}>
        <Text style={styles.textEnter}>Entrada</Text>
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
