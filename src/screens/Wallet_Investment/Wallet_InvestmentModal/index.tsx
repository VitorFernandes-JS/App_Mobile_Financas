import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";

import { InputForm } from "../../../components/Form/InputForm";
import { ModalPattern } from "../../../components/modalPattern";
import { theme } from "../../../global/styles/theme";
import { apiFinances } from "../../../services";

import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DropDownPicker from "react-native-dropdown-picker";
import dayjs from "dayjs";
import { AntDesign } from "@expo/vector-icons";

interface FormData {
  [day: string]: any;
  [amount: number]: any;
}

interface FormData2 {
  [priority: string]: any;
}

const schema = Yup.object().shape({
  day: Yup.string(),
  priority: Yup.string(),
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
  goalId: string;
}

export function Wallet_InvestmentModal({
  isVisible,
  setIsVisible,
  goalId,
}: IWallet_InvestmentModal) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function handleRegister(form: FormData | FormData2) {
    const newGoal = {
      value: form.amount,
      day: dayjs().add(1, "month").date(Number(value1)),
      priority: value2,
    };

    try {
      apiFinances
        .post("/investments", {
          value: newGoal.value,
          dayOfInvestment: newGoal.day,
          goal_id: goalId,
          priority: newGoal.priority,
        })
        .then(() => {
          setValue1("1");
          setValue2("Média");
          reset(); // limpa os campos do formulário
          setIsVisible(false);
        })
        .catch((err) => console.log("Err", err));
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível cadastrar a meta!");
    }
  }

  const [openSelectDay, setOpenSelectDay] = useState(false);
  const [openSelectPriority, setOpenSelectPriority] = useState(false);
  const [value1, setValue1] = useState("1");
  const [value2, setValue2] = useState("Média");
  const [items1, setItems1] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
  ]);
  const [items2, setItems2] = useState([
    { label: "Baixa", value: "Baixa" },
    { label: "Média", value: "Media" },
    { label: "Alta", value: "Alta" },
  ]);

  const onSelectDay = useCallback(() => {
    setOpenSelectPriority(false);
  }, []);

  const onSelectPriority = useCallback(() => {
    setOpenSelectDay(false);
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.titleModal1}>
            Quanto você quer investir por mês:
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
            Melhor dia para o investimento:
          </Text>

          <SafeAreaView style={styles.inputDay}>
            <InputForm
              placeholderTextColor="#7a7a80"
              placeholder={value1}
              name="day"
              control={control}
              editable={false}
              error={errors.day && errors.day.message}
            />
          </SafeAreaView>

          <Text style={styles.titleModal3}>Qual a prioridade da sua meta:</Text>

          <SafeAreaView style={styles.inputPriority}>
            <InputForm
              placeholderTextColor="#7a7a80"
              placeholder={value2}
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
              // setIsVisible(false);
            }}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </RectButton>

          <SafeAreaView style={styles.modalPatternView}>
            <ModalPattern text="Digite o valor mensal que você deseja investir na sua meta, o dia desse investimento e a prioridade da mesma." />
          </SafeAreaView>
        </SafeAreaView>
      </TouchableWithoutFeedback>

      <BorderlessButton
        style={styles.closeModalIcon}
        onPress={() => {
          setIsVisible(false);
        }}
      >
        <AntDesign name="closecircle" color="red" size={22} />
      </BorderlessButton>

      {/* Select do dia */}
      <SafeAreaView style={styles.viewDropDownPicker}>
        <DropDownPicker
          style={{
            borderColor: theme.colors.color5,
            width: 30,
            marginLeft: 402,
            backgroundColor: theme.colors.color5,
            borderRadius: 20,
            top: 262.5,
          }}
          translation={{
            PLACEHOLDER: "Selecione",
          }}
          tickIconStyle={{
            width: 10,
            height: 10,
            marginLeft: 10,
          }}
          dropDownContainerStyle={{
            backgroundColor: theme.colors.color6,
            width: 108,
            height: 400,
            marginLeft: 310,
            borderColor: theme.colors.color5,
            top: 130,
          }}
          textStyle={{
            fontSize: 10,
            fontFamily: theme.fonts.font4_regular,
          }}
          arrowIconStyle={{
            width: 10,
            height: 10,
            marginLeft: -10,
          }}
          closeIconStyle={{
            width: 15,
            height: 15,
          }}
          open={openSelectDay}
          onOpen={onSelectDay}
          setOpen={setOpenSelectDay}
          value={value1}
          setValue={setValue1}
          items={items1}
          setItems={setItems1}
        />
      </SafeAreaView>

      {/* Select da prioridade */}
      <SafeAreaView style={styles.viewDropDownPicker}>
        <DropDownPicker
          style={{
            borderColor: theme.colors.color5,
            width: 30,
            marginLeft: 402,
            backgroundColor: theme.colors.color5,
            borderRadius: 20,
            top: 298,
          }}
          translation={{
            PLACEHOLDER: "Selecione",
          }}
          tickIconStyle={{
            width: 10,
            height: 10,
            marginLeft: 10,
          }}
          dropDownContainerStyle={{
            backgroundColor: theme.colors.color6,
            width: 100,
            height: 120,
            marginLeft: 310,
            borderColor: theme.colors.color5,
            top: 198,
          }}
          textStyle={{
            fontSize: 10,
            fontFamily: theme.fonts.font4_regular,
          }}
          arrowIconStyle={{
            width: 10,
            height: 10,
            marginLeft: -10,
          }}
          closeIconStyle={{
            width: 15,
            height: 15,
          }}
          open={openSelectPriority}
          onOpen={onSelectPriority}
          setOpen={setOpenSelectPriority}
          value={value1}
          setValue={setValue2}
          items={items2}
          setItems={setItems2}
        />
      </SafeAreaView>
    </Modal>
  );
}
