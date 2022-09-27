import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

import HomeImg from "../../assets/casa.png";
import CarImg from "../../assets/carro.png";

interface IRouteParams {
  token: string;
}

export function Home_Finance() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  const navigation = useNavigation();

  function handleFinancing_Residential() {
    navigation.navigate("Financing_Residential", { token });
  }

  function handleFinancing_Vechule() {
    navigation.navigate("Financing_Vechule", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>Escolha: </Text>

      <RectButton style={styles.iconCalculator1} onPress={handleFinancing_Residential}>
        <Image source={HomeImg} style={styles.icon} />
        <Text style={styles.textCalculator}>
          Financiamento {`\n`}
          Residencial
        </Text>
      </RectButton>

      <RectButton style={styles.iconCalculator2} onPress={handleFinancing_Vechule}>
        <Image source={CarImg} style={styles.icon} />
        <Text style={styles.textCalculator}>
          Financiamento {`\n`}
          Veicular
        </Text>
      </RectButton>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
