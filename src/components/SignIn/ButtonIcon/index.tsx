import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SafeAreaView, Text, Image } from "react-native";
import GoogleImg from "../../../assets/google.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SafeAreaView style={styles.iconWrapper}>
        <Image source={GoogleImg} style={styles.icon} />
      </SafeAreaView>
      <SafeAreaView style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </RectButton>
  );
}
