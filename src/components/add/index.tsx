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

  const [open, setOpen] = useState(false);
  const [value1, setValue1] = useState("Salário");
  const [items1, setItems1] = useState([
    { label: "Salário", value: "salario" },
    { label: "Bonificação", value: "bonificacao" },
    { label: "Restaurante", value: "restaurante" },
    { label: "Viagem", value: "Viagem" },
    { label: "Passeio", value: "Passeio" },
    { label: "Farmácia", value: "farmacia" },
    { label: "Mercado", value: "mercado" },
    { label: "Outros", value: "outros" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <TextField 
            setValue={setValue} 
            setCategory={setCategory} 
            setDescription={setDescription} 
          />

          <DropDownPicker
              style={{
                borderColor: theme.colors.color5,
                width: 30,
                marginLeft: 200,
                backgroundColor: theme.colors.color5,
                borderRadius: 20,
                top: -60,
              }}
              translation={{
                PLACEHOLDER: "Selecione",
              }}
              tickIconStyle={{
                width: 10,
                height: 10,
              }}
              dropDownContainerStyle={{
                backgroundColor: theme.colors.color6,
                width: 80,
                height: 400,
                marginLeft: 200,
                borderColor: theme.colors.color5,
                top: -21,
              }}
              textStyle={{
                fontSize: 10,
                fontFamily: theme.fonts.font4_regular,
              }}
              arrowIconStyle={{
                width: 10,
                height: 10,
                marginLeft: -10,
              }}
              closeIconStyle={{
                width: 15,
                height: 15,
              }}
              open={open}
              value={value1}
              items={items1}
              setOpen={setOpen}
              setValue={setValue1}
              setItems={setItems1}
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
