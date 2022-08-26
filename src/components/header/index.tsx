import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

import { BackButton } from "../BackButton"

interface IHeaderProps {
  token: string;
}

type Profile = {
  given_name: string;
};

export function Header({ token }: IHeaderProps) {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home", { token });
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.viewBackButton}>
        <BackButton onPress={handleHome} />
      </SafeAreaView>
      <SafeAreaView style={styles.viewAvatar}>
        <Avatar />
      </SafeAreaView>
    </SafeAreaView>
  );
}
