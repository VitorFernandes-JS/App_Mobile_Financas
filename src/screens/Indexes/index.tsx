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
import { ModalPattern } from "../../components/modalPattern";

import { useRoute } from "@react-navigation/native";
import { services } from "../../services";
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

  // API NEWS
  useEffect(() => {
    services("business")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Notícias </Text>
        <ModalPattern
          text={"Aqui você pode ver as principais notícias do mercado"}
        />
      </SafeAreaView>

      <NativeBaseProvider>
        <SafeAreaView style={styles.boxGraphics}>
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
                        alt="Imagem"
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
        </SafeAreaView>
      </NativeBaseProvider>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
