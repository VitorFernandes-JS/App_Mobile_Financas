import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import star from "../../assets/star.png";

type Params = {
  token: string;
};

export function Baseboard({ token }: Params) {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home", { token });
  }

  function handleWallet() {
    navigation.navigate("Wallet", { token });
  }

  function handleGoals() {
    navigation.navigate("Goals", {token})
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton onPress={handleHome} style={styles.iconHome}>
        <AntDesign name="home" size={35} />
        <Text style={styles.textHome}>Menu</Text>
      </RectButton>

      <RectButton onPress={handleWallet} style={styles.iconWallet}>
        <Ionicons name="wallet-outline" size={35} />
        <Text style={styles.textWallet}>Carteira</Text>
      </RectButton>

        <SafeAreaView style={styles.borderStar} />
        <SafeAreaView style={styles.borderStar1} />
      <RectButton onPress={handleGoals} style={styles.iconStar}>
        <Image source={star} style={styles.imgStar}/>
        <Text style={styles.textGoal}>Metas</Text>
      </RectButton>

      <RectButton onPress={handleHome} style={styles.iconFavorite}>
        <AntDesign name="hearto" size={35} />
        <Text style={styles.textFavorite}>Favoritos</Text>
      </RectButton>

      <RectButton onPress={handleHome} style={styles.iconProfile}>
        <AntDesign name="user" size={35} />
        <Text style={styles.textProfile}>Perfil</Text>
      </RectButton>
    </SafeAreaView>
  );
}
