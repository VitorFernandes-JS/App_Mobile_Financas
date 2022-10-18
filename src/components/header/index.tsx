import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native";
import { styles } from "./styles";

import { BackButton } from "../BackButton";

export function Header() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.viewBackButton}>
        <BackButton onPress={handleHome} />
      </SafeAreaView>
    </SafeAreaView>
  );
}
