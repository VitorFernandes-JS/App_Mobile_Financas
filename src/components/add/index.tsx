import React, { useState, Dispatch, SetStateAction } from "react";
import { SafeAreaView, Modal, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

import DropDownPicker from "react-native-dropdown-picker";

import { TextField } from "../textField";
import { ModalWallet } from "../../components/modalWallet";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <TextField 
            setValue={setValue} 
            setCategory={setCategory} 
            setDescription={setDescription} 
          />

          <SafeAreaView style={styles.line}></SafeAreaView>
          <RectButton
            onPress={() => {
              setVisible(false);
            }}
          >
            <AntDesign
              name="closecircle"
              color="red"
              size={22}
              style={styles.closeModalIcon}
            />
          </RectButton>

          <RectButton
            onPress={() => {
              setTransactionsWallets((prevState) => {
                return [...prevState, {id: `'${new Date(), (Math.random() * 100)}'`, value: Number(value), category, description}] 
              })
              setVisible(false);
            }}
          >
            <SafeAreaView style={styles.viewButtonAdd}>
              <SafeAreaView style={styles.buttonAdd}>
                <Text style={styles.textAdd}>Adicionar</Text>
              </SafeAreaView>
            </SafeAreaView>
          </RectButton>

          <SafeAreaView style={styles.viewInterrogation}>
            <ModalWallet text="[escrever aqui]" />
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
