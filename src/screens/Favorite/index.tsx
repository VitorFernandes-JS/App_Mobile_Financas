import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Modal, SafeAreaView, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { apiFinances } from "../../services";
import { WebView } from 'react-native-webview';
import { BorderlessButton } from "react-native-gesture-handler";
import { Trash } from "../../components/trash";

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

  const [visible, setVisible] = useState(false);
  const [favoriteVideos, setFavoriteVideos] = useState<IFavoriteVideo[]>([])
  const [favoriteVideoId, setFavoriteVideoId] = useState('')


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

  function handleShowModalDeleteFavoriteVideo(videoId: string) {
    setFavoriteVideoId(videoId)
    setVisible(true)
  }

  async function handleDeleteFavorite() {
    await apiFinances.delete('/favorite_videos/' + favoriteVideoId)
    setFavoriteVideos((prevFavoriteVideos) => {
      return prevFavoriteVideos.filter((favoriteVideo) => favoriteVideo.id !== favoriteVideoId)
    })
    setVisible(false)
  }

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


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: 1200 }}
      >
        {favoriteVideos.map((favoriteVideo, key) => {
          return (
            <SafeAreaView style={styles.viewBoxVideo} key={key}>
              <WebView
                source={{ uri: favoriteVideo.video.url }}
                style={styles.video}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
              />
              <BorderlessButton style={styles.trash}>
                <Trash onPress={() => {
                  handleShowModalDeleteFavoriteVideo(favoriteVideo.id);
                }} />
              </BorderlessButton>
            </SafeAreaView>
          )
        })}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton
            style={styles.buttonToExclude}
            onPress={async () => {
              handleDeleteFavorite()
            }}
          >
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton
            style={styles.buttonToCancel}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
