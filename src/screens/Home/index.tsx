import React, { ReactNode, useState, useEffect } from "react";
import { styles } from "./styles";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";

interface IProfileProps {
  route: any;
  children: ReactNode;
}

export function Home({ route }: IProfileProps) {
  const navigation = useNavigation();
  const { token } = route.params;

  function handleHome() {
    navigation.navigate("SignIn", { token });
  }

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }

  function ComparatorRote() {
    navigation.navigate("Comparator", { token });
  }

  function IndexesRote() {
    navigation.navigate("Indexes", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />
    </SafeAreaView>
  );
}
