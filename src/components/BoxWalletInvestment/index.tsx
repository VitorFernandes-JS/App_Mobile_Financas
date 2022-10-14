import React from "react";
import { SafeAreaView, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from "./styles";

interface IBoxWalletInvestmentProps {
  title: string;
  onPress: () => void;
}

export function BoxWalletInvestment({ title }: IBoxWalletInvestmentProps) {
  return (
    <SafeAreaView>
      <BorderlessButton style={styles.box}>
        <Text style={styles.title}>{title}</Text>
      </BorderlessButton>
    </SafeAreaView>
  );
}
