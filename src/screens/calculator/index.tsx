import { View, Text, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { TextInputMask } from 'react-native-masked-text'

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";

export function Calculator() {
  const navigation = useNavigation();

  const [initialValue, setInitialValue] = useState('')

  const [valueMonth, setValueMonth] = useState('')

  const [timeInput, setTimeInput] = useState(0)

  const [feesInput, setFeesInput] = useState(0)

  const [totalValue, setTotalValue] = useState(0)

  function handleHome() {
    navigation.navigate("Home");
  }

  // Opções dos select
  const time = ["Meses", "Anos"];
  const fees = ["Mensal", "Anual"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar urlImage="https://github.com/Vitor-php.png" />
        <BackButton onPress={handleHome} />
      </View >

      <Text style={styles.title}>CALCULADORA</Text>

      <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR {"\n"}
          INICIAL
        </Text>
        <TextInput
          // value={initialValue}
          keyboardType={'numeric'}
          onChangeText={text => {setInitialValue(text)}}
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          placeholderTextColor={'#808080'}
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR {"\n"}
          MENSAL
        </Text>
        <TextInput
          keyboardType={'numeric'}
          onChangeText={(text) => {setValueMonth(text)}}
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          placeholderTextColor={'#808080'}
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.timeText}>TEMPO</Text>
        <TextInputMask
          type={'only-numbers'}
          onChangeText={(text) => {setTimeInput(Number(text))}}
          style={styles.inputTime}
          placeholder="1"
          placeholderTextColor={'#808080'}
        />
        <SelectDropdown
          data={time}
          defaultButtonText={'Anos'}
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
        <TextInputMask
          type={'only-numbers'}
          onChangeText={(text) => {setFeesInput(Number(text))}}
          style={styles.inputFees}
          placeholder="1"
          placeholderTextColor={'#808080'}
        />
        <SelectDropdown
          data={fees}
          defaultButtonText={'Anual'}
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
              let i = 1;
              let juros = 0;
              let total = 0;
            while (i <= Number(timeInput)) {
              if (i === 1) {
                juros =
                  (total + Number(initialValue)) *
                  (Number(feesInput) / 100);
                i++;
                total = total + Number(initialValue) + juros;
              } else {
                juros =
                  (total + Number(valueMonth)) * (Number(feesInput) / 100);
                total = total + Number(valueMonth) + juros;
                i++;
              }
            }
            setTotalValue(Number((total + Number(valueMonth))));
            }}
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
        <Text style={styles.textBox}>Valor Total: R${totalValue.toFixed(2)}</Text>
      </View>
    </View>
  );
}

