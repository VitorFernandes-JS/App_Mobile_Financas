import React, { useEffect, useState } from "react";
import { SafeAreaView, Text} from "react-native";
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

    setData(goals);

    const goalsFormatted: DataListProps[] = goals
    .map((item: DataListProps) => {
      
      const amount = Number(item.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      console.log(amount);

      return {
        id: item.id,
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
      <GoalsCard number={0} name={""} amount={""}  />
      </SafeAreaView>

      <SafeAreaView style={styles.bodyGrafic}></SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
