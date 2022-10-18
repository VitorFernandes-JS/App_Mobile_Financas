import React, { useState, useEffect } from "react";
import { Image, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Params = {
  token: string;
};

type Profile = {
  picture: string;
};

export function AvatarComments() {
  const [profile, setProfile] = useState({} as Profile);
  const route = useRoute();
  const navigation = useNavigation();

  function handleProfile() {
    navigation.navigate("Profile", { token });
  }

  const { token } = route.params as Params;

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
    <SafeAreaView style={styles.buttonAvatar}>
        <Image source={{ uri: profile.picture }} style={[styles.avatar]} />
    </SafeAreaView>
  );
}
