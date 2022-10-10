import React, { useState } from "react";
import { SafeAreaView, Text, Image, Modal, Alert } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import TristeImg from "../../assets/triste.png";
import AddImg from "../../assets/close.png";
import ArrowImg from "../../assets/arrow.png";
import TargetImg from "../../assets/emoji.png";
import MoneyImg from "../../assets/contas.png";
import { InputForm } from "../../components/Form/InputForm";

import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface FormData {
  name: string;
  amount: string;
}
interface IRouteParams {
  token: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  amount: Yup.number()
    .transform((_value, originalValue) =>
      Number(originalValue.replace(/,/, "."))) //converte a virgula em ponto
    .typeError("Informe um valor numérico!")
    .positive("O valor não pode ser negativo!")
    .required("O valor é obrigatório!"),
});

export function Goals() {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalPrimary, setModalPrimary] = useState(false);
  const [modalSecondary, setModalSecondary] = useState(false);
  const { token } = route.params as IRouteParams;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleInformationsGoals() {
    navigation.navigate("InformationsGoals", { token }); // navega para a tela de InformationsGoals
  }
  async function handleRegister(form: FormData) {
    const newGoal = {
      name: form.name,
      amount: form.amount,
    };

    try {
      const dataKey = "@mobile:transactions";
      const data = await AsyncStorage.getItem(dataKey); //pega os dados do storage
      const currentData = data ? JSON.parse(data) : []; // se tiver dados, converte para objeto, se não, retorna um array vazio

      const dataFormatted = [...currentData, newGoal]; // concatena o novo objeto com o array de objetos

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted)); // salva os dados no storage

      reset(); // limpa os campos do formulário

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível cadastrar a meta!");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SafeAreaView style={styles.viewMenuModal}>
        <Text style={styles.title}>Metas </Text>
        <ModalPattern
          text={
            "Aqui você encontra as principais funcionalidades do BestFinance."
          }
        />
      </SafeAreaView>

      <SafeAreaView style={styles.body}>
        <Text style={styles.textInBody}>
          Você ainda não {`\n`}
          tem metas!
        </Text>
        <Image style={styles.image} source={TristeImg} />
      </SafeAreaView>

      <RectButton
        style={styles.add}
        onPress={() => {
          setModalPrimary(true);
        }}
      ></RectButton>
      <RectButton
        onPress={() => {
          setModalPrimary(true);
        }}
      >
        <Image source={AddImg} style={styles.addImg} />
      </RectButton>

      {/* Primeiro Modal */}
      <Modal animationType="fade" transparent={true} visible={modalPrimary}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.titleModal}>Qual é sua meta?</Text>

          <InputForm
            placeholder="Nome da meta"
            name="name"
            control={control}
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <SafeAreaView style={styles.modalPatternView}>
            <ModalPattern text="Digite o nome da sua meta, para descrever ela de forma simples." />
          </SafeAreaView>

          <SafeAreaView style={styles.buttonLeft1}>
            <RectButton
              onPress={() => {
                setModalPrimary(false);
              }}
            >
              <Image source={ArrowImg} style={styles.arrowImgLeft} />
            </RectButton>
          </SafeAreaView>

          <SafeAreaView style={styles.buttonRight1}>
            <RectButton
              onPress={() => {
                setModalSecondary(true);
                setModalPrimary(false);
                handleSubmit(handleRegister);
              }}
            >
              <Image source={ArrowImg} style={styles.arrowImgRight} />
            </RectButton>
          </SafeAreaView>
          <Image source={TargetImg} style={styles.targetImg} />
        </SafeAreaView>
      </Modal>

      {/* Segundo Modal */}
      <Modal animationType="fade" transparent={true} visible={modalSecondary}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.titleModal}>Quanto irá custar?</Text>

          <SafeAreaView style={styles.viewInputForm}>   
          <InputForm
            placeholder="Preço"
            name="amount"
            control={control}
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
          </SafeAreaView>

          <SafeAreaView style={styles.modalPatternView}>
            <ModalPattern text="Digite uma estimativa de quanto sua meta vai custar." />
          </SafeAreaView>

          <SafeAreaView style={styles.buttonLeft2}>
            <RectButton
              onPress={() => {
                setModalSecondary(false);
                setModalPrimary(true);
              }}
            >
              <Image source={ArrowImg} style={styles.arrowImgLeft} />
            </RectButton>
          </SafeAreaView>

          <SafeAreaView style={styles.buttonRight2}>
            <RectButton
              onPress={() => {
                setModalSecondary(false);
                handleInformationsGoals()
              }}
            >
              <Image source={ArrowImg} style={styles.arrowImgRight} />
            </RectButton>
          </SafeAreaView>

          <Image source={MoneyImg} style={styles.moneyImg} />
        </SafeAreaView>
      </Modal>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
