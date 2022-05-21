import { Avatar } from '../../components/Avatar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text,} from 'react-native';
import { styles } from '../calculator/styles'
import AppLoading from 'expo-app-loading';


interface ISelicRate {
  data: String;
  valor: String;
}

export function Main() { 
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([])

  useEffect(() => {
      axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json')
          .then((response) => setSelicRate(response.data))
  }, [])

  const latestSelicRate = selicRate[selicRate.length - 1];
  

  if (selicRate.length <= 0) {
    return <AppLoading />;
  }

  return (
    
    <View style={styles.header}>
        <Text>{latestSelicRate.valor}</Text>
        <Avatar urlImage="https://github.com/Vitor-php.png"/>
        {/* input VALOR INICIAL*/}
        {/* input TEMPO [ANO/MES]*/}
        {/* input VALOR MENSAL*/}
        {/* input */}
    </View>

  )
}