import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import { styles } from "./styles";

import WalletInvestmentImg from "../../assets/grafico-de-pizza.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxWalletInvestment } from "../../components/BoxWalletInvestment";
import { Wallet_InvestmentModal } from "./Wallet_InvestmentModal";

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
  const [visible, setVisible] = useState(false);
  const [transactionsWallets, setTransactionsWallets] = useState<
    ITransactionsWallets[]
  >([]);

  const [whatIsMeta, setWhatIsMeta] = useState(0);

  const goals = [
    {
      id: "1",
      name: "Casa",
      value: 100000,
      valueCurrent: 0,
      percentage: 0,
    },
    {
      id: "1",
      name: "Casa",
      value: 100000,
      valueCurrent: 0,
      percentage: 0,
    },
    {
      id: "1",
      name: "Casa",
      value: 100000,
      valueCurrent: 0,
      percentage: 0,
    },
  ];

  const investments = [
    {id: '12', value: 321321, dayOfInvestment: new Date(), meta_id: '213123', priority: 'Alta'},
  ]

  // TODO: Criar um estado referente as transações do investimento, fazer as requisições baseado no id do investimento, sempre fazer uma nova requisição no onPress passando o id e setando o valor novamente do estado

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
        <BoxWalletInvestment
          title={"Meta 1"}
          onPress={() => {
            if (goals.length >= 1) {
              setVisible(true);
            } else {
              Alert.alert("Você não possui metas cadastradas!");
            }
          }}
        />
        <BoxWalletInvestment
          title={"Meta 2"}
          onPress={() => {
            if (goals.length >= 2) {
              setVisible(true);
            } else {
              Alert.alert("Você não possui metas cadastradas!");
            }
          }}
        />
        <BoxWalletInvestment
          title={"Meta 3"}
          onPress={() => {
            if (goals.length === 3) {
              setVisible(true);
            } else {
              Alert.alert("Você não possui metas cadastradas!");
            }
          }}
        />
      </SafeAreaView>
      <Baseboard token={token} />
      <Wallet_InvestmentModal isVisible={visible} setIsVisible={setVisible} />
    </SafeAreaView>
  );
}
