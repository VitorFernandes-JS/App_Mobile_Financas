import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Image } from "react-native";
import * as AuthSession from "expo-auth-session";

import { ButtonIcon } from "../../components/SignIn/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { apiFinances } from "../../services";

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    const CLIENT_ID =
      "463150100913-d7dheaqa3iuq6g4i1pne90mrb5184ifc.apps.googleusercontent.com";
    const REDIRECT_URI = "https://auth.expo.io/@vitor3124/mobile";
    const RESPONSE_YPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_YPE}&scope=${SCOPE}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    
    const userInfo = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`
    ).then(res => res.json())

    await apiFinances.post('/users', { email: userInfo.email, name: userInfo.name })
      .catch((error) => { console.log(error.response.data.message) })

    const authToken = await apiFinances.post<string>('/users/authenticate', { email: userInfo.email })
      .catch((error) => { console.log(error.response.data.message) })

    apiFinances.defaults.headers.common['Authorization'] = 'Bearer ' + authToken?.data || 'no token';

    await apiFinances.post('/wallets', { value: 0 })
      .catch((error) => { console.log(error.response.data.message) })

    if (type === "success") {
      navigation.navigate("Home", { token: params.access_token });
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.viewTitle}>
        <Text style={styles.title1}>B</Text>
        <Text style={styles.title2}>est</Text>
        <Text style={styles.title3}>F</Text>
        <Text style={styles.title4}>inance</Text>
      </SafeAreaView>
      <Image source={IllustrationImg} style={styles.image} />
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>
          Educação Financeira {`\n`}
          na palma da sua mão!
        </Text>
        <ButtonIcon title="Entrar com Google" onPress={handleSignIn} />
      </SafeAreaView>
      <RectButton style={styles.buttonContact}>
        <Text style={styles.contactUs}>Fale Conosco</Text>
      </RectButton>
    </SafeAreaView>
  );
}
