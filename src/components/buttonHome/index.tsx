import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  Pressable,
  Button,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IButtonHomeProps {
  token: string;
}

export function ButtonHome({ token }: IButtonHomeProps) {
  const navigation = useNavigation();

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }
  return( <SafeAreaView>
    <Button title="teste" onPress={CalculatorRote}>
    <Text>teste</Text>
    </Button>
  </SafeAreaView>
  ); 
}