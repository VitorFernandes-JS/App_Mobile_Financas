import React, { useState } from "react";
import { styles } from "./styles";
import { SafeAreaView, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import casa from "../../assets/casa.png";

import { useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
interface IRouteParams {
  token: string;
}

export function Financing_Residential() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  
  const [valueResidential, setValueResidential] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [time, setTime] = useState(0);
  const [fees, setFees] = useState(0);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  function CalculoDeParcela() {
    let amount = valueResidential;
    let income = monthlyIncome;
    let rate = fees;
    let months = time;
    let interest = 0;
    let total = 0;

    interest = (amount * (rate * 0.01))/months;
    total = ((amount/months) + interest);
    console.log(total);

    if( (income / total >= 0) && (income / total <= 3) ) {
      console.log("teste 1");
    } else if( (income / total >= 4) && (income / total <= 7) ) {
      console.log("teste 2");
    } else {
      console.log("teste 3");
    }


  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Financiamento </Text>
        <ModalPattern
          text={
            "Aqui você consegue simular um financiamento residencial! Para isso, preencha os campos abaixo e clique em 'Simular'"
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyResidentialValue}>
        <SafeAreaView style={styles.viewResidentialValue}>
          <Text style={styles.residentialValue}>Valor da Residência</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewResidentialValue1}>
          <Text style={styles.residentialValue1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputInitialValue}>
          <TextInput
            keyboardType={"numeric"}
            style={styles.textInputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
            onChangeText={(text) => {
              const formatedText = Number(text.replace(/,/, '.'))
              setValueResidential(formatedText)
            }}
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
            keyboardType={"numeric"}
            style={styles.textInputValueMonth}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
            onChangeText={(text) => {
              const formatedText = Number(text.replace(/,/, '.'))
              setMonthlyIncome(formatedText)
            }}
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
            keyboardType={"numeric"}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
            onChangeText={(text) => {
              const formatedText = Number(text.replace(/,/, '.'))
              setTime(formatedText)
            }}
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
            keyboardType={"numeric"}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
            onChangeText={(text) => {
              const formatedText = Number(text.replace(/,/, '.'))
              setFees(formatedText)
            }}
          />
        </SafeAreaView>
      </SafeAreaView>

      <RectButton
        style={styles.button}
        onPress={() => {
          CalculoDeParcela();
        }}
      >
        <Text style={styles.textButton}>CALCULAR</Text>
      </RectButton>
          <Image source={casa} style={styles.image} />
      <Baseboard token={token} />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
