import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

import  CalculatorImg1  from "../../assets/predio-comercial.png";
import  CalculatorImg2  from "../../assets/juros_compostos.png";

interface IRouteParams {
    token: string;
  }

export function Home_Calculator() {
    const route = useRoute();
    const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token}/>
        <Text style={styles.title}>Escolha: </Text>

        <RectButton style={styles.iconCalculator1}>
            <Image source={CalculatorImg1} style={styles.icon} />
            <Text style={styles.textCalculator}>
                Calculadora {`\n`}
                de FIIS
            </Text>
        </RectButton>

        <RectButton style={styles.iconCalculator2}>
            <Image source={CalculatorImg2} style={styles.icon}/>
            <Text style={styles.textCalculator}>
                Calculadora {`\n`}
                de Juros
            </Text>
        </RectButton>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}