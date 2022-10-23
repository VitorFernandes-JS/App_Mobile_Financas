import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { GoalsCard, GoalsCardProps } from "../../../components/GoalsCard";
import { theme } from "../../../global/styles/theme";

import { useRoute, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import { InformationModalAddGoal } from "./InformationModalAddGoal";
export interface DataListProps extends GoalsCardProps {
  id: string;
}

interface IRouteParams {
  token: string;
}

export function InformationsGoals() {
  const [visible, setVisible] = useState(false);
  const [countReload, setCountReload] = useState(0);

  const route = useRoute();
  const { token } = route.params as IRouteParams;

  const [data, setData] = useState<DataListProps[]>([]);


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
    setCountReload((prevState) => prevState + 1);
  }


  function interval(func: any, ti: number) {
    /* your code */
    loadGoals()
    if (countReload > 5)
      setTimeout(() => { interval(func, ti); }, ti);
  }

  useEffect(() => {

    // setInterval(() => {
    //   (async () => {
    //     await loadGoals();
    //   })()
    // }, 2000)
    interval(loadGoals, 2000)

    // AsyncStorage.removeItem('@mobile:goals');
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView style={styles.box}>
        <SafeAreaView style={styles.number}>
          <Text style={styles.numberText}>2</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.viewAddNewGoal}>
          <AntDesign
            name="star"
            color="#ffc107"
            size={40}
            style={styles.iconStar}
          />
          <Text style={styles.textAddNewGoal}>Crie mais uma meta:</Text>
          <BorderlessButton
            style={styles.iconAdd}
            onPress={() => setVisible(true)}
          >
            <Octicons name="diff-added" size={34} color={theme.colors.color3} />
          </BorderlessButton>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.box1}>
        <SafeAreaView style={styles.number}>
          <Text style={styles.numberText}>3</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.viewAddNewGoal}>
          <AntDesign
            name="star"
            color="#ffc107"
            size={40}
            style={styles.iconStar}
          />
          <Text style={styles.textAddNewGoal}>Crie mais uma meta:</Text>
          <BorderlessButton
            style={styles.iconAdd}
            onPress={() => setVisible(true)}
          >
            <Octicons name="diff-added" size={34} color={theme.colors.color3} />
          </BorderlessButton>
        </SafeAreaView>
      </SafeAreaView>

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
      <InformationModalAddGoal isVisible={visible} setIsVisible={setVisible} />
    </SafeAreaView>
  );
}
