import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { styles } from '../Main/styles';
import AppLoading from 'expo-app-loading';
import {SvgUri} from 'react-native-svg';
import { Avatar } from '../../components/Avatar';


export function Main() {
  return (
<View style={styles.container}>
  <Avatar urlImage="https://github.com/Vitor-php.png"/>
  <Text></Text>
  
</View>
  );
}