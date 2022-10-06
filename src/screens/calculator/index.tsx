// importações nativas
import { SafeAreaView, Text, TextInput, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import React,  { useCallback, useState } from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
// componentes
import { Calcular } from "../../utils/calculatorController";
import { Baseboard } from "../../components/baseboard";
import { Header } from "../../components/header";
import { ModalPattern } from "../../components/modalPattern";
// libs
import { useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

interface IRouteParams {
  token: string;
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
  const [selectTime, setSelectTime] = useState(false);
  const [selectFees, setSelectFees] = useState(false);
  const [value1, setValue1] = useState("Meses");
  const [value2, setValue2] = useState("Mensal");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Calculadora </Text>
        <ModalPattern
          text={
            "Aqui você consegue calcular enquanto tempo vai se aposentar! Para isso, preencha os campos abaixo e clique em 'Calcular'"
          }
        />
      </SafeAreaView>

      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: 285,
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
          marginLeft: 230,
          borderColor: theme.colors.color5,
          top: 210,
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
        value={value1}
        items={items1}
        setOpen={setSelectTime}
        setValue={setValue1}
        setItems={setItems1}
      />

      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: 340,
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
          top: 265,
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
        value={value2}
        items={items2}
        setOpen={setSelectFees}
        setValue={setValue2}
        setItems={setItems2}
      />

      <SafeAreaView style={styles.bodyInitialValue}>
        <SafeAreaView style={styles.viewInitialValue}>
          <Text style={styles.initialValue}>Valor Inicial</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewInitialValue1}>
          <Text style={styles.initialValue1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputInitialValue}>
          <TextInput
            keyboardType={"numeric"}
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
            keyboardType={"numeric"}
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
            onChangeText={(text) => {
              setTimeInput(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="5"
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
            keyboardType={"numeric"}
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
      >
        <Text style={styles.textButton}>CALCULAR</Text>
      </RectButton>

      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <SafeAreaView style={styles.viewModal}>
            <Text style={styles.total}>Valores:</Text>
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
    </TouchableWithoutFeedback>
  );
}
