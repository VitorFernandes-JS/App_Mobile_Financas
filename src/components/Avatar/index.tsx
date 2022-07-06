import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";


type Params = {
  token: string;
};

type Profile = {
  given_name: string;
  name: string;
  picture: string;
};

export function Avatar() {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({} as Profile);
  const route = useRoute();
  const [visible, setVisible] = useState(false);

  const { token } = route.params as Params;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  function handleSignIn() {
    navigation.navigate("SignIn");
  }

  function handleProfile() {
    navigation.navigate("Profile", { token });
    setVisible(false);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View>
      <Image source={{ uri: profile.picture }} style={[styles.avatar]} />
      </View>
  );
}
