import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";


interface ITextFieldProps {
  setValue: (arg1: any) => void;
  setDescription: (arg3: any) => void;
}

export function TextFieldWalletInvestment({ setValue, setDescription }: ITextFieldProps) {
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
            keyboardType="numeric"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => {
              setValue(text);
            }}
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
            placeholder="Investimento em FII"
            placeholderTextColor={"#808080"}
            onChangeText={(text) => {
              setDescription(text);
            }}
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
