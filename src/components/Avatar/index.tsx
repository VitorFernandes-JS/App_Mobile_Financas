import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Line } from 'react-native-svg';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { secondary, heading  } = theme.colors
    
    return (
        <LinearGradient
        style={styles.container}
        colors={[ secondary, heading  ]}
        >
            <Image 
                source={{ uri: urlImage }}
                style={ styles.avatar } 
            />
        </LinearGradient>
    )
}