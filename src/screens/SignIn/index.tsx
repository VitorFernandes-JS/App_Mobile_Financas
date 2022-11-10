import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Image, Modal, Alert, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Clipboard from 'expo-clipboard';

import { ButtonIconGoogle } from "../../components/SignIn/ButtonIconGoogle";
import { ButtonIconApple } from "../../components/SignIn/ButtonIconApple";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { apiFinances } from "../../services";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function SignIn() {
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  async function handleCopyFacebook() {
    setCopied(true)
    await Clipboard.setStringAsync("https://www.facebook.com/vitor.fernandesmoraes/");
    Alert.alert('Facebook', 'Copiado com sucesso!');
    setCopied(false)
  }

  async function handleCopyYoutube() {
    setCopied(true)
    await Clipboard.setStringAsync("https://www.youtube.com/channel/UCbTERIDQBVFmzeMeDvaBIaw");
    Alert.alert('Youtube', 'Copiado com sucesso!');
    setCopied(false)
  }

  async function handleCopyInstagram() {
    setCopied(true)
    await Clipboard.setStringAsync("https://www.instagram.com/vitor.holder/");
    Alert.alert('Instagram', 'Copiado com sucesso!');
    setCopied(false)
  }

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
    ).then((res) => res.json());

    await apiFinances
      .post("/users", { email: userInfo.email, name: userInfo.name })
      .catch((error) => {
        console.log("users: ", error?.response?.data?.message, error);
      });

    const authToken = await apiFinances
      .post<string>("/users/authenticate", { email: userInfo.email })
      .catch((error) => {
        console.log(error?.response?.data?.message);
      });

    apiFinances.defaults.headers.common["Authorization"] =
      "Bearer " + authToken?.data || "no token";

    await apiFinances.post("/wallets", { value: 0 }).catch((error) => {
      console.log(error.response.data.message);
    });

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
        <ButtonIconGoogle
          icon="social-google"
          title="Entrar com Google"
          onPress={handleSignIn}
        />
        <ButtonIconApple
          icon="apple-o"
          title="Entrar com Apple"
          onPress={handleSignIn}
        />
      </SafeAreaView>
      <BorderlessButton
        style={styles.buttonContact}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.contactUs}>Fale Conosco</Text>
      </BorderlessButton>

      <Modal visible={modalVisible} transparent={true} animationType={"slide"}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.titleModal}>Redes Sociais:</Text>

          <BorderlessButton style={styles.closeButton} onPress={() => {setModalVisible(false)}}>
            <AntDesign name="closecircleo" size={24} color="red" />
          </BorderlessButton>

          <TouchableOpacity style={styles.containerButton} disabled={copied} onPress={handleCopyFacebook}>
            <SafeAreaView style={styles.iconWrapper}>
              <FontAwesome
                name="facebook-square"
                size={38}
                color={theme.colors.color2}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.contentWrapper}>
              <Text style={styles.text}>Clique para copiar!</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerButton} disabled={copied} onPress={handleCopyYoutube}>
            <SafeAreaView style={styles.iconWrapper}>
              <FontAwesome
                name="youtube-play"
                size={38}
                color={theme.colors.color2}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.contentWrapper}>
              <Text style={styles.text}>Clique para copiar!</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerButton} disabled={copied} onPress={handleCopyInstagram}>
            <SafeAreaView style={styles.iconWrapper}>
              <AntDesign
                name="instagram"
                size={38}
                color={theme.colors.color2}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.contentWrapper}>
              <Text style={styles.text}>Clique para copiar!</Text>
            </SafeAreaView>
          </TouchableOpacity>

        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
