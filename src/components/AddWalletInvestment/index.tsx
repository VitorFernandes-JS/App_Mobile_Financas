import React, { useState, Dispatch, SetStateAction } from "react";
import { SafeAreaView, Modal, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";

import { ModalWallet } from "../modalWallet";
import { TextFieldWalletInvestment } from "../TextFieldWalletInvestment";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { apiFinances } from "../../services";

interface ITransactionsWalletsInvestment {
  id: string;
  value: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IAddProps {
  setTransactionsWalletsInvestment: Dispatch<SetStateAction<ITransactionsWalletsInvestment[]>>;
  investmentId: string;
}

export function AddWalletInvestment({ setTransactionsWalletsInvestment, investmentId }: IAddProps) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateTransactionInvestment() {

    await apiFinances.post('/transactions_investments/investment/' + investmentId, {
      value: Number(value),
      description: description,
      category: "salário",
      type: "deposit"
    }).catch((err) => console.log(err.response))
    setTransactionsWalletsInvestment((prevState) => {
      return [
        ...prevState,
        {
          id: `'${(new Date(), Math.random() * 100)}'`,
          value: Number(value),
          description,
        },
      ];
    });
    setVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <TextFieldWalletInvestment
            setValue={setValue}
            setDescription={setDescription}
          />

          <SafeAreaView style={styles.line}></SafeAreaView>
          <BorderlessButton
            style={styles.closeModalIcon}
            onPress={() => {
              setVisible(false);
            }}
          >
            <AntDesign
              name="closecircle"
              color="red"
              size={22}
            />
          </BorderlessButton>

          <TouchableOpacity
            onPress={async () => {
              await handleCreateTransactionInvestment()
            }}
          >
            <SafeAreaView style={styles.viewButtonAdd}>
              <SafeAreaView style={styles.buttonAdd}>
                <Text style={styles.textAdd}>Adicionar</Text>
              </SafeAreaView>
            </SafeAreaView>
          </TouchableOpacity>

          <SafeAreaView style={styles.viewInterrogation}>
            <ModalWallet text="Digite as informações para um investimento na sua meta!" />
          </SafeAreaView>
        </SafeAreaView>
      </Modal>

      <BorderlessButton
        onPress={() => {
          if (!investmentId) {
            Alert.alert("Termine o cadastro da sua meta, para adicionar um investimento!");
            setVisible(false);
            return;
          }
          setVisible(true);
        }}
      >
        <SafeAreaView style={styles.body}>
          <Ionicons name="add" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </BorderlessButton>
    </SafeAreaView>
  );
}
