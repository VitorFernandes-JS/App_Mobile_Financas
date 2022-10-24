import React, { useState } from "react";
import { SafeAreaView, Text, Modal, Image } from "react-native";
import { styles, viewButtonStyles } from "./styles";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

import InterrogationImg from "../../assets/ponto-de-interrogacao.png";

interface IModalPattern {
  text: string;
}

export function ModalPattern({ text }: IModalPattern) {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalText}>Informações</Text>
          <SafeAreaView style={styles.line}></SafeAreaView>
          <Text style={styles.modalSubtitle}>{text}</Text>
          <RectButton
            style={styles.rectButtoncloseModalIcon}
            onPress={() => {
              setVisible(false);
            }}
          >
            <AntDesign name="closecircleo" color="red" size={25} />
          </RectButton>
        </SafeAreaView>
      </Modal>

      <BorderlessButton
        style={viewButtonStyles({ top: 51.5 }).interrogation}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Image source={InterrogationImg} style={styles.interrogation1} />
      </BorderlessButton>
    </SafeAreaView>
  );
}
