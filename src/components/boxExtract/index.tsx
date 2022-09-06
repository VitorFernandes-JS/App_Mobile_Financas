import React, { useState } from "react";
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
    <SafeAreaView style={styles.container} key={transactionWallet.id}>
      <SafeAreaView style={styles.box}>
        <Text>{transactionWallet.category}</Text>
        <Text>{transactionWallet.description}</Text>
        <Text>{transactionWallet.value}</Text>
        <SafeAreaView style={styles.line}/>
      </SafeAreaView>
    </SafeAreaView>
  );
}
