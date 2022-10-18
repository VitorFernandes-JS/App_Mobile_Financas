import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { ModalPattern } from "../../../components/modalPattern";
import { theme } from "../../../global/styles/theme";
import { AvatarComments } from "../../../components/AvatarComments";

import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface IVideosProps {
  token: string;
}

export function WatchingVideo({ token }: IVideosProps) {
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
          placeholderTextColor={theme.colors.color3}
          >
          </TextInput>
        </SafeAreaView>

        </SafeAreaView>

        

      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
