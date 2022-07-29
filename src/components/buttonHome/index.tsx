import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { CalculatorImg } from "../../assets/icon_calculadora.png"

interface IButtonHomeProps {
  token: string;
  img: any;
}

export function ButtonHome({ token, img , ...rest }: IButtonHomeProps) {
  const navigation = useNavigation();

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }
  return (
    <SafeAreaView style={styles.container}>
      <RectButton onPress={CalculatorRote} style={viewButtonStyles({ left: -60, top: -80}).button} {...rest}>
        <SafeAreaView>
        <Image source={CalculatorImg}></Image>
        </SafeAreaView>
      </RectButton>
      <RectButton style={viewButtonStyles({ left: 60, top: -179.5}).button} {...rest}>
      </RectButton>
      
    </SafeAreaView>
  );
}
