import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import CalculatorImg from "../../assets/icon_calculadora.png";
import ComparatorImg from "../../assets/icon_comparar.png";
import IndecesImg from "../../assets/icon_indeces.png";
import VideosImg from "../../assets/icon_videos.png";
import FinanceImg from "../../assets/icon_financiar.png";
import LoanImg from "../../assets/icon_emprestimo.png";

interface IButtonHomeProps {
  token: string;
}

export function ButtonHome({ token, ...rest }: IButtonHomeProps) {
  const navigation = useNavigation();

  function handleCalculator() {
    navigation.navigate("Calculator", { token });
  }

  function handleComparator() {
    navigation.navigate("Comparator", { token });
  }

  function handleNews() {
    navigation.navigate("News", { token });
  }

  function handleVideos() {
    navigation.navigate("Videos", { token });
  }

  function handleLoan() {
    navigation.navigate("Loan", { token });
  }

  function handleHome_Finance() {
    navigation.navigate("Home_Finance", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton
        onPress={handleCalculator}
        style={viewButtonStyles({ left: -60, top: 130 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CalculatorImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>CALCULADORA</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleNews}
        style={viewButtonStyles({ left: -60, top: 150 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={IndecesImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>NOTÍCIAS</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleHome_Finance}
        style={viewButtonStyles({ left: -60, top: 170 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={FinanceImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>FINANCIAR</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleComparator}
        style={viewButtonStyles({ left: 60, top: -170 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={ComparatorImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>COMPARADOR</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleVideos}
        style={viewButtonStyles({ left: 60, top: -150 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={VideosImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>VÍDEOS</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        onPress={handleLoan}
        style={viewButtonStyles({ left: 60, top: -130 }).button}
        {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={LoanImg} style={styles.iconCalculator} />
          <Text style={styles.textCalculator}>EMPRÉSTIMO</Text>
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
