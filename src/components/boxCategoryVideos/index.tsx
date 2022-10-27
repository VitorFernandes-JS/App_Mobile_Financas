import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

interface IBoxCategoryVideos extends TouchableOpacityProps {
  text: string;
  video: IVideo;
  source: any;
  token: string;
}
interface IVideo {
  id: string;
  category: string;
  url: string;
  images: any
}

export function BoxCategoryVideos({ text, token, video, source, ...rest }: IBoxCategoryVideos) {
  const navigation = useNavigation();

  const formatedVideo = {
    ...video,
    url: video.url.split("watch?v=").join('embed/').split("&t=")[0],
  }

  function handleNavigate() {
    navigation.navigate("WatchingVideo", { token, video: formatedVideo });
  }

  return (
    <TouchableOpacity {...rest} onPress={handleNavigate}>
      <SafeAreaView style={styles.body} >
        <Image resizeMode="stretch" borderRadius={(20)} style={styles.img} source={source.cover} />
        <SafeAreaView style={styles.boxText}>
          <Text style={styles.text}>{text}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
