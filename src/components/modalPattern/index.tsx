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
          <Text style={styles.modalText}>Informações</Text>
          <SafeAreaView style={styles.line}></SafeAreaView>
          <Text style={styles.modalSubtitle}>
            Este ícone <Text />
            <SafeAreaView style={styles.viewButton}></SafeAreaView>
            <Text style={styles.modalSubtitle}>
              {" "}
              signifi- {`\n`}
              ca que o índice é sobre{`\n`}
            </Text>
            o assunto Renda Fixa.{`\n`}
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
          onPress={() => {
            console.log('teste')
          }}
        >
                <Image source={InterrogationImg} style={styles.interrogation}/>
        </RectButton>

    </SafeAreaView>
  );
}
