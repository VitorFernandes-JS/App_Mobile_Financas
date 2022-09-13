import {
  SafeAreaView,
  Text,
  TextInput,
  Modal,
} from "react-native";
import React, { ReactNode, useCallback, useState } from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import {
  validateFieldNumericWithCommaAndPeriod,
  validateFieldNumeric,
} from "../../utils/regex";

import { Calcular } from "../../utils/calculatorController";
import { useRoute } from "@react-navigation/native";
import { Baseboard } from "../../components/baseboard";
import { Header } from "../../components/header";
import { ModalPattern } from "../../components/modalPattern";

import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

interface IRouteParams {
  token: string;
}

interface ICalculatorProps {
  route: any;
  children: ReactNode;
}

export function Calculator() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  const [initialValue, setInitialValue] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [timeInput, setTimeInput] = useState(0);
  const [feesInput, setFeesInput] = useState(0);

  // Estados de erro para os campos
  // const [initialValueError, setInitialValueError] = useState(false);
  // const [valueMonthError, setValueMonthError] = useState(false);
  // const [timeInputError, setTimeInputError] = useState(false);
  // const [feesInputError, setFeesInputError] = useState(false);

  // const validate = () => {
  //   if (!validateFieldNumericWithCommaAndPeriod.test(String(initialValue))) {
  //     setInitialValueError(true);
  //     console.warn("Valor inicial válido");
  //   } else {
  //     setInitialValueError(false);
  //     console.warn("Valor inicial inválido");
  //   }

  //   if (!validateFieldNumericWithCommaAndPeriod.test(String(valueMonth))) {
  //     setValueMonthError(true);
  //     console.warn("Valor inicial válido");
  //   } else {
  //     setValueMonthError(false);
  //     console.warn("Valor inicial inválido");
  //   }

  //   if (!validateFieldNumeric.test(String(timeInput))) {
  //     setTimeInputError(true);
  //     console.warn("Valor inicial válido");
  //   } else {
  //     setTimeInputError(false);
  //     console.warn("Valor inicial inválido");
  //   }

  //   if (!validateFieldNumeric.test(String(feesInput))) {
  //     setFeesInputError(true);
  //     console.warn("Valor inicial válido");
  //   } else {
  //     setFeesInputError(false);
  //     console.warn("Valor inicial inválido");
  //   }
  // };

  const [totalValue, setTotalValue] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [totalValueInvested, setTotalValueInvested] = useState(0);
  const [modal, setModal] = useState(false);
  const [yearsOrMounthTime, setYearsOrMounthTime] = useState("Meses");
  const [yearsOrMounthFees, setYearsOrMounthFees] = useState("Mensal");
  const [selectTime, setSelectTime] = useState(false);
  const [selectFees, setSelectFees] = useState(false);
  const [value, setValue] = useState("Meses");
  const [items1, setItems1] = useState([
    { label: "Meses", value: "meses" },
    { label: "Anos", value: "anos" },
  ]);
  const [items2, setItems2] = useState([
    { label: "Mensal", value: "mensal" },
    { label: "Anual", value: "anual" },
  ]);

  const onSelectTimeOpen = useCallback(() => {
    setSelectFees(false);
  }, []);

  const onSelectFeesOpen = useCallback(() => {
    setSelectTime(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Calculadora </Text>
        <ModalPattern
          text={
            "Aqui você consegue calcular enquanto tempo vai se aposentar! Para isso, preencha os campos abaixo e clique em 'Calcular'"
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyInitialValue}>
        <SafeAreaView style={styles.viewInitialValue}>
          <Text style={styles.initialValue}>Valor Inicial</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewInitialValue1}>
          <Text style={styles.initialValue1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputInitialValue}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setInitialValue(Number(text));
            }}
            style={styles.textInputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Valor Mensal</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setValueMonth(Number(text));
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
          <Text style={styles.initialValueMonth}>Tempo</Text>
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
          <Text style={styles.initialValueMonth}>Juros</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>%</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setFeesInput(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={4}
          />
        </SafeAreaView>
      </SafeAreaView>

        <RectButton
          style={styles.button}
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
          
        ><Text style={styles.textButton}>CALCULAR</Text>
        </RectButton>


      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: -130,
        }}
        translation={{
          PLACEHOLDER: "Selecione",
        }}
        tickIconStyle={{
          width: 10,
          height: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.color6,
          width: 100,
          height: 80,
          borderRadius: 10,
          marginLeft: 230,
          borderColor: theme.colors.color5,
          top: 100,
        }}
        textStyle={{
          fontSize: 10,
          fontFamily: theme.fonts.font4_regular,
        }}
        arrowIconStyle={{
          width: 10,
          height: 10,
        }}
        closeIconStyle={{
          width: 15,
          height: 15,
        }}
        open={selectTime}
        onOpen={onSelectTimeOpen}
        value={value}
        items={items1}
        setOpen={setSelectTime}
        setValue={setValue}
        setItems={setItems1}
      />

      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: -85,
        }}
        translation={{
          PLACEHOLDER: "Selecione",
        }}
        tickIconStyle={{
          width: 10,
          height: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.color6,
          width: 100,
          height: 80,
          borderRadius: 10,
          marginLeft: 230,
          borderColor: theme.colors.color5,
        }}
        textStyle={{
          fontSize: 10,
          fontFamily: theme.fonts.font4_regular,
        }}
        arrowIconStyle={{
          width: 10,
          height: 10,
        }}
        closeIconStyle={{
          width: 15,
          height: 15,
        }}
        open={selectFees}
        onOpen={onSelectFeesOpen}
        value={value}
        items={items2}
        setOpen={setSelectFees}
        setValue={setValue}
        setItems={setItems2}
      />

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
            <RectButton
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
            </RectButton>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
