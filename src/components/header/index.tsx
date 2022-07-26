import React, { ReactNode, useState, useEffect } from "react";

import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

interface IProfileProps {
    token: string;
  }

  type Params = {
    token: string;
  };

  type Profile = {
    given_name: string;
  };

export function Header({ token }: IProfileProps) {
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

    return(
      <SafeAreaView style={styles.container}>
        <Text>{profile.given_name}</Text>
        <Avatar />
      </SafeAreaView>
    )
};