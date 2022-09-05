import {
  SafeAreaView,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode, useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Calcular } from "../../controls/calculatorController";
import { useRoute } from "@react-navigation/native";
import { Baseboard } from "../../components/baseboard";
import { Header } from "../../components/header";
import { ModalPattern } from "../../components/modalPattern";

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
  const [totalValue, setTotalValue] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [totalValueInvested, setTotalValueInvested] = useState(0);
  const [modal, setModal] = useState(false);
  const [yearsOrMounthTime, setYearsOrMounthTime] = useState("Meses");
  const [yearsOrMounthFees, setYearsOrMounthFees] = useState("Mensal");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Meses");
  const [items1, setItems1] = useState([
    {label: 'Meses', value: 'meses'},
    {label: 'Anos', value: 'anos'}
  ]);
  const [items2, setItems2] = useState([
    {label: 'Mensal', value: 'mensal'},
    {label: 'Anual', value: 'anual'}
  ]);
  const [items1Open, setItems1Open] = useState(false);
  const [items2Open, setItems2Open] = useState(false);

  const onItems1Open = useCallback(() => {
    setItems2Open(false);
  }, []);

  const onItems2Open = useCallback(() => {
    setItems1Open(false);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Calculadora </Text>
        <ModalPattern
          text={"Aqui você consegue calcular enquanto tempo vai se aposentar! Para isso, preencha os campos abaixo e clique em 'Calcular'"}
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

      <TouchableOpacity
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
      >
        <Text style={styles.textButton}>CALCULAR</Text>
      </TouchableOpacity>
      <DropDownPicker
          style={{
            borderColor: theme.colors.color5,
            width: 110,
            marginLeft: 230,
            backgroundColor: theme.colors.color5,
            borderRadius: 20,
            top: -132,
          }}
          translation={{
            PLACEHOLDER: "Selecione"
          }}
          tickIconStyle={{
            width: 10,
            height: 10
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
            fontFamily: theme.fonts.font4_regular
          }}
          arrowIconStyle={{
            width: 10,
            height: 10
          }}
          closeIconStyle={{
            width: 15,
            height: 15
          }}
          open={items1Open}
          onOpen={onItems1Open}
          value={value}
          items={items1}
          setOpen={setOpen}
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
            top: -83,
          }}
          translation={{
            PLACEHOLDER: "Selecione"
          }}
          tickIconStyle={{
            width: 10,
            height: 10
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
            fontFamily: theme.fonts.font4_regular
          }}
          arrowIconStyle={{
            width: 10,
            height: 10
          }}
          closeIconStyle={{
            width: 15,
            height: 15
          }}
          open={open}
          onOpen={onItems2Open}
          value={value}
          items={items2}
          setOpen={setOpen}
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
