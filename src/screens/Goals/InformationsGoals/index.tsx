import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";
import { GoalsCard, GoalsCardProps } from "../../../components/GoalsCard";
import { theme } from "../../../global/styles/theme";

import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import { InformationModalAddGoal } from "./InformationModalAddGoal";
import { apiFinances } from "../../../services";
import * as Progress from 'react-native-progress';
export interface DataListProps extends GoalsCardProps {
  id: string;
}
interface IInvestments {
  id: string;
  value: number;
  dayOfInvestment: Date;
  goal_id: string;
  transaction_investment: ITransactionInvestment[];
  priority: string;
  created_at: Date;
  updated_at: Date;
}

interface ITransactionInvestment {
  id: string;
  value: number;
  description: string;
  category: string;
  investment_id: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}
export interface IGoals {
  id: string;
  name: string;
  amount: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  investment: IInvestments;
}

interface IRouteParams {
  token: string;
}

export function InformationsGoals() {
  const [visible, setVisible] = useState(false);
  const [countReload, setCountReload] = useState(0);

  const route = useRoute();
  const { token } = route.params as IRouteParams;

  // const [data, setData] = useState<DataListProps[]>([]);
  const [data, setData] = useState<IGoals[]>([]);
  const [porcentageGoalsAmount, setPorcentageGoalsAmount] = useState([])
  const [totalPorcentageGoalsAmount, setTotalPorcentageGoalsAmount] = useState(0)

  // estado 0 a 3

  useEffect(() => {
    apiFinances.get("/goals").then((response) => {
      setData(response?.data)
    })
  }, [])

  useEffect(() => {
    if (countReload > 1) {
      return;
    }

    apiFinances.get("/goals").then((response) => {
      setCountReload((prevState) => prevState + 1);
      setData(response?.data)
      setPorcentageGoalsAmount(response?.data?.map((goal: IGoals) => {
        const totalTransactionsInvesments = goal.investment.transaction_investment.reduce((acc, transactionInvestment) => acc += transactionInvestment.value, 0)
        return Number((totalTransactionsInvesments / goal.amount).toFixed(2))
      }))
    })

  }, [data, countReload])

  useEffect(() => {
    setTotalPorcentageGoalsAmount(() => {
      const totalPorcentage = porcentageGoalsAmount.reduce((acc, porcentageGoal: string) => acc += Number(porcentageGoal), 0)
      return Number((totalPorcentage / 3).toFixed(2))
    })

    console.warn("setTotalPorcentageGoalsAmount: ", totalPorcentageGoalsAmount)
  }, [porcentageGoalsAmount])

  console.warn("countReload: ", countReload)

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

      <SafeAreaView style={styles.bodyGrafic}>
        <Text>Total</Text>
        <Progress.Circle size={150} progress={totalPorcentageGoalsAmount} color={theme.colors.color2} showsText={true} indeterminate={false} />
      </SafeAreaView>

      <Baseboard token={token} />
      <InformationModalAddGoal isVisible={visible} setIsVisible={setVisible} setCountReload={setCountReload} />
    </SafeAreaView>
  );
}
