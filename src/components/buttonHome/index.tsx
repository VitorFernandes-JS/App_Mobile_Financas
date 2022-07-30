import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import CalculatorImg  from "../../assets/icon_calculadora.png";
import ComparatorImg from "../../assets/icon_comparar.png";
import IndecesImg from "../../assets/icon_indeces.png"
import VideosImg from "../../assets/icon_videos.png"
import FinanceImg from "../../assets/icon_financiar.png"
import LoanImg from "../../assets/icon_emprestimo.png"

interface IButtonHomeProps {
  token: string;
}

export function ButtonHome({ token, ...rest }: IButtonHomeProps) {
  const navigation = useNavigation();

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }
  return (
    <SafeAreaView style={styles.container}>

      <RectButton
        onPress={CalculatorRote} style={viewButtonStyles({ left: -60, top: 130 }).button} {...rest}
      >
        <SafeAreaView style={styles.viewCalculator}>
          <Image source={CalculatorImg} style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>CALCULADORA</Text>
        </SafeAreaView>
      </RectButton>

      <RectButton
        style={viewButtonStyles({ left: -60, top: 150 }).button}
        {...rest}
      >
         <SafeAreaView style={styles.viewCalculator}>
          <Image source={IndecesImg} style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>ÍNDICES</Text>
          </SafeAreaView>
      </RectButton>

      <RectButton
        style={viewButtonStyles({ left: -60, top: 170 }).button}
        {...rest}
      >
         <SafeAreaView style={styles.viewCalculator}>
          <Image source={FinanceImg} style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>FINANCIAR</Text>
          </SafeAreaView>
      </RectButton>

      <RectButton
        style={viewButtonStyles({ left: 60, top: -170 }).button}
        {...rest}
      >
         <SafeAreaView style={styles.viewCalculator}>
          <Image source={ComparatorImg} style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>COMPARADOR</Text>
          </SafeAreaView>
      </RectButton>

      <RectButton
        style={viewButtonStyles({ left: 60, top: -150 }).button}
        {...rest}
      >
         <SafeAreaView style={styles.viewCalculator}>
          <Image source={VideosImg} style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>VÍDEOS</Text>
          </SafeAreaView>
      </RectButton>

      <RectButton
        style={viewButtonStyles({ left: 60, top: -130 }).button}
        {...rest}
      >
         <SafeAreaView style={styles.viewCalculator}>
          <Image source={LoanImg } style={styles.iconCalculator}/>
          <Text style={styles.textCalculator}>EMPRÉSTIMO</Text>
          </SafeAreaView>
      </RectButton>

    </SafeAreaView>
  );
}
