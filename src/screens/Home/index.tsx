import React, { ReactNode, useState, useEffect } from "react";
import { styles } from "./styles";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";
import { Header } from "../../components/header";


interface IHomeProps {
  route: any;
  children: ReactNode;
}

type Params = {
  token: string;
};

type Profile = {
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
};

export function Home({ route }: IHomeProps) {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({} as Profile);
  const { token } = route.params;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }


  function handleHome() {
    navigation.navigate("SignIn", { token });
  }

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }

  function ComparatorRote() {
    navigation.navigate("Comparator", { token });
  }

  function IndexesRote() {
    navigation.navigate("Indexes", { token });
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Header/>
      </View>
  );
}
