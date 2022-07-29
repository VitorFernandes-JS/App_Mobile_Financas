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
  route: any;
}

export function ButtonHome({ route }: IButtonHomeProps) {
  const navigation = useNavigation();
  const { token } = route.params;

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }


    <SafeAreaView>
        <Button title="teste" onPress={CalculatorRote}>
        <Text>teste</Text>
        </Button>
    </SafeAreaView>
}