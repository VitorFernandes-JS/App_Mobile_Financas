import React from "react";
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

export function Home() {
  type PropTypeBT = {
    style: string;
  };

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("SignIn");
  }

  function CalculatorRote() {
    navigation.navigate("Calculator");
  }

  function ComparatorRote() {
    navigation.navigate("Comparator");
  }

  function IndexesRote() {
    navigation.navigate("Indexes");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar urlImage="https://github.com/Vitor-php.png" />
        <BackButton onPress={handleHome} />
      </View>

      <View>
        <Text style={styles.title}>ESCOLHA:</Text>
        
        <ScrollView>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={CalculatorRote}
        >
          <Ionicons style={styles.iconCalculator} name="ios-calculator-outline" size={60} color="white" />
          <Text style={styles.textButtonCalculator}>CALCULADORA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonComparator}
          onPress={ComparatorRote}
        >
          <Entypo style={styles.iconComparator} name="pie-chart" size={60} color="white" />
          <Text style={styles.textButtonComparator}>COMPARADOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIndexes}
          onPress={IndexesRote}
        >
          <MaterialCommunityIcons style={styles.iconIndexes} name="finance" size={60} color="white" />
          <Text style={styles.textButtonIndexes}>ÍNDICES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVideo}
          onPress={IndexesRote}
        >
          <AntDesign style={styles.iconVideo} name="youtube" size={60} color="white" />
          <Text style={styles.textButtonVideo}>VÍDEOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIndexes}
          onPress={IndexesRote}
        >
          <MaterialCommunityIcons style={styles.iconIndexes} name="finance" size={60} color="white" />
          <Text style={styles.textButtonIndexes}>ÍNDICES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIndexes}
          onPress={IndexesRote}
        >
          <MaterialCommunityIcons style={styles.iconIndexes} name="finance" size={60} color="white" />
          <Text style={styles.textButtonIndexes}>ÍNDICES</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
