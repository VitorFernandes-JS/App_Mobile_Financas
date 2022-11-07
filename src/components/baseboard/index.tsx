import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { apiFinances } from "../../services";

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

  async function handleGoals() {
    const response = await apiFinances.get('/goals')
    response.data.length >= 1 ? navigation.navigate("InformationsGoals", { token }) : navigation.navigate("Goals", { token });
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
        <AntDesign name="star" color="#ffc107" size={40} />
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
