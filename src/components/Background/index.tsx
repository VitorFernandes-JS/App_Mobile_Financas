import React, { ReactNode } from "react";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { background, backgroundSecondary } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.background, theme.colors.backgroundSecondary]}
    >
      {children}
    </LinearGradient>
  );
}
