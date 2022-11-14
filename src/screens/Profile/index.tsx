import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, Alert, Modal, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Baseboard } from "../../components/baseboard";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { apiFinances } from "../../services";
import * as Clipboard from "expo-clipboard";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

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
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  async function handleCopyFacebook() {
    setCopied(true);
    await Clipboard.setStringAsync(
      "https://www.facebook.com/vitor.fernandesmoraes/"
    );
    Alert.alert("Facebook", "Copiado com sucesso!");
    setCopied(false);
  }

  async function handleCopyYoutube() {
    setCopied(true);
    await Clipboard.setStringAsync(
      "https://www.youtube.com/channel/UCbTERIDQBVFmzeMeDvaBIaw"
    );
    Alert.alert("Youtube", "Copiado com sucesso!");
    setCopied(false);
  }

  async function handleCopyInstagram() {
    setCopied(true);
    await Clipboard.setStringAsync("https://www.instagram.com/vitor.holder/");
    Alert.alert("Instagram", "Copiado com sucesso!");
    setCopied(false);
  }

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

  function handleSignIn() {
    apiFinances.defaults.headers.common["Authorization"] = "";
    navigation.navigate("SignIn");
  }

  async function handleDeleteUser() {
    await apiFinances.delete("/users", {
      data: {
        email: profile.email,
      },
    });

    apiFinances.defaults.headers.common["Authorization"] = "";
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <SafeAreaView>
          <SafeAreaView style={styles.iconAvatar}>
            <FontAwesome style={{ top: 25, left: 25}} name="user-circle" size={100} color={theme.colors.color4} />
          </SafeAreaView>
          <Image
            source={{ uri: profile.picture }}
            style={styles.avatar}
          ></Image>
        </SafeAreaView>
      </SafeAreaView>
      <Text style={styles.textGivenName}>{profile.given_name}</Text>
      <Text style={styles.textFamilyName}>{profile.email}</Text>

      <RectButton
        style={styles.box1}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textContactUs}>Fale Conosco : </Text>
        <Feather name="phone-call" style={styles.iconPhone} size={18} />
      </RectButton>

      <RectButton style={styles.box2} onPress={handleSignIn}>
        <Text style={styles.textContactUs}>Sair do Perfil: </Text>
        <Entypo name="export" style={styles.iconPhone} size={18} />
      </RectButton>

      <RectButton style={styles.box3} onPress={() => {setVisible(true)}}>
        <Text style={styles.textContactUs}>Excluir Conta: </Text>
        <Ionicons name="trash-outline" style={styles.iconPhone} size={20} />
      </RectButton>

      <Text style={styles.developedBy}>
        Desenvolvido por: Vitor Fernandes Moraes
      </Text>
      <Baseboard token={token} />

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

      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal1}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton
            style={styles.buttonToExclude}
            onPress={handleDeleteUser}
          >
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton
            style={styles.buttonToCancel}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>
    </SafeAreaView>
  );
}
