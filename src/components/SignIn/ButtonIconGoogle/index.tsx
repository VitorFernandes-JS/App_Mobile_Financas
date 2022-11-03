import React, {ComponentProps} from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { SimpleLineIcons } from '@expo/vector-icons'; 

type Props = RectButtonProps & {
  title: string;
  icon: ComponentProps<typeof SimpleLineIcons>['name'];
};

export function ButtonIconGoogle({ title, icon,...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SafeAreaView style={styles.iconWrapper}>
        <SimpleLineIcons name={icon} size={38} color="black" />
      </SafeAreaView>
      <SafeAreaView style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </RectButton>
  );
}
