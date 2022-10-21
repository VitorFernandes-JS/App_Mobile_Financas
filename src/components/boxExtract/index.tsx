import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";
interface ITransactionWallet {
  id?: string;
  value: number;
  type: "deposit" | "withdraw" | string;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}
export interface IBoxExtractProps {
  transactionWallet: ITransactionWallet;
}

const icons = {
  Salario: "dollar-sign",
  Bonificacao: "dollar-sign",
  Restaurante: "coffee",
  Viagem: "sun",
  Passeio: "map-pin",
  Farmacia: "shopping-bag",
  Mercado: "shopping-cart",
  Outros: "dollar-sign",
};

export function BoxExtract({ transactionWallet }: IBoxExtractProps) {
  // console.warn("transactionWallet category", transactionWallet.category);
  const operation = transactionWallet.type === "deposit" ? "+" : "-";

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        <SafeAreaView>
          <Icon
            name={(icons as any)[transactionWallet.category]}
            style={styles.icon}
          />
        </SafeAreaView>

        <Text style={styles.category}>{transactionWallet.category}</Text>
        <Text style={styles.description}>{transactionWallet.description}</Text>
        <Text 
          style={transactionWallet.type === "deposit" ? styles.valueDeposit : styles.valueWitdraw}
        >
          {operation} R$ {transactionWallet.value}
        </Text>

        <SafeAreaView style={styles.line} />
      </SafeAreaView>
    </SafeAreaView>
  );
}
