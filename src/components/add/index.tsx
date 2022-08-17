import React, { useState } from "react";
import { SafeAreaView, Modal, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { TextField } from "../textField";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export function Add() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <TextField/>
          <SafeAreaView style={styles.line}></SafeAreaView>
          <RectButton
            onPress={() => {
              setVisible(false);
            }}
          >
            <AntDesign
              name="closecircle"
              color="red"
              size={22}
              style={styles.closeModalIcon}
            />
          </RectButton>

          <RectButton
           onPress={() => {
            setVisible(false);
          }}
          >
            <SafeAreaView style={styles.viewButtonAdd}>
            <SafeAreaView style={styles.buttonAdd}>
              <Text style={styles.textAdd}>Adicionar</Text>
            </SafeAreaView>
            </SafeAreaView>
          </RectButton>
        </SafeAreaView>
      </Modal>

      <RectButton
        onPress={() => {
          setVisible(true);
        }}
      >
        <SafeAreaView style={styles.body}>
          <Ionicons name="add" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
