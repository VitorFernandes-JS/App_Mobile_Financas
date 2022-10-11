import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";

import star from "../../assets/star.png";
import { theme } from "../../global/styles/theme";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RectButton, BorderlessButton} from "react-native-gesture-handler";

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
    navigation.navigate("Goals", { token });
  }

  function handleProfile() {
    navigation.navigate("Profile", { token });
  }

  function handleFavorite() {
    navigation.navigate("Favorite", { token });
  }

  return (
    <SafeAreaView style={styles.container}>
      <BorderlessButton onPress={handleHome} style={styles.iconHome}>
        <AntDesign name="home" color={theme.colors.color4} size={35} />
        <Text style={styles.textHome}>Menu</Text>
      </BorderlessButton>

      <BorderlessButton onPress={handleWallet} style={styles.iconWallet}>
        <Ionicons name="wallet-outline" color={theme.colors.color4} size={35} />
        <Text style={styles.textWallet}>Carteira</Text>
      </BorderlessButton>

      <SafeAreaView style={styles.borderStar} />
      <SafeAreaView style={styles.borderStar1} />
      <BorderlessButton onPress={handleGoals} style={styles.iconStar}>
        <Image source={star} style={styles.imgStar} />
        <Text style={styles.textGoal}>Metas</Text>
      </BorderlessButton>

      <BorderlessButton onPress={handleFavorite} style={styles.iconFavorite}>
        <AntDesign name="hearto" color={theme.colors.color4} size={35} />
        <Text style={styles.textFavorite}>Favoritos</Text>
      </BorderlessButton>

      <BorderlessButton onPress={handleProfile} style={styles.iconProfile}>
        <AntDesign name="user" color={theme.colors.color4} size={35} />
        <Text style={styles.textProfile}>Perfil</Text>
      </BorderlessButton>
    </SafeAreaView>
  );
}
