import React, { useState, Dispatch, SetStateAction } from "react";
import { SafeAreaView, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { TextField } from "../textField";
import { ModalWallet } from "../../components/modalWallet";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TransactionTypeButton } from "../TransactionTypeButton";

interface ITransactionsWallets {
  id: string;
  value: number;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IAddProps {
  setTransactionsWallets: Dispatch<SetStateAction<ITransactionsWallets[]>>;
}

export function Add({ setTransactionsWallets }: IAddProps) {
  const [visible, setVisible] = useState(false);
  const [transactionType, setTransactionType] = useState("deposit");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleTransactionTypeSelect(type: "deposit" | "withdraw") {
    setTransactionType(type);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <TextField
            setValue={setValue}
            setCategory={setCategory}
            category={category}
            setDescription={setDescription}
          />

          <SafeAreaView style={styles.viewTransactionTypeButtons}>
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("withdraw")}
              title={"Saída"}
              type={"withdraw"}
              isActive={transactionType === "withdraw"}
            />
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("deposit")}
              title={"Entrada"}
              type={"deposit"}
              isActive={transactionType === "deposit"}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.line}></SafeAreaView>
          <BorderlessButton
            style={styles.closeModalIcon}
            onPress={() => {
              setVisible(false);
            }}
          >
            <AntDesign name="closecircle" color="red" size={22} />
          </BorderlessButton>

          <TouchableOpacity
            onPress={() => {
              setTransactionsWallets((prevState) => {
                return [
                  ...prevState,
                  {
                    id: `'${(new Date(), Math.random() * 100)}'`,
                    value: Number(value),
                    category,
                    description,
                    type: transactionType,
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
            <ModalWallet text="Digite as informações para adicionar um gasto ou um ganho em sua carteira!" />
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
