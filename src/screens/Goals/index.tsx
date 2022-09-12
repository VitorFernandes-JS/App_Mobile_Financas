import React, { useState } from "react";
import { SafeAreaView, Text, Image, Modal } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";
import { RectButton, TextInput } from "react-native-gesture-handler";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";

import TristeImg from "../../assets/triste.png";
import AddImg from "../../assets/close.png";
import ArrowImg from "../../assets/arrow.png";
import TargetImg from "../../assets/emoji.png";
import MoneyImg from "../../assets/contas.png";

interface IRouteParams {
  token: string;
}

export function Goals() {
  const route = useRoute();

  const { token } = route.params as IRouteParams;

  const [modalPrimary, setModalPrimary] = useState(false);
  const [modalSecondary, setModalSecondary] = useState(false);

  const [goal, setGoal] = useState("");
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header token={token} />
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

          <SafeAreaView>
            <TextInput
              style={styles.textInput1}
              placeholder="Digite o nome da meta:"
              placeholderTextColor={theme.colors.color4}
            ></TextInput>
          </SafeAreaView>

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

          <SafeAreaView>
            <TextInput
              style={styles.textInput2}
              placeholder="Digite um valor:"
              placeholderTextColor={theme.colors.color4}
            ></TextInput>
          </SafeAreaView>

          <SafeAreaView style={styles.valueField}>
            <Text style={styles.textValueField}>R$</Text>
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
