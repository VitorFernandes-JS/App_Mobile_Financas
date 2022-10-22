import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { ModalPattern } from "../../../components/modalPattern";
import { theme } from "../../../global/styles/theme";
import { AvatarComments } from "../../../components/AvatarComments";

import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { apiFinances } from "../../../services";

interface IVideo {
  id: string;
  category: string;
  url: string;  
  images: any
}
interface IVideosProps {
  token: string;
  video: IVideo;
}

interface ICommentary {
  id: string;
  description: string;
  video_id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  user: {
    id: string;
    email: string;
    name: string;
    created_at: Date;
    updated_at: Date;
  }
}

export function WatchingVideo() {
  const route = useRoute();
  const { token, video } = route.params as IVideosProps;
  const [commentary, setCommentary] = useState<ICommentary[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    apiFinances.get('/commentarys/video/' + video.id).then(response => {
      setCommentary(response.data)
    })
  }, [])

  useEffect(() => {
    console.warn("commentary", commentary)
  }, [commentary])

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Título </Text>
        <ModalPattern text={"Colocar algo aqui."} />
      </SafeAreaView>

      <SafeAreaView style={styles.viewBoxVideo}></SafeAreaView>

      <SafeAreaView style={styles.viewTitleVideo}>
        <Text style={styles.titleVideo}>Título do vídeo</Text>
      </SafeAreaView>

      <BorderlessButton style={styles.viewIconHeart}>
        <Ionicons
          name="heart-circle-outline"
          size={45}
          color={theme.colors.color2}
        />
      </BorderlessButton>

      <SafeAreaView style={styles.viewBoxComments}>
        <SafeAreaView style={styles.viewAmountOfComments}>
          <Text style={styles.textAmountOfComments}>10</Text>
          <Text style={styles.textAmountOfComments}>Comentários</Text>

          <SafeAreaView style={styles.viewAvatar}>
          <AvatarComments />
          <TextInput
            style={styles.input}
            placeholder="Adicione um comentário..."
            value={text}
            placeholderTextColor={theme.colors.color3}
            onChangeText={(e) => setText(e)}
          >
          </TextInput>

        </SafeAreaView>
          <BorderlessButton style={styles.button} onPress={async () => {
            const commentary = await apiFinances.post('/commentarys/video/' + video.id, {
              description: text,
            })
            setText("")
            setCommentary((prevState) => { return [...prevState, commentary.data]})
          }}/>
        </SafeAreaView>
        {commentary?.map((commentary, index) => {
          let top = index * 50
          return (
            <SafeAreaView style={{ top: 100 + top }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{commentary?.user?.name}</Text>
              <Text>{commentary?.description}</Text>
            </SafeAreaView>
          )
        })}
      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
