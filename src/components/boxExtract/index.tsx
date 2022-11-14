import React, { useState } from "react";
import { Modal, SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { apiFinances } from "../../services";
interface ITransactionWallet {
  id: string;
  value: number;
  type: "deposit" | "withdraw" | string;
  category: string;
  description: string;
  updated_at: Date;
  created_at: Date;
}
export interface IBoxExtractProps {
  transactionWallet: ITransactionWallet;
  isActiveButtonDelete: boolean;
  setTransactionsWallets: (p: any) => any
}

const icons = {
  Compras: "shopping-bag",
  Alimentacao: "coffee",
  Salario: "dollar-sign",
  Viagem: "map-pin",
  Estudos: "book",
  Farmacia: "shopping-cart",
  Outros: "credit-card",
};

export function BoxExtract({
  transactionWallet,
  isActiveButtonDelete,
  setTransactionsWallets
}: IBoxExtractProps) {
  const operation = transactionWallet.type === "deposit" ? "+" : "-";
  const [visible, setVisible] = useState(false);

  function firstLetterUpperCase(string: any) {
    const allLetters = string.split('')
    const firstLetter = allLetters.shift().toUpperCase()
    allLetters.unshift(firstLetter)
    const newString = allLetters.join('')
    return newString
  }

  async function handleDeleteBoxExtract() {
    await apiFinances.delete('/transactions_wallets/' + transactionWallet.id)
    setTransactionsWallets((prevState: any) => {
      return prevState.filter((prevTransactionWallet: any) => transactionWallet.id !== prevTransactionWallet.id)
    })
    setVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        {isActiveButtonDelete && (
          <BorderlessButton
            style={styles.closeModalIcon}
            onPress={() => {
                setVisible(true)
            }}
          >
            <AntDesign name="closecircle" color="red" size={22} />
          </BorderlessButton>
        )}

        <SafeAreaView style={styles.date}>
          <Text style={styles.textDate}>
            {new Date(transactionWallet.created_at).getDate()}
          </Text>
          <Text style={styles.textDateMonth}>
            {firstLetterUpperCase(new Date(transactionWallet.created_at).toLocaleDateString(
              "pt-BR",
              { month: "long" }
            ))}
          </Text>
        </SafeAreaView>

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
          {operation}{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          }).format(transactionWallet.value)}
        </Text>

        <SafeAreaView style={styles.line} />
      </SafeAreaView>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton
            style={styles.buttonToExclude}
            onPress={async () => {
              handleDeleteBoxExtract()
            }}
          >
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton
            style={styles.buttonToCancel}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>
    </SafeAreaView>
  );
}
