import React, { ReactNode, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
interface IProfileProps {
    route: any;
    children: ReactNode;
  }

  type Params = {
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

export function Profile({ route }: IProfileProps) {
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

    function handleHome() {
        navigation.navigate("Home", { token });
      }

      useEffect(() => {
        loadProfile();
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
            <BackButton onPress={handleHome}/>
            </View>
            <View style={styles.border}>
            <Image source={{ uri: profile.picture }} style={[styles.avatar]} />
            <View style={styles.viewGivenName}>
            <Text style={styles.givenName}>Bem-vindo, {profile.given_name}!</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.textName}>Nome: {profile.given_name}</Text>
            </View>
            <View style={styles.familyName}>
              <Text style={styles.textFamilyName}>Sobrenome: {profile.family_name}</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.textEmail}>E-mail: {profile.email}</Text>
            </View>
            <View style={styles.location}>
              <Text style={styles.textLocation}>Localização: {profile.locale}</Text>
              
            </View>
            </View>
        </View>
    );
};