import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

interface IBoxWalletInvestmentProps {
    title: string;
}

export function BoxWalletInvestment({ title }: IBoxWalletInvestmentProps) {
  return (
    <SafeAreaView style={styles.box}>
        <Text>{title}</Text>
      </SafeAreaView>
  );
}