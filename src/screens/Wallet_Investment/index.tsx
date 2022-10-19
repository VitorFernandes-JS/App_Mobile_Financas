import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text } from "react-native";
import { styles } from "./styles";

import WalletInvestmentImg from "../../assets/grafico-de-pizza.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxWalletInvestment } from "../../components/BoxWalletInvestment";
import { Wallet_InvestmentModal } from "./Wallet_InvestmentModal";
import { AddWalletInvestment } from "../../components/AddWalletInvestment";
import { theme } from "../../global/styles/theme";
import { BoxExtractWalletInvestment } from "../../components/BoxExtractWalletInvestment";
import { Trash } from "../../components/trash";

import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
interface IRouteParams {
  token: string;
}

interface ITransactionsWallets {
  id: string;
  value: number;
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

  const goals = [];

  const investments = [
    {
      id: "12",
      value: 321321,
      dayOfInvestment: new Date(),
      meta_id: "213123",
      priority: "Alta",
    },
  ];

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
      <SafeAreaView style={styles.boxsWallet1}>
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
      </SafeAreaView>
      <SafeAreaView style={styles.boxsWallet2}>
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
      </SafeAreaView>
      <SafeAreaView style={styles.boxsWallet3}>
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

      <SafeAreaView style={styles.boxGrafic}>

        <BorderlessButton style={styles.buttonInformation}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={theme.colors.color4}
          />
        </BorderlessButton>

        <SafeAreaView style={styles.viewSquareAndText}>
          <SafeAreaView style={styles.squareGoal} />
          <Text style={styles.textTargetPercentage}>% meta do mês</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewAddAndTrash}>
          <SafeAreaView style={styles.add}>
            <AddWalletInvestment
              setTransactionsWalletsInvestment={setTransactionsWallets}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.trash}>
            <Trash onPress={() => {}} />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.viewScroll}>
        <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <SafeAreaView>
          {transactionsWallets.map((transactionWallet) => (
            <BoxExtractWalletInvestment
              key={transactionWallet.id}
              transactionWallet={transactionWallet}
            />
          ))}
        </SafeAreaView>
      </ScrollView>
      </SafeAreaView>

      </SafeAreaView>

      <Baseboard token={token} />
      <Wallet_InvestmentModal isVisible={visible} setIsVisible={setVisible} />
    </SafeAreaView>
  );
}
