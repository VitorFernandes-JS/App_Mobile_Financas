import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { useRoute } from "@react-navigation/native";
import { HeaderHome } from "../../components/headerHome";
import { Baseboard } from "../../components/baseboard";
import { ButtonHome } from "../../components/buttonHome";
import { ModalPattern } from "../../components/modalPattern";

interface IRouteParams {
  token: string;
}

interface Profile {
  given_name: string;
}

export function Home() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  const [profile, setProfile] = useState({} as Profile);

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
      <HeaderHome given_name={profile.given_name} />
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Menu </Text>
        <ModalPattern
          text={
            "Aqui você encontra as principais funcionalidades do BestFinance."
          }
        />
      </SafeAreaView>
      <ButtonHome token={token} />
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
