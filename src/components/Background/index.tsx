import React, { ReactNode } from "react";
import View from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { background, backgroundSecondary } = theme.colors;

  return (
    <View
      style={styles.container}
      colors={[theme.colors.background, theme.colors.backgroundSecondary]}
    >
      {children}
      </View>
  );
}
