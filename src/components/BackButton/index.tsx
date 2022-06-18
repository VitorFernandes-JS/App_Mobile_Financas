import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function BackButton({...rest} : RectButtonProps) {
    return (
        <View>
        <View style={styles.borderBackButton}></View>
        <RectButton 
        style={styles.container}
            {...rest}
        >
            <AntDesign
                name="left"
                color={theme.colors.google}
                size={25}
            />
        </RectButton>
        </View>
    )
}