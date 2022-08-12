import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

export function Add() {
  return (
    <SafeAreaView style={styles.container}>
      <RectButton>
        <SafeAreaView style={styles.body}>
          <Ionicons name="add" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
