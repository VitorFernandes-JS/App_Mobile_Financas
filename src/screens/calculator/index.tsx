import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";

export function Calculator() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home");
  }

  // componente que fecha o teclado numérico
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  // Opções dos select
  const time = ["Meses", "Anos"];
  const fees = ["Mensal", "Anual"];

  return (
    <DismissKeyboard>
    <View style={styles.container} >
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
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR{"\n"}
          MENSAL
        </Text>
        <TextInput
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.timeText}>TEMPO</Text>
        <TextInput
          style={styles.inputTime}
          placeholder="1"
          keyboardType="numeric"
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
          style={styles.inputFees}
          placeholder="1"
          keyboardType="numeric"
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

      <View style={styles.line}></View>
      <Text style={styles.total}>TOTAL:</Text>

      <View style={styles.box}>
        <Text style={styles.textBox}>Total de Juros:</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textBox}>Valor Investido:</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
    </View>
    </DismissKeyboard>
  );
}

