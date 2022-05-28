import React, { useEffect, useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import axios from 'axios';
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";

import { Avatar } from '../../components/Avatar';
import { BackButton } from '../../components/BackButton'
import SelectDropdown from "react-native-select-dropdown";
import AppLoading from 'expo-app-loading';
interface ISelicRate {
  data: String;
  valor: String;
}

export function Comparator() { 

  const navigation = useNavigation();
    
  function handleHome() {
   navigation.navigate('Home')
  }

  const [selicRate, setSelicRate] = useState<ISelicRate[]>([])

  useEffect(() => {
      axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json')
          .then((response) => setSelicRate(response.data))
  }, [])

  const latestSelicRate = selicRate[selicRate.length - 1];
  
  if (selicRate.length <= 0) {
    return <AppLoading />;
  }

  const time = ["Meses", "Anos"];
  const type = ["Selic", "IPCA", "CDI", "Poupança"]

  return (
    
    <View style={styles.container}>
    <View style={styles.header}>
      <Avatar urlImage="https://github.com/Vitor-php.png" />
      <BackButton onPress={handleHome} />
    </View>
    <Text style={styles.title}>COMPARADOR</Text>

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
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.timeText}>TIPO</Text>
        <TextInput
          style={styles.inputTime}
          placeholder="Selic"
          keyboardType="numeric"
        />
        <SelectDropdown
          data={type}
          defaultButtonText={'Selic'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

    </View>

  )
}