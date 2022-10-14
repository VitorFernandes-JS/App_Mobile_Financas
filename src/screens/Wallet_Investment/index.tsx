import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import WalletInvestmentImg from "../../assets/grafico-de-pizza.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxWalletInvestment } from "../../components/BoxWalletInvestment";

import { useRoute } from "@react-navigation/native";
interface IRouteParams {
  token: string;
}

interface ITransactionsWallets {
  id: string;
  value: number;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export function WalletInvestment() {
  const [transactionsWallets, setTransactionsWallets] = useState<
    ITransactionsWallets[]
  >([]);

  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWallet
        text="Carteira "
        value="50.000,00"
        token={token}
        img={WalletInvestmentImg}
        textModal="Aqui você pode adicionar um investimento em cada meta, e acompanhar o seu progresso!"
      />
      <SafeAreaView style={styles.boxsWallet}>
        <BoxWalletInvestment title={"Meta 1"} onPress={() => {}} />
        <BoxWalletInvestment title={"Meta 2"} onPress={() => {}} />
        <BoxWalletInvestment title={"Meta 3"} onPress={() => {}} />
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
