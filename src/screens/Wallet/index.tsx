import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import WalletImg from "../../assets/wallet.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxExtract } from "../../components/boxExtract";
import { Trash } from "../../components/trash";

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
        <SafeAreaView style={styles.line} />
        <Text style={styles.textLeft}>Saída:</Text>
        <Text style={styles.valueLeft}>R$ 10.000,00</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <Trash />
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <BoxExtract />
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
