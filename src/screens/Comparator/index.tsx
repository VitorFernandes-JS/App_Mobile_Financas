import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { theme } from "../../global/styles/theme";

import { AntDesign } from "@expo/vector-icons";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

import { calcComparator } from "../../utils/comparatorController";
interface ISelicRate {
  data: String;
  valor: String;
}
interface IRouteParams {
  token: string;
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

export function Comparator() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  const [timeInput, setTimeInput] = useState(0);
  const [ipcaRate, setIpcaRate] = useState(0);
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

  const [valueMonth, setValueMonth] = useState("");
  const [yearsOrMounthTime, setYearsOrMounthTime] = useState("Anos");
  
  const [valueTotalIpca, setValueTotalIpca] = useState(0);
  const [valueTotalSelic, setValueTotalSelic] = useState(0);
  const [valueTotalSavings, setValueTotalSavings] = useState(0);
  const [valueTotalCdi, setValueTotalCdi] = useState(0);
  const [modal, setModal] = useState(false);

  const [selectTime, setSelectTime] = useState(false);
  const [selectType, setSelectType] = useState(false);
  
  const [value1, setValue1] = useState("Meses");
  const [value2, setValue2] = useState("Mensal");
  const [items1, setItems1] = useState([
    { label: "Meses", value: "meses" },
    { label: "Anos", value: "anos" },
  ]);
  const [items2, setItems2] = useState([
    { label: "IPCA", value: "ipca" },
    { label: "Selic", value: "selic" },
    { label: "CDI", value: "cdi" },
    { label: "Poupança", value: "poupanca" },
  ]);
  const onSelectTimeOpen = useCallback(() => {
    setSelectType(false);
  }, []);
  
  const onSelectTypeOpen = useCallback(() => {
    setSelectTime(false);
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Comparador </Text>
        <ModalPattern
          text={
            "Aqui você consegue comparar investimentos de renda fixa, para saber qual é a melhor escolha! Para isso, preencha os campos abaixo e clique em 'Comparar'"
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Valor Mensal</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>R$</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setValueMonth(text);
            }}
            style={styles.textInputValueMonth}
            placeholder="R$00,00"
            placeholderTextColor={"#808080"}
            maxLength={20}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Tempo</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>T</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            onChangeText={(text) => {
              setTimeInput(Number(text));
            }}
            style={styles.textInputValueMonth}
            placeholder="10"
            placeholderTextColor={"#808080"}
            maxLength={3}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyValueMonth2}>
        <SafeAreaView style={styles.viewValueMonth}>
          <Text style={styles.initialValueMonth}>Tipo</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewValueMonth1}>
          <Text style={styles.valueMonth1}>%</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.inputValueMonth}>
          <TextInput
            editable={false}
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInputValueMonth}
            placeholder="Selic"
            placeholderTextColor={"#808080"}
            maxLength={4}
          />
        </SafeAreaView>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
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
          });
        }}
      >
        <Text style={styles.textButton}>COMPARAR</Text>
      </TouchableOpacity>

      {/* Select do Tempo */}
      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: -132,
        }}
        translation={{
          PLACEHOLDER: "Selecione",
        }}
        tickIconStyle={{
          width: 10,
          height: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.color6,
          width: 100,
          height: 80,
          borderRadius: 10,
          marginLeft: 230,
          borderColor: theme.colors.color5,
          top: -210,
        }}
        textStyle={{
          fontSize: 10,
          fontFamily: theme.fonts.font4_regular,
        }}
        arrowIconStyle={{
          width: 10,
          height: 10,
        }}
        closeIconStyle={{
          width: 15,
          height: 15,
        }}
        open={selectTime}
        onOpen={onSelectTimeOpen}
        value={value1}
        items={items1}
        setOpen={setSelectTime}
        setValue={setValue1}
        setItems={setItems1}
      />

      {/* Select do Tipo */}
      <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: -82,
        }}
        translation={{
          PLACEHOLDER: "Selecione",
        }}
        tickIconStyle={{
          width: 10,
          height: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.color6,
          width: 100,
          height: 140,
          borderRadius: 10,
          marginLeft: 230,
          borderColor: theme.colors.color5,
          top: -40,
        }}
        textStyle={{
          fontSize: 10,
          fontFamily: theme.fonts.font4_regular,
        }}
        arrowIconStyle={{
          width: 10,
          height: 10,
        }}
        closeIconStyle={{
          width: 15,
          height: 15,
        }}
        open={selectType}
        onOpen={onSelectTypeOpen}
        value={value2}
        items={items2}
        setOpen={setSelectType}
        setValue={setValue2}
        setItems={setItems2}
      />

      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <SafeAreaView style={styles.viewModal}>
            <Text style={styles.total}>TOTAL:</Text>
            <SafeAreaView style={styles.line}></SafeAreaView>
            <SafeAreaView style={styles.box1}>
              <Text style={styles.textBox}>
                Total de Juros: R${Number(valueTotalIpca).toFixed(2)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box2}>
              <Text style={styles.textBox}>
                Valor Investido: R${Number(valueTotalCdi).toFixed(2)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box3}>
              <Text style={styles.textBox}>
                Valor Total: R${Number(valueTotalSavings).toFixed(2)}
              </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.box3}>
              <Text style={styles.textBox}>
                Valor Total: R${Number(valueTotalSelic).toFixed(2)}
              </Text>
            </SafeAreaView>

            <TouchableOpacity
              onPress={() => {
                setModal(false);
              }}
            >
              <Text></Text>
              <AntDesign
                name="closesquare"
                color="red"
                size={25}
                style={styles.closeModalIcon}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>

      {/* <SafeAreaView style={styles.viewInitialValue}>
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
        </TouchableOpacity> */}

      <SafeAreaView></SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
