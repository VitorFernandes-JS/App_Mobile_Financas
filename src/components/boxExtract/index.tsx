import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

interface ITransactionWallet {
  id: string;
  value: number;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IBoxExtractProps {
  transactionWallet: ITransactionWallet
}

export function BoxExtract({ transactionWallet }: IBoxExtractProps) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        <Text style={styles.category}>{transactionWallet.category}</Text>
        <Text style={styles.description}>{transactionWallet.description}</Text>
        <Text style={styles.value}>{transactionWallet.value}</Text>
        <SafeAreaView style={styles.line}/>
      </SafeAreaView>
    </SafeAreaView>
  );
}
