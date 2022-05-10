import React from 'react';
import { View, Text, Image, StatusBar} from 'react-native';
import { ButtonIcon} from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn(){
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent

      />
      <Image 
      source={IllustrationImg} 
      style={styles.image} 
      
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Aprender a investir {`\n`} 
          nunca foi tão fácil! 
        </Text>
        <Text style={styles.subtitle}>
          Aprenda sobre investimento do básico {`\n`} 
          ao avançado tudo em um só lugar.
        </Text>

        <ButtonIcon 
        title="Entrar com Google" 
        activeOpacity={0.8}
        />
      </View>
    </View>
  );
}