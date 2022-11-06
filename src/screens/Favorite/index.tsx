import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { apiFinances } from "../../services";
import { WebView } from 'react-native-webview';

interface IRouteParams {
  token: string;
}

interface IFavoriteVideo {
  id: string;
  video: {
    url: string
  };
}

export function Favorite() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  const [favoriteVideos, setFavoriteVideos] = useState<IFavoriteVideo[]>([])

  useEffect(() => {
    apiFinances.get("/favorite_videos/").then(response => {
      const formatedVideos = response?.data?.map((favoriteVideo: IFavoriteVideo) => {
        return {
          id: favoriteVideo.id,
          video: {
            url: favoriteVideo.video.url.split("watch?v=").join('embed/').split("&t=")[0]
          }
        }
      })
      setFavoriteVideos(formatedVideos)
    })
  }, [])

  useEffect(() => {
    console.warn("favoriteVideos: ", favoriteVideos)
  }, [favoriteVideos])

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Favoritos </Text>
        <ModalPattern
          text={
            "Aqui você encontra todos os seus vídeos marcados como favoritos"
          }
        />
      </SafeAreaView>

      {favoriteVideos.map((favoriteVideo) => {
        return (
          <SafeAreaView style={styles.viewBoxVideo}>
            <SafeAreaView>
              <WebView
                source={{ uri: favoriteVideo.video.url }}
                style={styles.video}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
              />
            </SafeAreaView>
          </SafeAreaView>
        )
      })}

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
