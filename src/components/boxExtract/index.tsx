import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";
interface ITransactionWallet {
  id: string;
  value: number;
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
  Viagem: "airplane",
  Passeio: "map-pin",
  Farmacia: "shopping-bag",
  Mercado: "shopping-cart",
  Outros: "dollar-sign",
}

export function BoxExtract({ transactionWallet }: IBoxExtractProps) {
  // console.warn("transactionWallet category", transactionWallet.category);
  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.box}>

          <SafeAreaView>
            <Icon name={(icons as any)[transactionWallet.category]} style={styles.icon}/>
          </SafeAreaView>
          
          <SafeAreaView style={styles.boxText}>
          <Text style={styles.category}>{transactionWallet.category}</Text>
          <Text style={styles.description}>{transactionWallet.description}</Text>
          </SafeAreaView>

        <Text style={styles.value}>R$ {transactionWallet.value}</Text>

        <SafeAreaView style={styles.line} />
        
      </SafeAreaView>
    </SafeAreaView>
  );
}
