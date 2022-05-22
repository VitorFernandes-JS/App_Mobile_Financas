import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from '../../components/BackButton'
import { styles } from "./styles";
import { Avatar } from "../../components/Avatar";

export function Home() {

  const navigation = useNavigation();
    
    function handleHome() {
     navigation.navigate('SignIn')
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Avatar urlImage="https://github.com/Vitor-php.png" />
      <BackButton onPress={handleHome} />
      </View>

      <View>
        <Button 
          title="Press me"
          color="#f194ff"
        />
      </View>
    </View>
  );
}
