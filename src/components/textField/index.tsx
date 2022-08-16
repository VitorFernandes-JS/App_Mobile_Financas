import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function TextField() {
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
          ></TextInput>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
