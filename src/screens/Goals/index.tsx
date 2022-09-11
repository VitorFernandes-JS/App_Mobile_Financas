import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  Modal
} from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

import TristeImg from "../../assets/triste.png";
import AddImg from "../../assets/close.png";
import { RectButton, TextInput } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

interface IRouteParams {
  token: string;
}

export function Goals() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Metas </Text>
        <ModalPattern
          text={
            "Aqui você encontra as principais funcionalidades do BestFinance."
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Text style={styles.textInBody}>
          Você ainda não {`\n`}
          tem metas!
        </Text>
        <Image style={styles.image} source={TristeImg} />
      </SafeAreaView>

        <RectButton
          style={styles.add}
          onPress={() => {
            setModal(true);
          }}
        >
        </RectButton>
        <RectButton onPress={() => {
            setModal(true);
          }}>
          <Image source={AddImg} style={styles.addImg} />
        </RectButton>

      <Modal animationType="slide" transparent={true} visible={modal}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.titleModal}>Qual é sua meta?</Text>

          <SafeAreaView>
          <TextInput 
          style={styles.textInput1}
          placeholder="Digite o nome da meta:"
          placeholderTextColor={theme.colors.color4}
          >
          </TextInput>
          </SafeAreaView>

          <SafeAreaView style={styles.modalPatternView}>
          <ModalPattern text="Digite o nome da sua meta, para descrever ela de forma simples."/>
          </SafeAreaView>

          <RectButton
            onPress={() => {
              setModal(false);
            }}
            style={styles.closeModalIcon}
          >
            <Text></Text>
            <AntDesign
              name="closecircleo"
              color="red"
              size={23}
              
            />
          </RectButton>
        </SafeAreaView>
      </Modal>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
