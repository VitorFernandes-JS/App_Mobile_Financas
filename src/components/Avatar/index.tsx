import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Modal, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

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

export function Avatar() {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({} as Profile);
  const route = useRoute();
  const [visible, setVisible] = useState(false);

  const { token } = route.params as Params;

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  function handleSignIn() {
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.viewModal}>
          <Text style={styles.modalText}>PERFIL</Text>
          <View style={styles.line}></View>
          <View style={styles.viewUser}>
            <TouchableOpacity
              onPress={handleSignIn} 
            >
              <EvilIcons
              name="user"
              style={styles.iconUser}
              />
              <Text style={styles.textUser}>Ver Perfil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewIconExit}>
            <TouchableOpacity
              onPress={handleSignIn} 
            >
              <MaterialCommunityIcons
              name="exit-to-app"
              style={styles.iconExitForSignIn}
              />
              <Text style={styles.textExitForSignIn}>Sair</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text></Text>
            <AntDesign
              name="closesquare"
              color="red"
              size={27}
              style={styles.closeModalIcon}
            />
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <View style={styles.borderAvatar}></View>
      </TouchableOpacity>
      
      <Image
        source={{ uri: profile.picture }}
        style={[styles.avatar]}
      />
    </View>
  );
}
