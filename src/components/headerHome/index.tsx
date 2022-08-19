import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import happyEmoji from "../../assets/emoji_feliz.png";

interface IProfileProps {
  token: string;
}

type Profile = {
  given_name: string;
};

export function Header() {
  const [profile, setProfile] = useState({} as Profile);
  const route = useRoute();

  const { token } = route.params as IProfileProps;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textWelcome}>Bem-Vindo,</Text>
      <Text style={styles.textName}>
        {profile.given_name}{" "}
        <Image source={happyEmoji} style={styles.iconEmojiHappy} />
      </Text>
      <Avatar />
    </SafeAreaView>
  );
}
