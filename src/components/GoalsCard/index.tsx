import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

import { BaseButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
export interface GoalsCardProps {
    number: any;
    name: string;
    amount: string;
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
      <BorderlessButton style={styles.body} onPress={handleWalletInvestment}>
        <SafeAreaView style={styles.number}>
          <Text style={styles.numberText}>{number}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.viewTitle}>
        <Text style={styles.title}>{name}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.fieldValue}>
          <Text style={styles.fieldValueText}>{amount}</Text>
        </SafeAreaView>
      </BorderlessButton>
  );
}