import React from "react";
import { SafeAreaView } from "react-native";

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
      <HeaderWallet text="Carteira " value="1000,00" token={token} img={WalletImg} />
        <SafeAreaView style={styles.box}>
          
        </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
