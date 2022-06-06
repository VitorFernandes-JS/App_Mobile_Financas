import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity} from "react-native";
import axios from "axios";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text'

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import SelectDropdown from "react-native-select-dropdown";
interface ISelicRate {
  data: String;
  valor: String;
}

export function Comparator() {
  const navigation = useNavigation();

  const [timeInput, setTimeInput] = useState(0)

  const [valueMonth, setValueMonth] = useState('')

  const [typeSelect, setTypeSelect] = useState('')

  function handleHome() {
    navigation.navigate("Home");
  }

  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json"
      )
      .then((response) => setSelicRate(response.data));
  }, []);

  const latestSelicRate = selicRate[selicRate.length - 1];
  
  // Opções dos select
  const time = ["Meses", "Anos"];
  const type = ["Selic", "IPCA", "CDI", "Poupança"];

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar/>
        <BackButton onPress={handleHome} />
      </View>
      <Text style={styles.title}>COMPARADOR</Text>

      <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>
          VALOR{"\n"}
          MENSAL
        </Text>
        <TextInputMask
          type={'money'}
          options={{
            maskType: 'BRL',
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
          }}    
          value={valueMonth}
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
        <Text style={styles.typeText}>TIPO</Text>
        <TextInput
          value={typeSelect}
          editable={false}
          style={styles.inputType}
          placeholder="Selic"
          placeholderTextColor={'#808080'}
        />
        <SelectDropdown
          data={type}
          defaultButtonText={"Selic"}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setTypeSelect(selectedItem)
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
            
          >
            <Text style={styles.textCalculate}>CALCULAR</Text>
          </TouchableOpacity>
      
      <View style={styles.line}></View>

      
      <Text style={styles.total}>TOTAL:</Text>

      <View style={styles.boxAndText}>
        <Text style={styles.textTopBox}>
          Seu dinheiro no TESOURO SELIC, usando esse {"\n"}
          tempo e os aportes mensais, renderia isso:
        </Text>
        <View style={styles.box1}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
      </View>

      <View style={styles.boxAndText}>
        <Text style={styles.textTopBox}>
          Seu dinheiro no TESOURO IPCA, usando esse {"\n"}
          tempo e os aportes mensais, renderia isso:
        </Text>
        <View style={styles.box2}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
      </View>

      <View style={styles.boxAndText}>
        <Text style={styles.textTopBox}>
          Seu dinheiro no CDI, usando esse {"\n"}
          tempo e os aportes mensais, renderia isso:
        </Text>
        <View style={styles.box3}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
      </View>

      <View style={styles.boxAndText}>
        <Text style={styles.textTopBox}>
          Seu dinheiro no POUPANÇA, usando esse {"\n"}
          tempo e os aportes mensais, renderia isso:
        </Text>
        <View style={styles.box4}>
        <Text style={styles.textBox}>Valor Total:</Text>
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
