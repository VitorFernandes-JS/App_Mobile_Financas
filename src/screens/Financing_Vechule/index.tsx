import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import carro from "../../assets/carro.png";

import { useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
interface IRouteParams {
  token: string;
}

export function Financing_Vechule() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Financiamento </Text>
        <ModalPattern
          text={
            "Aqui você consegue simular um financiamento! Para isso, preencha os campos abaixo e clique em 'Simular'"
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyResidentialValue}>
        <SafeAreaView style={styles.viewResidentialValue}>
          <Text style={styles.residentialValue}>Valor do Veículo</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewResidentialValue1}>
          <Text style={styles.residentialValue1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputInitialValue}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Renda mensal</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputValueMonth}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueTime}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Tempo</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>T</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueFees}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Juros</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>%</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={4}
          />
        </SafeAreaView>
      </SafeAreaView>

      <RectButton
        style={styles.button}
      // onPress={() => {
      //   Financing_Residential({
      //     setModal,
      //   });
      // }}
      >
        <Text style={styles.textButton}>CALCULAR</Text>
      </RectButton>
      <Image source={carro} style={styles.image} />
      <Baseboard token={token} />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
