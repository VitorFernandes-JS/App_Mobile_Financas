import React, { useState } from "react";
import { Modal, SafeAreaView, Text, Image, Alert } from "react-native";
import { styles } from "./styles";

import { InputForm } from "../Form/InputForm";
import { ModalPattern } from "../modalPattern";
import ArrowImg from "../../assets/arrow.png";

import { RectButton } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FormData {
  [name: string]: any;
  [amount: number]: any;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  amount: Yup.number()
    .transform((_value, originalValue) =>
      Number(originalValue.replace(/,/, "."))
    ) //converte a virgula em ponto
    .typeError("Informe um valor numérico!")
    .positive("O valor não pode ser negativo!")
    .required("O valor é obrigatório!"),
});

export function ModalAddGoal() {
  const [visible, setVisible] = useState(false);
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
      name: form.name,
      amount: form.amount,
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
    <Modal animationType="fade" transparent={true} visible={visible}>
      <SafeAreaView style={styles.viewModal}>
        <Text style={styles.titleModal1}>Qual é sua meta?</Text>

        <SafeAreaView style={styles.inputName}>
          <InputForm
            placeholderTextColor="#7a7a80"
            placeholder="Nome da meta:"
            name="name"
            control={control}
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
        </SafeAreaView>

        <Text style={styles.titleModal2}>Quanto irá custar?</Text>

        <SafeAreaView style={styles.inputAmount}>
          <InputForm
            placeholderTextColor="#7a7a80"
            placeholder="Valor da Meta:"
            name="amount"
            control={control}
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
        </SafeAreaView>

        <SafeAreaView style={styles.buttonLeft1}>
          <RectButton
            onPress={() => {
              setVisible(false);
            }}
          >
            <Image source={ArrowImg} style={styles.arrowImgLeft} />
          </RectButton>
        </SafeAreaView>

        <SafeAreaView style={styles.buttonRight1}>
          <RectButton
            onPress={() => {
              handleSubmit(async (data) => await handleRegister(data))();
              setVisible(false);
            }}
          >
            <Image source={ArrowImg} style={styles.arrowImgRight} />
          </RectButton>
        </SafeAreaView>

        <SafeAreaView style={styles.modalPatternView}>
          <ModalPattern text="Digite o nome da sua meta e o valor total da mesma." />
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
}
