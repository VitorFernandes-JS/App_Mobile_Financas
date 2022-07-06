import React, { ReactNode, useState, useEffect } from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

interface IProfileProps {
    route: any;
  }

  type Params = {
    token: string;
  };

  type Profile = {
    given_name: string;
  };

export function Header({ route }:IProfileProps ) {

    const [profile, setProfile] = useState({} as Profile);
    const { token } = route.params;
    
    async function loadProfile() {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
        );
        const userInfo = await response.json();
        setProfile(userInfo);
      }


    return(
    <View style={styles.container}>
        <Avatar/>
    </View>
    )
};