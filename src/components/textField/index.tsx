import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import DropDownPicker from "react-native-dropdown-picker";

interface ITextFieldProps {
  setValue: (arg1: any) => void;
  setCategory: (arg2: any) => void;
  setDescription: (arg3: any) => void;
  category: string;
}

export function TextField({
  setValue,
  setCategory,
  setDescription,
}: ITextFieldProps) {
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

  useEffect(() => {
    setCategory(value1);
  }, [value1]);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.viewValue}>
        <SafeAreaView style={styles.boxGreen}>
          <Text style={styles.textTitleValue}>Valor</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.boxWhite}>
          <TextInput
            style={styles.textInputValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => {
              setValue(text);
            }}
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.viewValue1}>
        <SafeAreaView style={styles.boxGreen1}>
          <Text style={styles.textTitleValue1}>Categoria</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.boxWhite1}>
          <TextInput
            editable={false}
            style={styles.textInputValue1}
            placeholder={value1}
            placeholderTextColor={"#808080"}
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.viewValue2}>
        <SafeAreaView style={styles.boxGreen2}>
          <Text style={styles.textTitleValue2}>Descrição</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.boxWhite2}>
          <TextInput
            style={styles.textInputValue2}
            placeholder="Empresa"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => {
              setDescription(text);
            }}
          ></TextInput>
        </SafeAreaView>

        <SafeAreaView style={styles.viewDropDownPicker}>
          <DropDownPicker
            style={{
              borderColor: theme.colors.color5,
              width: 30,
              marginLeft: 280,
              backgroundColor: theme.colors.color5,
              borderRadius: 20,
              top: 120,
            }}
            translation={{
              PLACEHOLDER: "Selecione",
            }}
            tickIconStyle={{
              width: 10,
              height: 10,
              marginLeft: 10,
            }}
            dropDownContainerStyle={{
              backgroundColor: theme.colors.color6,
              width: 108,
              height: 400,
              marginLeft: 310,
              borderColor: theme.colors.color5,
              top: 130,
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
            setOpen={setOpen}
            value={value1}
            setValue={setValue1}
            items={items1}
            setItems={setItems1}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
