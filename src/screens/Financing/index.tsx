import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

interface IVideosProps {
    token: string;
  }

export function Financing({token}: IVideosProps) {

    return(
        <SafeAreaView style={styles.container}>
            <Header token={token}/>
            <Text>
                Financiar
            </Text>
            <Baseboard token={token}/>
        </SafeAreaView>
    )

}