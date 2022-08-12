import React from "react";
import { SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

import { EvilIcons } from "@expo/vector-icons";

export function Trash() {
  return (
    <SafeAreaView style={styles.container}>
      <RectButton>
        <SafeAreaView style={styles.body}>
          <EvilIcons name="trash" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </RectButton>
    </SafeAreaView>
  );
}
