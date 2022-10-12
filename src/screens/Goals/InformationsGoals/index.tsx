import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { GoalsCard, GoalsCardProps } from "../../../components/GoalsCard";

import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface DataListProps extends GoalsCardProps {
  id: string;
}

interface IRouteParams {
  token: string;
}

export function InformationsGoals() {
  const [data, setData] = useState<DataListProps[]>([]);
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  async function loadGoals() {
    const dataKey = "@mobile:goals";
    const response = await AsyncStorage.getItem(dataKey);
    const goals = response ? JSON.parse(response) : [];

    const goalsFormatted: DataListProps[] = goals.map((item: DataListProps) => {
      const amount = Number(item.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      return {
        id: Math.random().toString(),
        name: item.name,
        amount: amount,
      };
    });

    setData(goalsFormatted);
    console.log(goalsFormatted);
  }

  useEffect(() => {
    loadGoals();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.body}>
        {data.map((item, index) => (
          <GoalsCard
            key={item.id}
            number={index + 1}
            name={item.name}
            amount={item.amount}
          />
        ))}
      </SafeAreaView>

      <SafeAreaView style={styles.bodyGrafic}></SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
