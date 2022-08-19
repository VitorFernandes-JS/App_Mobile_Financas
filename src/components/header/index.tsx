import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

import { BackButton } from "../BackButton"

interface IProfileProps {
  token: string;
}

type Profile = {
  given_name: string;
};



export function Header() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home", { token });
  }

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
      <SafeAreaView style={styles.viewBackButton}>
        <BackButton onPress={handleHome} />
      </SafeAreaView>
      <SafeAreaView style={styles.viewAvatar}>
        <Avatar />
      </SafeAreaView>
    </SafeAreaView>
  );
}
