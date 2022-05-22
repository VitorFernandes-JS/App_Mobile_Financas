import { Avatar } from '../../components/Avatar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text,} from 'react-native';
import { styles } from './styles'
import AppLoading from 'expo-app-loading';
interface ISelicRate {
  data: String;
  valor: String;
}

export function Calculator() { 
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
    
    <View style={styles.container}>
        <Avatar urlImage="https://github.com/Vitor-php.png"/>
        <Text style={styles.textoSelic}>{latestSelicRate.valor}</Text>
        {/* input VALOR INICIAL*/}
        {/* input TEMPO [ANO/MES]*/}
        {/* input VALOR MENSAL*/}
        {/* input */}
    </View>

  )
}