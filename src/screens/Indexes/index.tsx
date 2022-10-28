import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./style";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { Loading } from "../../components/Loading";
import { ModalPattern } from "../../components/modalPattern";

import { useRoute } from "@react-navigation/native";
import axios from "axios";

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
interface IRouteParams {
  token: string;
}

export function Indexes() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  const [ipcaRate, setIpcaRate] = useState("");
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

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
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewSelicAndIpcaAndCdi}>
        <SafeAreaView style={styles.showSelic}>
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

        <SafeAreaView style={styles.showIpca}>
          <Text style={styles.titleIpca}>IPCA</Text>
          <Text style={styles.textIpca}>
            Diário: {(+ipcaRate / 254).toFixed(2)}%
          </Text>
          <Text style={styles.textIpca1}>
            Mensal: {(+ipcaRate / 12).toFixed(2)}%
          </Text>
          <Text style={styles.textIpca2}>Anual: {(+ipcaRate).toFixed(2)}%</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.showCdi}>
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
        <SafeAreaView style={styles.box}></SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.boxGraphics}>
        
      </SafeAreaView>

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Índices </Text>
        <ModalPattern
          text={"Aqui você pode ver os principais índices do mercado"}
        />
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
