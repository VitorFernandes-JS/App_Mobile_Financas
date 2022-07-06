import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {

  return (
    <SafeAreaView
      style={styles.container}
    >
      {children}
      </SafeAreaView>
  );
}
