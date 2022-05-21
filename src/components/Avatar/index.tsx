import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { background, backgroundSecondary } = theme.colors
    
    return (
        <LinearGradient
        style={styles.container}
        colors={[background, backgroundSecondary]}
        >
            <Image 
                source={{ uri: urlImage }}
                style={ styles.avatar } 
            />
        </LinearGradient>
    )
}