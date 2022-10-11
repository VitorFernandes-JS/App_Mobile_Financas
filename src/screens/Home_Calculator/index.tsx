import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

import CalculatorImg1 from "../../assets/predio-comercial.png";
import CalculatorImg2 from "../../assets/juros_compostos.png";

interface IRouteParams {
  token: string;
}

export function Home_Calculator() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  const navigation = useNavigation();

  function handleCalculator() {
    navigation.navigate("Calculator", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha: </Text>

      <RectButton style={styles.iconCalculator1}>
        <Image source={CalculatorImg1} style={styles.icon} />
        <Text style={styles.textCalculator}>
          Calculadora {`\n`}
          de FIIS
        </Text>
      </RectButton>

      <RectButton style={styles.iconCalculator2} onPress={handleCalculator}>
        <Image source={CalculatorImg2} style={styles.icon} />
        <Text style={styles.textCalculator}>
          Calculadora {`\n`}
          de Juros
        </Text>
      </RectButton>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
