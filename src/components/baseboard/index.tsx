import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  Pressable,
} from "react-native";
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

  return (
    <SafeAreaView style={styles.container}>
      <RectButton onPress={handleHome} style={styles.iconHome}>
        <AntDesign name="home" size={40} style={styles.iconHome} />
        <Text style={styles.textHome}>Menu</Text>
      </RectButton>

      <Pressable>
        <Ionicons name="wallet-outline" size={40} style={styles.iconWallet} />
        <Text style={styles.textWallet}>Carteira</Text>
      </Pressable>

      <Pressable>
        <SafeAreaView style={styles.borderStar}/>
            <Image source={star} style={styles.iconStar}/>
            <Text style={styles.textGoal}>Metas</Text>
        <SafeAreaView style={styles.borderStar1}/>
      </Pressable>

      <Pressable>
        <AntDesign name="hearto" size={40} style={styles.iconFavorite}/>
        <Text style={styles.textFavorite}>Favoritos</Text>
      </Pressable>

      <Pressable>
        <AntDesign name="user" size={40} style={styles.iconProfile}/>
        <Text style={styles.textProfile}>Perfil</Text>
      </Pressable>
    </SafeAreaView>
  );
}
