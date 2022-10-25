import React, { useState } from "react";
import { Modal, SafeAreaView, Text } from "react-native";
import { styles, Icon } from "./styles";

import { BorderlessButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
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
}

export function BoxExtractWalletInvestment({
  transactionWallet,
  isActiveButtonDelete,
}: IBoxExtractProps) 
{
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
