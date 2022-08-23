import React, { ReactNode, useState, useEffect } from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

interface IProfileProps {
  route: any;
  children: ReactNode;
}

type Params = {
  token: string;
};

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
};

export function Profile({ token }: Params) {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({} as Profile);

  async function loadProfile({token}: Params) {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }
  console.warn(token)



  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <SafeAreaView>
          <Image source={{ uri: profile.picture }} style={styles.avatar}></Image>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
}
