import { View, Text, TextInput, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";

export function Calculator() {
  const navigation = useNavigation();

  let calculating = 0

  const [initialValue, setInitialValue] = useState('')

  const [valueMonth, setValueMonth] = useState('')

  const [timeInput, setTimeInput] = useState('')

  const [feesInput, setFeesInput] = useState('')

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
          onChangeText={(text) => {setInitialValue(text)}}
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
          onChangeText={(text) => {setValueMonth(text)}}
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          placeholderTextColor={'#808080'}
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.timeText}>TEMPO</Text>
        <TextInput
          onChangeText={(text) => {setTimeInput(text)}}
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
        <TextInput
          onChangeText={(text) => {setFeesInput(text)}}
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
              calculating = Number(initialValue) + Number(valueMonth) * Number( 1 + feesInput) ** 2 * Number(timeInput)
              console.warn(calculating)
            }}
          >
            <Text style={styles.textCalculate}>CALCULAR</Text>
          </TouchableOpacity>

      <View style={styles.line}></View>
      <Text style={styles.total}>TOTAL:</Text>

      <View style={styles.box}>
        <Text style={styles.textBox}>Total de Juros: {calculating}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textBox}>Valor Investido: </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
    </View>
  );
}

