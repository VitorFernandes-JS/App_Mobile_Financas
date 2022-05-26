import { View, Text, TextInput} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import axios from "axios";

import AppLoading from "expo-app-loading";
interface ISelicRate {
  data: String;
  valor: String;
}

export function Calculator() {
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

 

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar urlImage="https://github.com/Vitor-php.png" />
          <BackButton onPress={handleHome} />
        </View>

        <Text style={styles.title}>CALCULADORA</Text>
        
        <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>VALOR {'\n'}
        INICIAL</Text>
        <TextInput
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          keyboardType="numeric"
        />

        </View>
        <View style={styles.viewInitialValue}>
        <Text style={styles.InitialValue}>VALOR{'\n'}
        MENSAL</Text>
        <TextInput
          style={styles.inputInitialValue}
          placeholder="R$00,00"
          keyboardType="numeric"
        />
        </View>
        {/*<Text style={styles.textoSelic}>{latestSelicRate.valor}</Text>*/}
        {/* input VALOR INICIAL*/}
        {/* input TEMPO [ANO/MES]*/}
        {/* input VALOR MENSAL*/}
        {/* input */}
      </View>
    );
  };
