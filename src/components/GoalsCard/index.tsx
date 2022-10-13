import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

export interface GoalsCardProps {
    number: any;
    name: string;
    amount: string;
}

export interface Props {
    data: GoalsCardProps;
}

export function GoalsCard({ number, name, amount }: GoalsCardProps) {
  return (
        <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.number}>
          <Text style={styles.numberText}>{number}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.viewTitle}>
        <Text style={styles.title}>{name}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.fieldValue}>
          <Text style={styles.fieldValueText}>{amount}</Text>
        </SafeAreaView>
      </SafeAreaView>
  );
}