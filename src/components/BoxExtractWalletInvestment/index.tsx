import React, { useState } from "react";
import { Modal, SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";

import { BorderlessButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { apiFinances } from "../../services";
interface ITransactionWallet {
  id: string;
  value: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IBoxExtractProps {
  transactionWallet: ITransactionWallet;
  isActiveButtonDelete: boolean;
  setVisibleModal: (param: any) => any
}

export function BoxExtractWalletInvestment({
  transactionWallet,
  isActiveButtonDelete,
  setVisibleModal
}: IBoxExtractProps) {
  const [visible, setVisible] = useState(false);

  async function handleDeleteBoxExtract(walletId: string) {
    await apiFinances.delete('/transactions_investments/' + walletId)
    setVisible(false)
    setVisibleModal(true)
    setVisibleModal(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        {isActiveButtonDelete && (
          <BorderlessButton
            style={styles.closeModalIcon}
            onPress={() => {
              setVisible(true);
            }}
          >
            <AntDesign name="closecircle" color="red" size={22} />
          </BorderlessButton>
        )}

        <SafeAreaView>
          <Icon name="money" style={styles.icon} />
        </SafeAreaView>

        <Text style={styles.category}>Investimento</Text>
        <Text style={styles.description}>{transactionWallet.description}</Text>
        <Text style={styles.value}>R$ {transactionWallet.value}</Text>

        <SafeAreaView style={styles.line} />
      </SafeAreaView>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton style={styles.buttonToExclude} onPress={async () => { await handleDeleteBoxExtract(transactionWallet.id) }}>
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton style={styles.buttonToCancel} onPress={() => { setVisible(false) }}>
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>

    </SafeAreaView>
  );
}
