import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

interface IBoxCategoryVideos {
    text: string;
}

export function BoxCategoryVideos({ text }: IBoxCategoryVideos) {
  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.body}>
            <SafeAreaView style={styles.boxText}>
                <Text>{text}</Text>
            </SafeAreaView>
        </SafeAreaView>
    </SafeAreaView>
  );
}