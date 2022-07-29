import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles, viewButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

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
      <RectButton style={viewButtonStyles({ left: -60, top: -80}).button} {...rest}>
      </RectButton>
      <RectButton style={viewButtonStyles({ left: 60, top: -179.5}).button} {...rest}>
      </RectButton>
      
    </SafeAreaView>
  );
}
