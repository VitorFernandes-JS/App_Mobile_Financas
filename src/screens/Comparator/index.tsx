import React, { ReactNode, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

import SelectDropdown from "react-native-select-dropdown";
import { calcComparator } from "../../controls/comparatorController";
interface ISelicRate {
  data: String;
  valor: String;
}
interface IComparatorProps {
  route: any;
  children: ReactNode;
}
interface IAxiosGet {
  id: string;
  resultados: [
    {
      series: [
        {
          serie: {
            202204: string;
          };
        }
      ];
    }
  ];
}

export function Comparator({ route }: IComparatorProps) {
  const { token } = route.params;

  const navigation = useNavigation();

  const [timeInput, setTimeInput] = useState(0);
  const [ipcaRate, setIpcaRate] = useState(0);
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

  const [valueMonth, setValueMonth] = useState("");
  const [typeSelect, setTypeSelect] = useState("Selic");
  const [yearsOrMounthTime, setYearsOrMounthTime] = useState("Anos");

  const [valueTotalIpca, setValueTotalIpca] = useState(0);
  const [valueTotalSelic, setValueTotalSelic] = useState(0);
  const [valueTotalSavings, setValueTotalSavings] = useState(0);
  const [valueTotalCdi, setValueTotalCdi] = useState(0);
  const [modal, setModal] = useState(false);

  function handleHome() {
    navigation.navigate("Home", { token });
  }

  useEffect(() => {
    
    //API SELIC
    axios
      .get(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json"
      )
      .then((response) => setSelicRate(response.data));

    //API IPCA
    axios
      .get<IAxiosGet[]>(
        "https://servicodados.ibge.gov.br/api/v3/agregados/7060/periodos/202001%7C202204/variaveis/69?localidades=N1[all]&classificacao=315[7169]"
      )
      .then((response) =>
        setIpcaRate(+response.data[0].resultados[0].series[0].serie[202204])
      );
  }, []);

  const latestSelicRate = selicRate[selicRate.length - 1];

  // Opções dos select
  const time = ["Meses", "Anos"];
  const type = ["Selic", "IPCA", "CDI", "Poupança"];

  return (
      <SafeAreaView style={styles.container}>
       <Header token={token}/>
            
        <SafeAreaView style={styles.viewInitialValue}>
          <Text style={styles.InitialValue}>
            VALOR{"\n"}
            MENSAL
          </Text>
          <TextInput
            keyboardType="numbers-and-punctuation"
            value={valueMonth}
            onChangeText={(text) => {
              setValueMonth(text);
            }}
            style={styles.inputInitialValue}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.viewInitialValue}>
          <Text style={styles.timeText}>TEMPO</Text>
          <TextInput
            keyboardType="numbers-and-punctuation"
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
            onSelect={(selectedItem) => {
              setYearsOrMounthTime(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.viewInitialValue}>
          <Text style={styles.typeText}>TIPO</Text>
          <TextInput
            editable={false}
            style={styles.inputType}
            placeholder={typeSelect}
            placeholderTextColor={"#000000"}
          />
          <SelectDropdown
            data={type}
            defaultButtonText={"Selic"}
            onSelect={(selectedItem, index) => {
              setTypeSelect(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </SafeAreaView>

        <TouchableOpacity
          style={styles.buttonCalculate}
          onPress={() =>
            calcComparator({
              ipcaRate,
              selicRate: +latestSelicRate.valor,
              timeInput,
              valueMonth,
              yearsOrMounthTime,
              setValueTotalCdi,
              setValueTotalIpca,
              setValueTotalSavings,
              setValueTotalSelic,
              setModal,
            })
          }
        >
          <Text style={styles.textCalculate}>CALCULAR</Text>
        </TouchableOpacity>

        <SafeAreaView>
          
             
        </SafeAreaView>
        <Baseboard token={token}/>
      </SafeAreaView>
  );
}
