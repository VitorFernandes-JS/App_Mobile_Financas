import { SafeAreaView, Text, TextInput, Button } from "react-native";
import React, { ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { Calcular } from "../../controls/calculatorController";

import { Baseboard } from "../../components/baseboard";
import { Header } from "../../components/header";
import { ModalPattern } from "../../components/modalPattern";

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

  function handleHome() {
    navigation.navigate("Home", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Juros Compostos </Text>
        <ModalPattern
          text={"Aqui você consegue calcular enquanto tempo vai se aposentar!"}
        />
      </SafeAreaView>

      {/* 1 */}

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

      {/* 2 */}

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
              setInitialValue(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      {/* 3 */}

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
              setInitialValue(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
          />
        </SafeAreaView>
      </SafeAreaView>

      {/* 4 */}

      <SafeAreaView style={styles.bodyValueMonth}>
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
              setInitialValue(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={4}
          />
        </SafeAreaView>
      </SafeAreaView>

      <Button title={"Calcular"} onPress={handleHome}></Button>

      {/* <SafeAreaView style={styles.viewInitialValue1}>
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

      <SafeAreaView style={styles.viewInitialValue2}>
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
        
      </SafeAreaView>

      <SafeAreaView style={styles.viewInitialValue3}>
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
      </TouchableOpacity> */}

      {/* <SafeAreaView>
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
      </SafeAreaView> */}
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
