import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import React, { ReactNode, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

import { AntDesign } from '@expo/vector-icons';
import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import { Calcular } from "../../controls/calculatorController";

interface ICalculatorProps {
  route: any;
  children: ReactNode
}

export function Calculator({ route }: ICalculatorProps) {
  const navigation = useNavigation();

  const { token } = route.params

  const [initialValue, setInitialValue] = useState(0);
  const [valueMonth, setValueMonth] = useState(0);
  const [timeInput, setTimeInput] = useState(0);
  const [feesInput, setFeesInput] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [totalValueInvested, setTotalValueInvested] = useState(0)
  const [modal, setModal] = useState(false)

  const [yearsOrMounthTime, setYearsOrMounthTime] = useState('Meses');
  const [yearsOrMounthFees, setYearsOrMounthFees] = useState('Mensal');

  

  function handleHome() {
    navigation.navigate("Home", { token });
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

        <Text style={styles.title}>Calculadora</Text>

        <View style={styles.viewInitialValue}>
          <Text style={styles.InitialValue}>
            VALOR {"\n"}
            INICIAL
          </Text>
          <TextInput
            keyboardType={'numbers-and-punctuation'}
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
            keyboardType={'numbers-and-punctuation'}
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
            keyboardType={'numbers-and-punctuation'}
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
            keyboardType={'numbers-and-punctuation'}
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
          onPress={() => {Calcular({
              feesInput, 
              initialValue, 
              timeInput, 
              valueMonth, 
              yearsOrMounthFees, 
              yearsOrMounthTime,
              setTotalFees,
              setTotalValue, 
              setTotalValueInvested,
              setModal
            })
          }}
        >
          
          <Text style={styles.textCalculate}>CALCULAR</Text>
        </TouchableOpacity>
        

        <Modal
           animationType="slide"
           transparent={true}
           visible={modal}
        >
        <Text style={styles.total}>TOTAL:</Text>

        <View style={styles.box1}>
          <Text style={styles.textBox}>Total de Juros: R${Number(totalFees).toFixed(2)}</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.textBox}>Valor Investido: R${Number(totalValueInvested).toFixed(2)}</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.textBox}>
            Valor Total: R${Number(totalValue).toFixed(2)}
          </Text>
          <TouchableOpacity
                onPress={() => {
                    setModal(false);
                }}
                >
                <Text></Text>
                <AntDesign
                 name="closecircleo"
                 color='red'
                 size={25}
                 style={styles.closeModalIcon}
                />
            </TouchableOpacity>
        </View>
        </Modal>
      </View>
      </ScrollView>
  );
}
