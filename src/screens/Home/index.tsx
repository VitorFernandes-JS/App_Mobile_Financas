import React, { ReactNode, useState, useEffect } from "react";
import { styles } from "./styles";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";
import { Avatar } from "../../components/Avatar";

// Icones
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface IHomeProps {
  route: any;
  children: ReactNode;
}

type Params = {
  token: string;
};

type Profile = {
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
};

export function Home({ route }: IHomeProps) {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({} as Profile);
  const { token } = route.params;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  const { buttonColor, buttonColor2 } = theme.colors;

  function handleHome() {
    navigation.navigate("SignIn", { token });
  }

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }

  function ComparatorRote() {
    navigation.navigate("Comparator", { token });
  }

  function IndexesRote() {
    navigation.navigate("Indexes", { token });
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewGivenName}>
          <Text style={styles.givenName}>Olá, {profile.given_name}!</Text>
        </View>
        <View style={styles.viewAvatar}>
        <Avatar/>
        </View>
      </View>

      <View>
        <Text style={styles.title}>MENU</Text>

        <View style={styles.viewCalculatorAndComparator}>
          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonCalculator}
          >
            <TouchableOpacity onPress={CalculatorRote}>
              <MaterialCommunityIcons
                style={styles.iconCalculator}
                name="calculator-variant"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonCalculator}>CALCULADORA</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonComparator}
          >
            <TouchableOpacity onPress={ComparatorRote}>
              <Entypo
                style={styles.iconComparator}
                name="pie-chart"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonComparator}>COMPARADOR</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.viewIndexesAndVideos}>
          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonIndexes}
          >
            <TouchableOpacity onPress={IndexesRote}>
              <MaterialCommunityIcons
                style={styles.iconIndexes}
                name="finance"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonIndexes}>ÍNDICES</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonVideo}
          >
            <TouchableOpacity onPress={IndexesRote}>
              <AntDesign
                style={styles.iconVideo}
                name="youtube"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonVideo}>VÍDEOS</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.viewFinancingAndLoan}>
          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonFinancing}
          >
            <TouchableOpacity onPress={IndexesRote}>
              <AntDesign
                style={styles.iconFinancing}
                name="home"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonFinancing}>FINANCIAR</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
            style={styles.buttonLoan}
          >
            <TouchableOpacity onPress={IndexesRote}>
              <Entypo
                style={styles.iconLoan}
                name="credit"
                size={63}
                color="#595959"
              />
              <Text style={styles.textButtonLoan}>EMPRÉSTIMO</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
