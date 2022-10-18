import React, { Dispatch, SetStateAction } from "react";
import { Modal, SafeAreaView, Text, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./styles";

import { InputForm } from "../../../components/Form/InputForm";
import { ModalPattern } from "../../../components/modalPattern";

import { RectButton } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

interface FormData {
  [day: string]: any;
  [amount: number]: any;
  priority: string;
}

const schema = Yup.object().shape({
  day: Yup.string().required("Dia é obrigatório!"),
  priority: Yup.string().required("Prioridade é obrigatória!"),
  amount: Yup.number()
    .transform((_value, originalValue) =>
      Number(originalValue.replace(/,/, "."))
    ) //converte a virgula em ponto
    .typeError("Informe um valor numérico!")
    .positive("O valor não pode ser negativo!")
    .required("O valor é obrigatório!"),
});

interface IWallet_InvestmentModal {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function Wallet_InvestmentModal({
  isVisible,
  setIsVisible,
}: IWallet_InvestmentModal) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function handleRegister(form: FormData) {
    const newGoal = {
      day: form.day,
      amount: form.amount,
      priority: form.priority,
    };

    try {
      const dataKey = "@mobile:goals";
      const data = await AsyncStorage.getItem(dataKey); //pega os dados do storage
      const currentData = data ? JSON.parse(data) : []; // se tiver dados, converte para objeto, se não, retorna um array vazio
      const dataFormatted = [...currentData, newGoal]; // concatena o novo objeto com o array de objetos
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted)); // salva os dados no storage
      // AsyncStorage.removeItem('@mobile:goals');
      reset(); // limpa os campos do formulário
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível cadastrar a meta!");
    }
  }
  return (
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.viewModal}>
        <Text style={styles.titleModal1}>
          Quanto você quer
          investir por mês:
        </Text>

        <SafeAreaView style={styles.inputAmount}>
          <InputForm
            placeholderTextColor="#7a7a80"
            placeholder="Valor mensal:"
            name="amount"
            control={control}
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
        </SafeAreaView>

        <Text style={styles.titleModal2}>
         Dia do investimento:
        </Text>

        <SafeAreaView style={styles.inputDay}>
          <InputForm
            placeholderTextColor="#7a7a80"
            placeholder="Dia do mês:"
            name="day"
            control={control}
            editable={false}
            error={errors.day && errors.day.message}
          />
        </SafeAreaView>

        <Text style={styles.titleModal3}>
          Qual a prioridade
          da sua meta:
        </Text>

        <SafeAreaView style={styles.inputPriority}>
          <InputForm
            placeholderTextColor="#7a7a80"
            placeholder="Dia do mês:"
            name="priority"
            control={control}
            editable={false}
            error={errors.priority && errors.priority.message}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.viewNameGoal}>
            <Text style={styles.textGoal}>Nome da meta</Text>
        </SafeAreaView>

          <RectButton
            style={styles.button}
            onPress={() => {
                handleSubmit(async (data) => await handleRegister(data))();
              setIsVisible(false);
            }}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </RectButton>

        <SafeAreaView style={styles.modalPatternView}>
          <ModalPattern text="Digite o valor mensal que você deseja investir na sua meta, o dia desse investimento e a prioridade da mesma." />
        </SafeAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </Modal>
  );
}
