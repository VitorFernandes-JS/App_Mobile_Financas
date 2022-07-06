import React, { ReactNode, useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Modal1 } from "../../components/Modal1";
import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import AppLoading from "expo-app-loading";
interface ISelicRate {
  data: String;
  valor: String;
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
interface IIndexesProps {
  route: any;
  children: ReactNode;
}

export function Indexes({ route }: IIndexesProps) {
  const { token } = route.params;

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home", { token });
  }

  const [ipcaRate, setIpcaRate] = useState("");
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

  const [modalInterrogation, setModalInterrogation] = useState(false);

  //API SELIC
  useEffect(() => {
    axios
      .get(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json"
      )
      .then((response) => setSelicRate(response.data));
  }, []);
  //API IPCA
  axios
    .get<IAxiosGet[]>(
      "https://servicodados.ibge.gov.br/api/v3/agregados/7060/periodos/202001%7C202204/variaveis/69?localidades=N1[all]&classificacao=315[7169]"
    )
    .then((response) =>
      setIpcaRate(response.data[0].resultados[0].series[0].serie[202204])
    );

  const latestSelicRate = selicRate[selicRate.length - 1];

  if (selicRate.length <= 0) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Avatar />
        <BackButton onPress={handleHome} />
      </SafeAreaView>
      <Text style={styles.title}>Índices</Text>

      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            setModalInterrogation(true);
          }}
        >
          <AntDesign
            name="questioncircleo"
            size={20}
            style={styles.iconInterrogation}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalInterrogation}
      >
        <SafeAreaView style={styles.viewModalInterrogation}>
          <Text style={styles.textModalInterrogation}>
            Aqui estão os principais índices de Renda Fixa e Renda Variável que
            você precisa.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalInterrogation(false);
            }}
          >
            <Text></Text>
            <AntDesign
              name="closecircle"
              color="red"
              size={20}
              style={styles.closeModalInterrogationIcon}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      <SafeAreaView style={styles.viewSelicAndIpca}>
     
          <SafeAreaView>
            <Text style={styles.titleSelic}>TAXA SELIC</Text>
            <Text style={styles.textSelic}>
              Diário: {(+latestSelicRate.valor).toFixed(2)}%
            </Text>
            <Text style={styles.textSelic1}>
              Mensal: {(+latestSelicRate.valor * 30).toFixed(2)}%
            </Text>
            <Text style={styles.textSelic2}>
              Anual: {(+latestSelicRate.valor * 254).toFixed(2)}%
            </Text>
          </SafeAreaView>
       

      
          <SafeAreaView>
            <Text style={styles.titleIpca}>IPCA</Text>
            <Text style={styles.textIpca}>
              Diário: {(+ipcaRate / 254).toFixed(2)}%
            </Text>
            <Text style={styles.textIpca1}>
              Mensal: {(+ipcaRate / 12).toFixed(2)}%
            </Text>
            <Text style={styles.textIpca2}>
              Anual: {(+ipcaRate).toFixed(2)}%
            </Text>
          </SafeAreaView>

        
          <SafeAreaView>
            <Text style={styles.titleCdi}>CDI</Text>
            <Text style={styles.textCdi}>
              Diário:{" "}
              {(+latestSelicRate.valor - +latestSelicRate.valor * 0.01).toFixed(
                2
              )}
              %
            </Text>
            <Text style={styles.textCdi1}>
              Mensal:{" "}
              {(
                (+latestSelicRate.valor - +latestSelicRate.valor * 0.01) *
                30
              ).toFixed(2)}
              %
            </Text>
            <Text style={styles.textCdi2}>
              Anual:{" "}
              {(
                (+latestSelicRate.valor - +latestSelicRate.valor * 0.01) *
                254
              ).toFixed(2)}
              %
            </Text>
          </SafeAreaView>
      </SafeAreaView>
      <Modal1 />
    </SafeAreaView>
  );
}
