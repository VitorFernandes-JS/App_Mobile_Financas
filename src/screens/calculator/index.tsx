import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import { Calcular } from "../../controls/calculatorController";

export function Calculator() {
  const navigation = useNavigation();

  const [initialValue, setInitialValue] = useState(0);

  const [valueMonth, setValueMonth] = useState(0);

  const [timeInput, setTimeInput] = useState(0);

  const [feesInput, setFeesInput] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const [yearsOrMounthTime, setYearsOrMounthTime] = useState('Anos');

  const [yearsOrMounthFees, setYearsOrMounthFees] = useState('Anual');

  function handleHome() {
    navigation.navigate("Home");
  }

  // Opções dos select
  const time = ["Meses", "Anos"];
  const fees = ["Mensal", "Anual"];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar/>
          <BackButton onPress={handleHome} />
        </View>

        <Text style={styles.title}>CALCULADORA</Text>

        <View style={styles.viewInitialValue}>
          <Text style={styles.InitialValue}>
            VALOR {"\n"}
            INICIAL
          </Text>
          <TextInput
            keyboardType={"numeric"}
            onChangeText={(text) => {
              setInitialValue(Number(text));
            }}
            style={styles.inputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
          />
        </View>

        <View style={styles.viewInitialValue}>
          <Text style={styles.InitialValue}>
            VALOR {"\n"}
            MENSAL
          </Text>
          <TextInput
            keyboardType={"numeric"}
            onChangeText={(text) => {
              setValueMonth(Number(text));
            }}
            style={styles.inputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
          />
        </View>

        <View style={styles.viewInitialValue}>
          <Text style={styles.timeText}>TEMPO</Text>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setTimeInput(Number(text));
            }}
            style={styles.inputTime}
            placeholder="1"
            placeholderTextColor={"#808080"}
          />
          <SelectDropdown
            data={time}
            defaultButtonText={"Anos"}
            onSelect={selectedItem => setYearsOrMounthTime(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <View style={styles.viewInitialValue}>
          <Text style={styles.feesText}>JUROS</Text>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
            setFeesInput(Number(text));
            }}
            style={styles.inputFees}
            placeholder="1"
            placeholderTextColor={"#808080"}
          />
          <SelectDropdown
            data={fees}
            defaultButtonText={"Anual"}
            onSelect={selectedItem => setYearsOrMounthFees(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonCalculate}
          onPress={() => {Calcular({feesInput, initialValue, setTotalValue, timeInput, valueMonth})}}
        >
          <Text style={styles.textCalculate}>CALCULAR</Text>
        </TouchableOpacity>

        <View style={styles.line}></View>
        <Text style={styles.total}>TOTAL:</Text>

        <View style={styles.box}>
          <Text style={styles.textBox}>Total de Juros: R$</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textBox}>Valor Investido: R$</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textBox}>
            Valor Total: R${Number(totalValue).toFixed(2)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
