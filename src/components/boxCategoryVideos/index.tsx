import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

interface IBoxCategoryVideos {
  text: string;
  source: any;
}

export function BoxCategoryVideos({ text, source }: IBoxCategoryVideos) {
  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity>
        <Image resizeMode="contain" style={styles.img} source={source.cover} />
      </TouchableOpacity>
      <SafeAreaView style={styles.boxText}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
