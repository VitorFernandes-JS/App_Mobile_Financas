import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

interface IRouteParams {
    token: string;
  }
  
export function Goals() {

    const route = useRoute();

    const { token } = route.params as IRouteParams;

    return(
        <SafeAreaView style={styles.container}>
            <Header token={token}/>
            <ModalPattern text="Essa ferramenta te ajuda a controlar suas principais metas!"/>
                <Text>teste</Text>
            <Baseboard token={token}/>
        </SafeAreaView>
    )
}