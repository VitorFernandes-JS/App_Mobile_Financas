import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import FixedIncomeImg from "../../assets/renda_fixa.png";
import ActionsImg from "../../assets/ações.png";
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

  function handleCalculator() {
    navigation.navigate("Calculator", { token });
  }

  function handleComparator() {
    navigation.navigate("Comparator", { token });
  }

  function handleIndexes() {
    navigation.navigate("Indexes", { token });
  }

  function handleVideos() {
    navigation.navigate("Videos", { token });
  }

  function handleFinancing() {
    navigation.navigate("Financing", { token });
  }

  function handleLoan() {
    navigation.navigate("Loan", { token })
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton
        onPress={handleCalculator}
        style={viewButtonStyles({ left: 130, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={FixedIncomeImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>CALCULADORA</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleIndexes}
        style={viewButtonStyles({ left: 150, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={ActionsImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>ÍNDICES</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleFinancing}
        style={viewButtonStyles({ left: 170, top: -150 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CondominiumImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>FINANCIAR</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleComparator}
        style={viewButtonStyles({ left: -170, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={MobileAppImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>COMPARADOR</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleVideos}
        style={viewButtonStyles({ left: -150, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CriptoImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>VÍDEOS</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleLoan}
        style={viewButtonStyles({ left: -130, top: -30 }).button}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={MoneyChartImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>EMPRÉSTIMO</Text>
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
