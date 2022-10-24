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
export interface DataListProps extends GoalsCardProps {
  id: string;
}

interface IGoals {
  id: string;
  name: string;
  amount: number;
  user_id: string;
  created_at: string;
  updated_at: string;
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
  

  async function loadGoals() {
   
    const goals = await apiFinances.get("/goals")

    setData(goals.data);
    setCountReload((prevState) => prevState + 1);
  }


  function interval(func: any, ti: number) {
    /* your code */
    loadGoals()
    if (countReload > 5)
      setTimeout(() => { interval(func, ti); }, ti);
  }

  useEffect(() => {
    apiFinances.get("/goals").then((response) => {
      setData(response.data)
    })

    // AsyncStorage.removeItem('@mobile:goals');
  }, [])

  useEffect(() => {
    if(countReload > 1) {
      return;
    }
    apiFinances.get("/goals").then((response) => {
      setCountReload((prevState) => prevState + 1);
      setData(response.data)
    })
  }, [data, countReload])

  
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
      <InformationModalAddGoal isVisible={visible} setIsVisible={setVisible} setCountReload={setCountReload}/>
    </SafeAreaView>
  );
}
