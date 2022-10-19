import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";
interface ITransactionWallet {
  id: string;
  value: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IBoxExtractProps {
  transactionWallet: ITransactionWallet;
}

export function BoxExtractWalletInvestment({
  transactionWallet,
}: IBoxExtractProps) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        <SafeAreaView>
          <Icon name="money" style={styles.icon} />
        </SafeAreaView>

        <Text style={styles.category}>Investimento</Text>
        <Text style={styles.description}>{transactionWallet.description}</Text>
        <Text style={styles.value}>R$ {transactionWallet.value}</Text>

        <SafeAreaView style={styles.line} />
      </SafeAreaView>
    </SafeAreaView>
  );
}
