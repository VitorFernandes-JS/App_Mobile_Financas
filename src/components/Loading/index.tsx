import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
        <ActivityIndicator color={theme.colors.color2}/>
    </SafeAreaView>
  );
}