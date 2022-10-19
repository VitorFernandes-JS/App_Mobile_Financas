import React, { useState, Dispatch, SetStateAction } from "react";
import { SafeAreaView, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { ModalWallet } from "../modalWallet";
import { TextFieldWalletInvestment } from "../TextFieldWalletInvestment";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface ITransactionsWallets {
  id: string;
  value: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IAddProps {
  setTransactionsWallets: Dispatch<SetStateAction<ITransactionsWallets[]>>;
}

export function AddWalletInvestment({ setTransactionsWallets }: IAddProps) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

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
            onPress={() => {
              setTransactionsWallets((prevState) => {
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

      <RectButton
        onPress={() => {
          setVisible(true);
        }}
      >
        <SafeAreaView style={styles.body}>
          <Ionicons name="add" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
