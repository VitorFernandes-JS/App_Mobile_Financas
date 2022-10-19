import React from "react";
import { SafeAreaView } from "react-native";
import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

import { EvilIcons } from "@expo/vector-icons";

interface ITrashProps extends BorderlessButtonProps {
  onPress: () => void;
}

export function Trash({ onPress, ...rest }: ITrashProps) {
  return (
    <SafeAreaView style={styles.container}>
      <BorderlessButton {...rest}>
        <SafeAreaView style={styles.body}>
          <EvilIcons name="trash" size={22} style={styles.iconTrash} />
        </SafeAreaView>
      </BorderlessButton>
    </SafeAreaView>
  );
}
