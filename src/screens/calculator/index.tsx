import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { Avatar } from "../../components/Avatar";

import { AntDesign } from "@expo/vector-icons";
import { Calcular } from "../../controls/calculatorController";

import { Baseboard } from "../../components/baseboard";
import { Header } from "../../components/header";

interface ICalculatorProps {
  route: any;
  children: ReactNode;
  token: string;
}

export function Calculator({ token }: ICalculatorProps) {
  const navigation = useNavigation();


  const [initialValue, setInitialValue] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [timeInput, setTimeInput] = useState(0);
  const [feesInput, setFeesInput] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [totalValueInvested, setTotalValueInvested] = useState(0);
  const [modal, setModal] = useState(false);

  const [yearsOrMounthTime, setYearsOrMounthTime] = useState("Meses");
  const [yearsOrMounthFees, setYearsOrMounthFees] = useState("Mensal");

  // Opções dos select
  const time = ["Meses", "Anos"];
  const fees = ["Mensal", "Anual"];

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />
      
      <SafeAreaView style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR {"\n"}
          INICIAL
        </Text>
        <TextInput
          keyboardType={"numbers-and-punctuation"}
          onChangeText={(text) => {
            setInitialValue(Number(text));
          }}
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          placeholderTextColor={"#808080"}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR {"\n"}
          MENSAL
        </Text>
        <TextInput
          keyboardType={"numbers-and-punctuation"}
          onChangeText={(text) => {
            setValueMonth(Number(text));
          }}
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          placeholderTextColor={"#808080"}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.viewInitialValue}>
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
          defaultButtonText={"Meses"}
          onSelect={(selectedItem) => setYearsOrMounthTime(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.viewInitialValue}>
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
          defaultButtonText={"Mensal"}
          onSelect={(selectedItem) => setYearsOrMounthFees(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </SafeAreaView>

      <TouchableOpacity
        style={styles.buttonCalculate}
        onPress={() => {
          Calcular({
            feesInput,
            initialValue,
            timeInput,
            valueMonth,
            yearsOrMounthFees,
            yearsOrMounthTime,
            setTotalFees,
            setTotalValue,
            setTotalValueInvested,
            setModal,
          });
        }}
      >
        <Text style={styles.textCalculate}>CALCULAR</Text>
      </TouchableOpacity>

      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <SafeAreaView style={styles.viewModal}>
            <Text style={styles.total}>TOTAL:</Text>
            <SafeAreaView style={styles.line}></SafeAreaView>
            <SafeAreaView style={styles.box1}>
              <Text style={styles.textBox}>
                Total de Juros: R${Number(totalFees).toFixed(2)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box2}>
              <Text style={styles.textBox}>
                Valor Investido: R${Number(totalValueInvested).toFixed(2)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box3}>
              <Text style={styles.textBox}>
                Valor Total: R${Number(totalValue).toFixed(2)}
              </Text>
            </SafeAreaView>
            <TouchableOpacity
              onPress={() => {
                setModal(false);
              }}
            >
              <Text></Text>
              <AntDesign
                name="closesquare"
                color="red"
                size={25}
                style={styles.closeModalIcon}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
