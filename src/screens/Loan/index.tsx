import React from "react";
import { styles } from "./styles";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";

interface IRouteParams {
    token: string;
  }

export function Loan() {
    const navigation = useNavigation();

    const route = useRoute();
  
    const { token } = route.params as IRouteParams;

    return(
        <SafeAreaView style={styles.container}>
            <Header token={token}/>
            <Text>
                Empréstimo
            </Text>
            <Baseboard token={token}/>
        </SafeAreaView>
    )

}