import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { TextInputMask, TextMask } from "react-native-masked-text";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";

export function Calculator() {
  const navigation = useNavigation();

  const [initialValue, setInitialValue] = useState("");

  const [valueMonth, setValueMonth] = useState("");

  const [timeInput, setTimeInput] = useState(0);

  const [feesInput, setFeesInput] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const [totalInvested, setTotalInvested] = useState(0);

  let NoCipherInitialValue = (initialValue);
  let NoCipherValueMonth = (valueMonth);

  // function handleWithPoint(word: string | any) {
  //   let newWord = word.replace("R$", "");
  //   if (newWord.length >= 4) {
  //     let separateWordFromPoint = newWord.split(".") as string[];
  //     let money = separateWordFromPoint
  //       .filter((item) => {
  //         return (
  //           item !== separateWordFromPoint[separateWordFromPoint.length - 1]
  //         );
  //       })
  //       .join("");
  //     let moneyCents = Array(
  //       separateWordFromPoint[separateWordFromPoint.length - 1]
  //     );
  //     return Number([money, moneyCents].join("."));
  //   }
  // }

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
          <Avatar urlImage="https://github.com/Vitor-php.png" />
          <BackButton onPress={handleHome} />
        </View>

        <Text style={styles.title}>CALCULADORA</Text>

        <View style={styles.viewInitialValue}>
          <Text style={styles.InitialValue}>
            VALOR {"\n"}
            INICIAL
          </Text>
          <TextInput
            keyboardType={'numeric'}
            onChangeText={(text) => {
              setInitialValue(text);
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
            value={valueMonth}
            onChangeText={(text) => {
              setValueMonth(text);
            }}
            style={styles.inputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
          />
        </View>

        <View style={styles.viewInitialValue}>
          <Text style={styles.timeText}>TEMPO</Text>
          <TextInputMask
            type={"only-numbers"}
            value={timeInput}
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
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
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
            keyboardType={'numeric'}
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
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
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
          onPress={() => {
            //Calculo Total
            let i = 1;
            let juros = 0;
            let total = 0;
            while (i <= Number(timeInput)) {
              if (i === 1) {
                if (NoCipherInitialValue) {
                  juros =
                    Number(Number(total) + Number(NoCipherInitialValue)) * (Number(feesInput) / 100);
                  i++;
                  total = Number(Number(total) + Number(NoCipherInitialValue) + Number(juros));
                }
              } else {
                if (NoCipherValueMonth) {
                  juros =
                    Number(Number(total) + Number(NoCipherValueMonth)) * (Number(feesInput) / 100);
                  total = Number(Number(total) + Number(NoCipherValueMonth) + Number(juros));
                  i++;

                  //Valor Investido
                  let totalValorInvestido = 0;
                  while (i <= Number(timeInput)) {
                    if (i === 1) {
                      if (NoCipherInitialValue) {
                        juros =
                          Number(Number(total) + Number(NoCipherInitialValue)) * (Number(feesInput) / 100);
                        i++;
                        total = Number(Number(total) + Number(NoCipherInitialValue) + Number(juros));
                      }
                    }
                  }
                  setTotalInvested(totalValorInvestido = total)
                }
              }
            }
            if (NoCipherValueMonth) {
              setTotalValue(
                Number((Number(total) + Number(NoCipherValueMonth)))
              );
              // console.warn(NoCipherInitialValue, NoCipherValueMonth, feesInput, timeInput)
            }
          }}
        >
          <Text style={styles.textCalculate}>CALCULAR</Text>
        </TouchableOpacity>

        <View style={styles.line}></View>
        <Text style={styles.total}>TOTAL:</Text>

        <View style={styles.box}>
          <Text style={styles.textBox}>Total de Juros: R$ {NoCipherInitialValue}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textBox}>Valor Investido: R$ {totalInvested}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textBox}>Valor Total: R$ {totalValue}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
