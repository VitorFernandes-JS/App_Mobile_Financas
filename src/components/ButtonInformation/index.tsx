import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';
import { SafeAreaView } from 'react-native';



export function ButtonInformation({ ...rest }) {
  return (
    <SafeAreaView>
    <BorderlessButton style={styles.buttonInformation} {...rest}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={theme.colors.color4}
          />
        </BorderlessButton>
        </SafeAreaView>
  );
}