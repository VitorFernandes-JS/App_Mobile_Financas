import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Baseboard } from "../../components/baseboard";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type IRouteParams = {
  token: string;
};

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
};

export function Profile() {
  const [profile, setProfile] = useState({} as Profile);
  const navigation = useNavigation();

  const route = useRoute();
  const { token } = route.params as IRouteParams;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <SafeAreaView>
          <Image
            source={{ uri: profile.picture }}
            style={styles.avatar}
          ></Image>
        </SafeAreaView>
      </SafeAreaView>
      <Text style={styles.textGivenName}>{profile.given_name}</Text>
      <Text style={styles.textFamilyName}>{profile.email}</Text>

      <TouchableOpacity>
        <SafeAreaView style={styles.box1}>
          <Text style={styles.textContactUs}>Fale Conosco : </Text>
          <Feather name="phone-call" style={styles.iconPhone} size={18} />
        </SafeAreaView>
      </TouchableOpacity>

      <TouchableOpacity>
        <SafeAreaView style={styles.box2}>
          <Text style={styles.textContactUs}>Sair do Perfil: </Text>
          <Entypo name="export" style={styles.iconPhone} size={18}/>
        </SafeAreaView>
      </TouchableOpacity>

      <TouchableOpacity>
        <SafeAreaView style={styles.box3}>
          <Text style={styles.textContactUs}>Excluir Conta: </Text>
          <Ionicons name="trash-outline" style={styles.iconPhone} size={20}/>
        </SafeAreaView>
      </TouchableOpacity>
      <Text style={styles.developedBy}>Desenvolvido por: 
        Vitor Fernandes Moraes</Text>
      <Baseboard token="token" />
    </SafeAreaView>
  );
}
