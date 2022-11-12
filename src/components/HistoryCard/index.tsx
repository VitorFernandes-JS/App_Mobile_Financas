import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles, viewContainerStyles } from './styles';

interface IHistoryCardProps {
  title: string;
  amount: number;
  color: any
}

export function HistoryCard({ title, amount, color }: IHistoryCardProps) {
  return (
    <SafeAreaView style={viewContainerStyles({ borderLeftColor: color }).container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2,
      }).format(amount)}</Text>
    </SafeAreaView>
  );
}