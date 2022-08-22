import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";

interface ITextFieldProps {
  setValue: (arg1: any) => void;
  setCategory: (arg2: any) => void;
  setDescription: (arg3: any) => void;
}

export function TextField({ setValue, setCategory, setDescription }: ITextFieldProps) {
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
            onChangeText={(text) => { setValue(text) }}
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.viewValue1}>
        <SafeAreaView style={styles.boxGreen1}>
          <Text style={styles.textTitleValue1}>Categoria</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.boxWhite1}>
          <TextInput
            style={styles.textInputValue1}
            placeholder="Salário"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => { setCategory(text) }}
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
            onChangeText={(text) => { setDescription(text) }}
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}