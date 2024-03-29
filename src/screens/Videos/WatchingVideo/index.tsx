import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { ModalPattern } from "../../../components/modalPattern";
import { theme } from "../../../global/styles/theme";
import { AvatarComments } from "../../../components/AvatarComments";
import { apiFinances } from "../../../services";

import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Toast from 'react-native-toast-message';

interface IVideo {
  id: string;
  category: string;
  url: string;
  images: any
  title: string;
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

interface IProfile {
  email: string;
}

export function WatchingVideo() {
  const route = useRoute();
  const { token, video } = route.params as IVideosProps;

  const [profile, setProfile] = useState({} as IProfile)
  const [commentary, setCommentary] = useState<ICommentary[]>([]);
  const [text, setText] = useState<string>("");

  function showToast() {
    Toast.show({
      type: 'success',
      text1: 'Video favoritado com sucesso!',
      text2: 'Disponível na sessão de favoritos.',
      visibilityTime: 4000
    })
  };

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  function handleFavoriteVideo() {
    apiFinances.post('/favorite_videos/video/' + video.id).then(() => {
      showToast()
    }).catch((err) => console.log(err))
  }

  async function handleDeleteCommentary(commentaryId: string) {
    await apiFinances.delete('/commentarys/' + commentaryId)
    setCommentary((prevCommentaries) => {
      return prevCommentaries.filter((commentary) => commentary.id !== commentaryId)
    })
  }

  useEffect(() => {
    apiFinances.get('/commentarys/video/' + video.id).then(response => {
      setCommentary(response.data)
    }).catch((err) => console.log(err))

    loadProfile();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Vídeo </Text>
        <ModalPattern text={"Agora, assista e comente sobre o vídeo que você escolheu!."} />
      </SafeAreaView>

      <SafeAreaView style={styles.viewBoxVideo}>
        <SafeAreaView>
          <WebView
            source={{ uri: video.url }}
            style={styles.video}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
          />
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.viewTitleVideo}>
        <Text style={styles.titleVideo}>{video.title}</Text>
      </SafeAreaView>

      <BorderlessButton style={styles.viewIconHeart} onPress={handleFavoriteVideo}>
        <Ionicons
          name="heart-circle-outline"
          size={45}
          color={theme.colors.color2}
        />
      </BorderlessButton>

      <SafeAreaView style={styles.viewBoxComments}>
        <Text style={styles.textAmountOfComments}>{commentary.length} Comentários</Text>

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
          setCommentary((prevState) => { return [...prevState, commentary.data] })
        }} >
          <Text style={styles.textButton}>OK</Text>
        </BorderlessButton>

        <ScrollView style={styles.scroll}>

          {commentary?.map((commentary, key) => {
            return (
              <SafeAreaView key={key}>

                <SafeAreaView style={styles.iconUser}>
                  <FontAwesome name="user-circle-o" size={24} color={theme.colors.color3} />
                </SafeAreaView>

                <SafeAreaView>
                  <SafeAreaView style={styles.viewDays}>
                    <Text style={styles.text1}>{commentary?.user?.name}</Text>
                    <Text style={styles.textDays}>- Há 1 dia(s)</Text>
                    {commentary.user.email === profile.email ?
                      (
                        <BorderlessButton style={styles.iconDeleteCommentary} onPress={() => handleDeleteCommentary(commentary.id)}>
                          <AntDesign name="closecircleo" size={12} color="black" />
                        </BorderlessButton>
                      ) : null}
                  </SafeAreaView>
                  <Text style={styles.text2}>{commentary?.description}</Text>
                </SafeAreaView>

              </SafeAreaView>
            )
          })}
        </ScrollView>
      </SafeAreaView>

      <Baseboard token={token} />
      <Toast />
    </SafeAreaView>
  );
}
