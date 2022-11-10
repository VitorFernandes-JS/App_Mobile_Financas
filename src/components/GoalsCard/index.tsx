import React, { useState } from "react";
import { Modal, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Trash } from "../trash";
import { apiFinances } from "../../services";
export interface GoalsCardProps {
  number: any;
  name: string;
  amount: number;
  id: string;
  setData: (p: any) => any;
}

export interface Props {
  data: GoalsCardProps;
}

interface IRouteParams {
  token: string;
}

export function GoalsCard({
  number,
  name,
  amount,
  id,
  setData,
}: GoalsCardProps) {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  function handleWalletInvestment() {
    navigation.navigate("WalletInvestment", { token });
  }

  function handleDeleteGoal() {
    apiFinances
      .delete("/goals/" + id)
      .then(() => {
        apiFinances.get("/goals").then((response) => {
          setData(
            response?.data.sort(
              (a: any, b: any) =>
                +new Date(a.created_at) - +new Date(b.created_at)
            )
          );
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <SafeAreaView>
    <RectButton style={styles.body} onPress={handleWalletInvestment}>
      <SafeAreaView style={styles.number}>
        <Text style={styles.numberText}>{number}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTitle}>
        <Text style={styles.title}>{name}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.fieldValue}>
        <Text style={styles.fieldValueText}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          }).format(amount)}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <Trash
          onPress={() => {
            setVisible(true);
          }}
        />
      </SafeAreaView>
    </RectButton>

    <Modal animationType="slide" transparent={true} visible={visible}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalSubtitle}>Tem certeza dessa exclusão?</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.viewButtons}>
          <BorderlessButton
            style={styles.buttonToExclude}
            onPress={handleDeleteGoal}
          >
            <Text style={styles.textToExclude}>Excluir</Text>
          </BorderlessButton>

          <BorderlessButton
            style={styles.buttonToCancel}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.textToCancel}>Cancelar</Text>
          </BorderlessButton>
        </SafeAreaView>
        <Text style={styles.textBaseboard}>Obs: isto é permanente!</Text>
      </Modal>

    </SafeAreaView>
  );
}
