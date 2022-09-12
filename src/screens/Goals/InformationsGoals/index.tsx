import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";

interface IRouteParams {
  token: string;
}

export function InformationsGoals() {
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token}/>
      <Baseboard token={token}/>
    </SafeAreaView>
    );
  }