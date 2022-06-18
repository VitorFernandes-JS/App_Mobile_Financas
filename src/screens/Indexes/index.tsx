import React, { ReactNode, useEffect, useState } from 'react';
import { View, Text,} from 'react-native';
import { styles } from './style'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { Avatar } from '../../components/Avatar';
import { BackButton } from '../../components/BackButton'
import AppLoading from 'expo-app-loading';
interface ISelicRate {
  data: String;
  valor: String;
}

interface IIndexesProps {
  route: any;
  children: ReactNode
}

export function Indexes({ route }: IIndexesProps) { 
  const { token } = route.params

  const navigation = useNavigation();

  const { buttonColor, buttonColor2 } =  theme.colors;
    
  function handleHome() {
   navigation.navigate('Home', { token })
  }

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
      <View style={styles.header}>
        <Avatar/>
        <BackButton onPress={handleHome} />
      </View>
        <Text style={styles.title}>Índices</Text>
        <LinearGradient
        colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
        style={styles.showSelic}
        >
        <View>
        <Text style={styles.textSelic}>{latestSelicRate.valor}</Text>
        </View>
        </LinearGradient>
        {/* input VALOR INICIAL*/}
        {/* input TEMPO [ANO/MES]*/}
        {/* input VALOR MENSAL*/}
        {/* input */}
    </View>

  )
}