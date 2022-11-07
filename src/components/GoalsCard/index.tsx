import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

import { BaseButton, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Trash } from '../trash';
export interface GoalsCardProps {
  number: any;
  name: string;
  amount: number;
}

export interface Props {
  data: GoalsCardProps;
}

interface IRouteParams {
  token: string;
}

export function GoalsCard({ number, name, amount }: GoalsCardProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  function handleWalletInvestment() {
    navigation.navigate("WalletInvestment", { token });
  }

  return (
    <RectButton style={styles.body} onPress={handleWalletInvestment}>
      <SafeAreaView style={styles.number}>
        <Text style={styles.numberText}>{number}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTitle}>
        <Text style={styles.title}>{name}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.fieldValue}>
        <Text style={styles.fieldValueText}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(amount)}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <Trash onPress={() => {console.warn("teste 2")}}/>
      </SafeAreaView>
    </RectButton>
  );
}