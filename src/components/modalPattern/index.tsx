import React, { useState } from "react";
import { SafeAreaView, Text, Modal, Image } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

import InterrogationImg from "../../assets/ponto-de-interrogacao.png"

export function ModalPattern() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <SafeAreaView style={styles.line}></SafeAreaView>
            <SafeAreaView style={styles.viewButton}></SafeAreaView>
            <Text style={styles.modalSubtitle}>
              teste
            </Text>
          <RectButton
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text></Text>
            <AntDesign
              name="closecircleo"
              color="red"
              size={25}
              style={styles.closeModalIcon}
            />
          </RectButton>
        </SafeAreaView>
      </Modal>

        <RectButton
          style={styles.interrogation}
          onPress={() => {
            setVisible(true)
          }}
        >
                <Image source={InterrogationImg} style={styles.interrogation1}/>
        </RectButton>

    </SafeAreaView>
  );
}
