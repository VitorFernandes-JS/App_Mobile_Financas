import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";

interface IRouteParams {
  token: string;
}

export function InformationsGoals() {
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />

      {/* Campo 1*/}
      <SafeAreaView style={styles.bodyOne}>
        <SafeAreaView style={styles.numberOne}>
          <Text style={styles.numberTextOne}>1</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.fieldValueOne}>
          <Text style={styles.fieldValueTextOne}>R${}</Text>
        </SafeAreaView>
      </SafeAreaView>

      {/* Campo 2*/}
      <SafeAreaView style={styles.bodyTwo}>
        <SafeAreaView style={styles.numberTwo}>
          <Text style={styles.numberTextTwo}>2</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.fieldValueTwo}>
          <Text style={styles.fieldValueTextTwo}>R${}</Text>
        </SafeAreaView>
      </SafeAreaView>

      {/* Campo 3*/}
      <SafeAreaView style={styles.bodyThree}>
        <SafeAreaView style={styles.numberThree}>
          <Text style={styles.numberTextThree}>3</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.fieldValueThree}>
          <Text style={styles.fieldValueTextThree}>R${}</Text>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.bodyGrafic}>

      </SafeAreaView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
