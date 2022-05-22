import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BackButton({...rest} : RectButtonProps) {
    return (
        <RectButton 
        style={styles.container}
            {...rest}
        >
            <AntDesign
                name="arrowleft"
                color={theme.colors.google}
                size={25}
            />
        </RectButton>
    )
}