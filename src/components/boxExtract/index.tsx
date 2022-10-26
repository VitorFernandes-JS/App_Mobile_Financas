import React, { useState } from "react";
import { Modal, SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
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
  // isActiveButtonDelete: boolean;
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

export function BoxExtract({
  transactionWallet,
  // isActiveButtonDelete,
}: IBoxExtractProps) {
  // console.warn("transactionWallet category", transactionWallet.category);
  const operation = transactionWallet.type === "deposit" ? "+" : "-";
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        {/* {isActiveButtonDelete && ( */}
        <BorderlessButton
          style={styles.closeModalIcon}
          onPress={() => {
            setVisible(true);
          }}
        >
          <AntDesign name="closecircle" color="red" size={22} />
        </BorderlessButton>
        {/* )} */}

        <SafeAreaView>
          <Icon
            name={(icons as any)[transactionWallet.category]}
            style={styles.icon}
          />
        </SafeAreaView>

        <Text style={styles.category}>{transactionWallet.category}</Text>
        <Text style={styles.description}>{transactionWallet.description}</Text>
        <Text
          style={
            transactionWallet.type === "deposit"
              ? styles.valueDeposit
              : styles.valueWitdraw
          }
        >
          {operation} {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(transactionWallet.value)}
        </Text>

        <SafeAreaView style={styles.line} />
      </SafeAreaView>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton style={styles.buttonToExclude} onPress={() => {setVisible(false)}}>
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton style={styles.buttonToCancel} onPress={() => {setVisible(false)}}>
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>
    </SafeAreaView>
  );
}
