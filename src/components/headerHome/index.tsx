import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import happyEmoji from "../../assets/emoji_feliz.png";


interface IHeaderHome {
  given_name: string;
}

export function HeaderHome({ given_name }: IHeaderHome) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textWelcome}>Olá!</Text>
      <Text style={styles.textName}>
        {given_name}{" "}
        <Image source={happyEmoji} style={styles.iconEmojiHappy} />
      </Text>
      <Avatar />
    </SafeAreaView>
  );
}
