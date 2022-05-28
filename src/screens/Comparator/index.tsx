import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView} from "react-native";
import axios from "axios";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import SelectDropdown from "react-native-select-dropdown";
import AppLoading from "expo-app-loading";
interface ISelicRate {
  data: String;
  valor: String;
}

export function Comparator() {
  const navigation = useNavigation();

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

  if (selicRate.length <= 0) {
    return <AppLoading />;
  }
  
  // Opções dos select
  const time = ["Meses", "Anos"];
  const type = ["Selic", "IPCA", "CDI", "Poupança"];

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
          
        />
      </View>

      <View style={styles.viewInitialValue}>
        <Text style={styles.timeText}>TEMPO</Text>
        <TextInput
          style={styles.inputTime}
          placeholder="1"
          
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
          //value={type['']}
          editable={false}
          style={styles.inputType}
          placeholder="Selic"
          
        />
        <SelectDropdown
          data={type}
          defaultButtonText={"Selic"}
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

      <ScrollView>
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
    </ScrollView>
    </View>
    
  );
}
