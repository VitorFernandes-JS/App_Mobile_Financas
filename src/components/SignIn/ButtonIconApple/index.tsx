import React, {ComponentProps} from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

type Props = RectButtonProps & {
  title: string;
  icon: ComponentProps<typeof AntDesign >['name'];
};

export function ButtonIconApple({ title, icon,...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SafeAreaView style={styles.iconWrapper}>
        <AntDesign name={icon} size={40} color="black" />
      </SafeAreaView>
      <SafeAreaView style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </RectButton>
  );
}
