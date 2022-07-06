import React from "react";
import { SafeAreaView } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function BackButton({ ...rest }: RectButtonProps) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.borderBackButton}></SafeAreaView>
      <RectButton style={styles.container} {...rest}>
        <AntDesign name="left" color={theme.colors.color1} size={32} />
      </RectButton>
    </SafeAreaView>
  );
}
