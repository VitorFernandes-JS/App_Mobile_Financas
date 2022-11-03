import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import {
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";
import { styles } from "./style";
import moment from "moment";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { Loading } from "../../components/Loading";
import { ModalPattern } from "../../components/modalPattern";

import { useRoute } from "@react-navigation/native";
import { services } from "../../services";
import axios from "axios";
import { theme } from "../../global/styles/theme";

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
  const [newsData, setNewsData] = useState([]);
  const [ipcaRate, setIpcaRate] = useState("");
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([]);

  // API NEWS
  useEffect(() => {
    services("general")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Notícias </Text>
        <ModalPattern
          text={"Aqui você pode ver as principais notícias do mercado"}
        />
      </SafeAreaView>

      {/* <SafeAreaView style={styles.viewSelicAndIpcaAndCdi}>
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
      </SafeAreaView> */}

      

      <NativeBaseProvider>
        <SafeAreaView style={styles.boxGraphics}>
          <ScrollView height={650}>
          {newsData.length > 1 ? (
            <FlatList
              data={newsData}
              renderItem={({ item }) => (
                <SafeAreaView>
                  <SafeAreaView style={styles.newsContainer}>
                    <Image
                      borderRadius={20}
                      top={3}
                      left={3}
                      width={360}
                      height={250}
                      resizeMode={"stretch"}
                      marginBottom={2}
                      source={{
                        uri: item.urlToImage,
                      }}
                    />
                    <Text style={styles.titleNew}>{item.title}</Text>
                    <Text style={styles.date}>
                      {moment(item.publishedAt).format("LLL")}
                    </Text>
                    <Text style={styles.newsDescription}>
                      {item.description}
                    </Text>
                  </SafeAreaView>
                  <Divider my={2} bg="#e0e0e0" />
                </SafeAreaView>
              )}
              keyExtractor={(item) => item.id}
            />
            ) : (
              <SafeAreaView style={styles.spinner}>
                  <Spinner color={theme.colors.color2} />
              </SafeAreaView>
          )}
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
