import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/headerHome";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

interface IGoalsProps {
    token: string;
  }
  

export function Goals({ token }: IGoalsProps) {

    return(
        <SafeAreaView style={styles.container}>
            <Header  />
            <ModalPattern text="Essa ferramenta te ajuda a controlar suas principais metas!"/>
                <Text>teste</Text>
            <Baseboard token={token}/>
        </SafeAreaView>
    )

}