import React, { ReactNode } from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ButtonHome } from "../../components/buttonHome"

interface IHomeProps {
  token: string;
}


export function Home({ token }: IHomeProps) {

  

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token}/>
        <ButtonHome token={token}/>
      <Baseboard token={token}/>
    </SafeAreaView>

    
  );
}
