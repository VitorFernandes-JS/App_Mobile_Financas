import React, { ReactNode } from "react";
import { styles } from "./styles";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { BackButton } from "../../components/BackButton";
import { Avatar } from "../../components/Avatar";

// Icones
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface IHomeProps {
  route: any;
  children: ReactNode
}

export function Home({ route }: IHomeProps) {
  const { token } = route.params

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("SignIn", { token });
  }

  function CalculatorRote() {
    navigation.navigate("Calculator", { token });
  }

  function ComparatorRote() {
    navigation.navigate("Comparator", { token });
  }

  function IndexesRote() {
    navigation.navigate("Indexes", { token });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar/>
        <BackButton onPress={handleHome} />
      </View>

      <View>
        <Text style={styles.title}>MENU</Text>
        
        <View style={styles.viewCalculatorAndComparator}>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={CalculatorRote}
        >
          <Ionicons style={styles.iconCalculator} name="ios-calculator-outline" size={63} color="#80ffbf" />
          <Text style={styles.textButtonCalculator}>CALCULADORA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonComparator}
          onPress={ComparatorRote}
        >
          <Entypo style={styles.iconComparator} name="pie-chart" size={63} color="#4d79ff" />
          <Text style={styles.textButtonComparator}>COMPARADOR</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.viewIndexesAndVideos}>
        <TouchableOpacity
          style={styles.buttonIndexes}
          onPress={IndexesRote}
        >
          <MaterialCommunityIcons style={styles.iconComparator} name="finance" size={63} color="#ffff33" />
          <Text style={styles.textButtonComparator}>ÍNDICES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVideo}
          onPress={IndexesRote}
        >
          <AntDesign style={styles.iconComparator} name="youtube" size={63} color="#ff4d4d" />
          <Text style={styles.textButtonComparator}>VÍDEOS</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.viewFinancingAndLoan}>
        <TouchableOpacity
          style={styles.buttonSimulator}
          onPress={IndexesRote}
        >
          <AntDesign style={styles.iconComparator} name="home" size={63} color="#663300" />
          <Text style={styles.textButtonComparator}>FINANCIAMENTO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLoan}
          onPress={IndexesRote}
        >
          <Entypo style={styles.iconComparator} name="credit" size={63} color="#33cc00" />
          <Text style={styles.textButtonComparator}>EMPRÉSTIMO</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
