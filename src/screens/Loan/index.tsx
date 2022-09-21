import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

interface IRouteParams {
  token: string;
}

export function Loan() {
  const navigation = useNavigation();

  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Empréstimo </Text>
        <ModalPattern text={"Aqui você pode simular um empréstimo"} />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Valor Total</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setValueMonth(text);
            }}
            style={styles.textInputValueMonth}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Taxa de Juros</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>T</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setTimeInput(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth2}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Parcelas</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>%</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputValueMonth}
            placeholder="Selic"
            placeholderTextColor={"#808080"}
            maxLength={4}
          />
        </SafeAreaView>
      </SafeAreaView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>SIMULAR</Text>
      </TouchableOpacity>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
