import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import { BoxCategoryVideos } from "../../components/boxCategoryVideos";
import { allCovers, Cover_Actions } from "../../utils/cover";
import { apiFinances } from "../../services";

interface IVideosProps {
  token: string;
  route: any;
  category: string;
}

interface IVideo {
  id: string;
  category: string;
  url: string;
  images: any
  title: string;
}

type IVideoKey = {
  [key: string]: any[] | undefined;
};

export function CategoryVideos({ token, route }: IVideosProps) {
  const { navigation, category } = route.params
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    async function getVideos() {
      await apiFinances.get('/videos')
        .then(response => {
          const filteredVideos = response.data.filter((video: any) => video.category === category)
          const imagesAndTitles = (allCovers as any)[category][0]
          const videosWithImages = filteredVideos.map((video: Omit<IVideo, 'images'>, index: number) => {
            return {
              ...video,
              images: imagesAndTitles[index].cover,
              title: imagesAndTitles[index].title
            }
          })
          setVideos(videosWithImages)
        })
        .catch((error) => { console.log("METHOD GET VIDEOS ERROR: ", error) })
    }
    getVideos();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>{category} </Text>
        <ModalPattern text={`Aqui você encontra vídeos sobre ${category}!`} />
      </SafeAreaView>

      <SafeAreaView style={styles.viewBoxCategoryVideos}>
        <ScrollView contentContainerStyle={styles.contentScollView}>
          {videos.map((video: IVideo) => (
            <BoxCategoryVideos
              key={video.id}
              video={video}
              token={token}
              text={video.title}
              source={video.images}
            />
          ))}
        </ScrollView>
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
