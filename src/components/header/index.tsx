import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Header() {

    return(
    <View style={styles.container}>
        <Avatar/>
    </View>
    )
};