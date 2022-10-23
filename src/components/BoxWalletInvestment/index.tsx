import React from "react";
import { SafeAreaView, Text } from "react-native";
import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface IBoxWalletInvestmentProps extends BorderlessButtonProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export function BoxWalletInvestment({ title, isSelected, ...rest }: IBoxWalletInvestmentProps) {
  return (
    <SafeAreaView>
      <BorderlessButton style={{ ...styles.box, ...(isSelected === true && styles.selected) }} {...rest}>
        <Text style={styles.title}>{title}</Text>
      </BorderlessButton>
    </SafeAreaView>
  );
}