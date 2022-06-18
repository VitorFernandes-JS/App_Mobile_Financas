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

interface IAxiosGet {
  id: string;
  resultados: [
    {
      series: [
        {
          serie: {
            202204: string;
          };
        }
      ];
    }
  ];
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

  const [ipcaRate, setIpcaRate] = useState<IAxiosGet[]>([])
  const [selicRate, setSelicRate] = useState<ISelicRate[]>([])
  //API SELIC
  useEffect(() => {
      axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json')
          .then((response) => setSelicRate(response.data))
  }, [])
  //API IPCA
  axios
  .get<IAxiosGet[]>(
    "https://servicodados.ibge.gov.br/api/v3/agregados/7060/periodos/202001%7C202204/variaveis/69?localidades=N1[all]&classificacao=315[7169]"
  )
  .then((response) =>
    setIpcaRate(+response.data[0].resultados[0].series[0].serie[202204])
  );


  const latestSelicRate = selicRate[selicRate.length - 1];
  
  if (selicRate.length <= 0) {
    return <AppLoading />;
  }

  if (ipcaRate.length <= 0) {
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
        <Text style={styles.titleSelic}>TAXA SELIC</Text>
        <Text style={styles.textSelic}>Diário: {(+latestSelicRate.valor).toFixed(2)}</Text>
        <Text style={styles.textSelic1}>Mensal: {(+latestSelicRate.valor * 30).toFixed(2)}</Text>
        <Text style={styles.textSelic2}>Anual: {(+latestSelicRate.valor * 254).toFixed(2)}</Text>
        </View>
        </LinearGradient>

        <LinearGradient
        colors={[theme.colors.buttonColor, theme.colors.buttonColor2]}
        style={styles.showSelic}
        >
        <View>
        <Text style={styles.titleSelic}>IPCA</Text>
        <Text style={styles.textSelic}>Diário: {(+ipcaRate / 254).toFixed(2)}</Text>
        <Text style={styles.textSelic1}>Mensal: {(+ipcaRate / 12).toFixed(2)}</Text>
        <Text style={styles.textSelic2}>Anual: {(+ipcaRate).toFixed(2)}</Text>
        </View>
        </LinearGradient>
    </View>

  )
}