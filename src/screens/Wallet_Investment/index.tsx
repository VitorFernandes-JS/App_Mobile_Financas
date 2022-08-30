import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

import WalletInvestmentImg from "../../assets/grafico-de-pizza.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxExtract } from "../../components/boxExtract";
import { Trash } from "../../components/trash";
import { Add } from "../../components/add";
interface IRouteParams {
  token: string;
}

export function WalletInvestment() {

  const route = useRoute();
  
  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWallet
        text="Carteira "
        value="50.000,00"
        token={token}
        img={WalletInvestmentImg}
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
      <SafeAreaView style={styles.viewAdd}>
        <Add />
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <BoxExtract />
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
