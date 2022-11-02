import React from "react";
import { Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from "./styles";

interface IProps {
  text: string;
  onPress: () => void;
}

export function ButtonSwitchGoal({ text, ...rest }: IProps) {
  return (
      <BorderlessButton style={styles.container} {...rest}>
        <Text style={styles.text}>{text}</Text>
      </BorderlessButton>
  );
}
