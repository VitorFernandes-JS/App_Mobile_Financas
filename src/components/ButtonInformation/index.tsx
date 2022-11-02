import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';

interface IButtonInformationProps {
    onPress: () => void;
}

export function ButtonInformation({ ...rest }: IButtonInformationProps) {
  return (
    <BorderlessButton style={styles.buttonInformation} {...rest}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={theme.colors.color4}
          />
        </BorderlessButton>
  );
}