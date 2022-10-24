import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import FixedIncomeImg from "../../assets/renda_fixa.png";
import ActionsImg from "../../assets/acoes.png";
import CondominiumImg from "../../assets/condominio.png";
import MobileAppImg from "../../assets/aplicativo_movel.png";
import CriptoImg from "../../assets/cripto.png";
import MoneyChartImg from "../../assets/grafico_dinheiro.png";

interface IRouteParams {
  token: string;
}

export function BoxVideos() {
  const navigation = useNavigation();

  const route = useRoute();

  const { token } = route.params as IRouteParams;

  function handleFixedIncome() {
    navigation.navigate("CategoryVideos", { token, navigation: 'FixedIncome', category: 'Renda Fixa' });
  }

  function handleActions() {
    navigation.navigate("CategoryVideos", { token, navigation: 'Actions', category: 'Ações' });
  }

  function handleFIIS() {
    navigation.navigate("CategoryVideos", { token, navigation: 'FIIS', category: 'FIIS' });
  }

  function handleMobileApp() {
    navigation.navigate("CategoryVideos", { token, navigation: 'MobileApp', category: 'Aplicativo' });
  }

  function handleCripto() {
    navigation.navigate("CategoryVideos", { token, navigation: 'Cripto', category: 'Criptomoeda' });
  }

  function handleEconomy() {
    navigation.navigate("CategoryVideos", { token, navigation: 'Economy', category: 'Economia' });
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton
        onPress={handleFixedIncome}
        style={viewButtonStyles({ left: 130, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={FixedIncomeImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>RENDA FIXA</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleActions}
        style={viewButtonStyles({ left: 150, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={ActionsImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>AÇÕES</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleFIIS}
        style={viewButtonStyles({ left: 170, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CondominiumImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>FIIS</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleMobileApp}
        style={viewButtonStyles({ left: -170, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={MobileAppImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>APLICATIVO</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleCripto}
        style={viewButtonStyles({ left: -150, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CriptoImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>CRIPTOS</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleEconomy}
        style={viewButtonStyles({ left: -130, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={MoneyChartImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>ECONOMIA</Text>
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
