import React from "react";
import Api from '../../Api';
import * as Google from "expo-google-app-auth";
import { View, Text, Image } from "react-native";
import { ButtonIcon } from "../../components/SignIn/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";



  export function SignIn() {

//   const actionLoginGoogle = async () => {
//     let result = Api.googleLogar();

//     if(result){
//       onReceiveGoogle(result.user);
//     }else{
//       alert('Error');
//     }
//   }

  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Aprender a investir {`\n`}
          nunca foi tão fácil!
        </Text>
        <Text style={styles.subtitle}>
          Aprenda sobre investimento do básico {`\n`}
          ao avançado tudo em um só lugar.
        </Text>
        <ButtonIcon title="Entrar com Google" //onPress={actionLoginGoogle} 
        />
      </View>
    </View>
  );
}



       