import React, { useState } from "react";
import { styles } from "./styles";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { RectButton } from "react-native-gesture-handler";

interface IRouteParams {
  token: string;
}

export function Loan() {
  const route = useRoute();
  const [fees, setFees] = useState("");
  const [installments, setInstallments] = useState("");
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const [parcela, setParcela] = useState("");
  const [total, setTotal] = useState("");
  const [totalJuros, setTotalJuros] = useState("");

  const { token } = route.params as IRouteParams;

  let amount = value;
  let interest_rate = fees;
  let months = installments;

  function handleCalculate() {
    const interest = (+amount * (+interest_rate * 0.01)) / +months;
    let payment = (+amount / +months + interest).toFixed(2);
    let total = (+payment * +months).toFixed(2);
    let total_interest = (+total - +amount).toFixed(2);

    setParcela(payment);
    setTotal(total);
    setTotalJuros(total_interest);
    setVisible(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header />

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
              keyboardType={"numeric"}
              onChangeText={(text) => {
                setValue(text);
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
            <Text style={styles.valueMonth1}>%</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputValueMonth}>
            <TextInput
              keyboardType={"numeric"}
              onChangeText={(text) => {
                setFees(text);
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
            <Text style={styles.valueMonth1}>X</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputValueMonth}>
            <TextInput
              keyboardType={"numeric"}
              style={styles.textInputValueMonth}
              placeholder="30"
              onChangeText={(text) => {
                setInstallments(text);
              }}
              placeholderTextColor={"#808080"}
              maxLength={3}
            />
          </SafeAreaView>
        </SafeAreaView>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.textButton}>SIMULAR</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={visible}>
          <SafeAreaView style={styles.viewModal}>
            <Text style={styles.total}>Valores:</Text>
            <SafeAreaView style={styles.line}></SafeAreaView>
            <SafeAreaView style={styles.box1}>
              <Text style={styles.textBox}>
                Valor da parcela:{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 2,
                }).format(+parcela)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box2}>
              <Text style={styles.textBox}>
                Valor total:{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 2,
                }).format(+total)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box3}>
              <Text style={styles.textBox}>
                Valor total de juros:{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 2,
                }).format(+totalJuros)}
              </Text>
            </SafeAreaView>
            <RectButton
              onPress={() => {
                setVisible(false);
              }}
            >
              <Text></Text>
              <AntDesign
                name="closesquare"
                color="red"
                size={25}
                style={styles.closeModalIcon}
              />
            </RectButton>
          </SafeAreaView>
        </Modal>

        <Baseboard token={token} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
