import React, { useState } from "react";
import { SafeAreaView, Text, Modal } from "react-native";
import { styles, viewButtonStyles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

export function Modal1() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalText}>Informações</Text>
          <SafeAreaView style={styles.line}></SafeAreaView>
          <Text style={styles.modalSubtitle}>
            Este ícone <Text />
            <SafeAreaView
              style={viewButtonStyles({ left: 55, top: -10 }).viewButton}
            ></SafeAreaView>
            <Text style={styles.modalSubtitle}>
              {" "}
              signifi- {`\n`}
              ca que o índice é sobre{`\n`}
            </Text>
            o assunto Renda Fixa.{`\n`}
          </Text>
          <TouchableOpacity
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
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      <SafeAreaView style={viewButtonStyles({ left: 55, top: -10 }).viewButton}>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={styles.interrogation}>?</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={viewButtonStyles({ left: -70, top: -24 }).viewButton}>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={styles.interrogation}>?</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={viewButtonStyles({ left: 180, top: -36 }).viewButton}>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={styles.interrogation}>?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
