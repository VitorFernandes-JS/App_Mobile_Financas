import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { FontAwesome } from '@expo/vector-icons';

export function AvatarComments() {

  return (
    <SafeAreaView style={styles.buttonAvatar}>
      <FontAwesome name="user-circle-o" color={theme.colors.color3} size={30} />
    </SafeAreaView>
  );
}
