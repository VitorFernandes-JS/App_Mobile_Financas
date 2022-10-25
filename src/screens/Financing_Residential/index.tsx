import React, { useState } from "react";
import { styles } from "./styles";
import {
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";

import { Header } from "../../components/header";
import { Baseboard } from "../../components/baseboard";
import { ModalPattern } from "../../components/modalPattern";
import casa from "../../assets/casa.png";

import { useRoute } from "@react-navigation/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
interface IRouteParams {
  token: string;
}

export function Financing_Residential() {
  const route = useRoute();
  const { token } = route.params as IRouteParams;

  const [valueResidential, setValueResidential] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [time, setTime] = useState(0);
  const [fees, setFees] = useState(0);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  
  function CalculoDeParcela() {
    let valorDaCasa = Number(valueResidential);
    let rendaMensal = Number(monthlyIncome);
    let juros = Number(fees);
    let meses = Number(time);
    var parcela = 0;
    var interest = 0;

    interest = (valorDaCasa * (juros * 0.01)) / meses;
    parcela = valorDaCasa / meses + interest;
    const calculo = parcela / rendaMensal;
    console.log("Valor da parcela:", parcela);
    console.log("Valor da renda:", rendaMensal);
    console.log("Valor do teste:", calculo);

    if (calculo >= 0 && calculo <= 0.3) {
      setModal1(true);
      return;
    }
    if (calculo >= 0.31 && calculo <= 0.6) {
      setModal2(true);
      return;
    }
    setModal3(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header />

        <SafeAreaView style={styles.viewMenuModal}>
          <Text style={styles.title}>Financiamento </Text>
          <ModalPattern
            text={
              "Aqui você consegue simular um financiamento residencial! Para isso, preencha os campos abaixo e clique em 'Simular'"
            }
          />
        </SafeAreaView>

        <SafeAreaView style={styles.bodyResidentialValue}>
          <SafeAreaView style={styles.viewResidentialValue}>
            <Text style={styles.residentialValue}>Valor da Residência</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.viewResidentialValue1}>
            <Text style={styles.residentialValue1}>R$</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputInitialValue}>
            <TextInput
              keyboardType={"numeric"}
              style={styles.textInputInitialValue}
              placeholder="R$00,00"
              placeholderTextColor={"#808080"}
              maxLength={20}
              onChangeText={(value) => {
                const formatedValue = Number(value.replace(/,/, "."));
                setValueResidential(formatedValue);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.bodyValueMonth}>
          <SafeAreaView style={styles.viewValueMonth}>
            <Text style={styles.initialValueMonth}>Renda mensal</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.viewValueMonth1}>
            <Text style={styles.valueMonth1}>R$</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputValueMonth}>
            <TextInput
              keyboardType={"numeric"}
              style={styles.textInputValueMonth}
              placeholder="R$00,00"
              placeholderTextColor={"#808080"}
              maxLength={20}
              onChangeText={(text) => {
                const formatedText = Number(text.replace(/,/, "."));
                setMonthlyIncome(formatedText);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.bodyValueTime}>
          <SafeAreaView style={styles.viewValueMonth}>
            <Text style={styles.initialValueMonth}>Tempo</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.viewValueMonth1}>
            <Text style={styles.valueMonth1}>T</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputValueMonth}>
            <TextInput
              keyboardType={"numeric"}
              style={styles.textInputValueMonth}
              placeholder="10"
              placeholderTextColor={"#808080"}
              maxLength={3}
              onChangeText={(text) => {
                const formatedText = Number(text.replace(/,/, "."));
                setTime(formatedText);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.bodyValueFees}>
          <SafeAreaView style={styles.viewValueMonth}>
            <Text style={styles.initialValueMonth}>Juros</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.viewValueMonth1}>
            <Text style={styles.valueMonth1}>%</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.inputValueMonth}>
            <TextInput
              keyboardType={"numeric"}
              style={styles.textInputValueMonth}
              placeholder="10"
              placeholderTextColor={"#808080"}
              maxLength={3}
              onChangeText={(text) => {
                const formatedText = Number(text.replace(/,/, "."));
                setFees(formatedText);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>

        <RectButton
          style={styles.button}
          onPress={() => {
            CalculoDeParcela();
          }}
        >
          <Text style={styles.textButton}>CALCULAR</Text>
        </RectButton>
        <Image source={casa} style={styles.image} />
        <Baseboard token={token} />

        {/* Modal 1 */}
        <SafeAreaView>
          <Modal animationType="slide" transparent={true} visible={modal1}>
            <SafeAreaView style={styles.viewModal1}>
              <AntDesign name={"checkcircle"} size={100} color={"#26B602"} style={{top: -40}}/>
              <Text style={styles.modalSubtitle1}>Seu empréstimo será de 1% até 30% da sua renda,{`\n`} isto é muito seguro!</Text>
              <BorderlessButton
                style={styles.rectButtoncloseModalIcon1}
                onPress={() => {
                  setModal1(false);
                }}
              >
                <AntDesign name="closecircleo" color="red" size={25} />
              </BorderlessButton>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>

        {/* Modal 2 */}
        <SafeAreaView>
          <Modal animationType="slide" transparent={true} visible={modal2}>
            <SafeAreaView style={styles.viewModal2}>
            <AntDesign name={"checkcircle"} size={100} color={"#ffd900"} style={{top: -40}}/>
              <Text style={styles.modalSubtitle2}>Seu empréstimo será de 31% até 60% da sua renda,{`\n`} isto NÃO é muito seguro!</Text>
              <BorderlessButton
                style={styles.rectButtoncloseModalIcon2}
                onPress={() => {
                  setModal2(false);
                }}
              >
                <AntDesign name="closecircleo" color="red" size={25} />
              </BorderlessButton>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>

        {/* Modal 3 */}
        <SafeAreaView>
          <Modal animationType="slide" transparent={true} visible={modal3}>
            <SafeAreaView style={styles.viewModal3}>
            <AntDesign name={"checkcircle"} size={100} color={"#ff0000"} style={{top: -40}}/>
              <Text style={styles.modalSubtitle3}>Seu empréstimo é 
              {`\n`}de ALTO RISCO!</Text>
              <BorderlessButton
                style={styles.rectButtoncloseModalIcon3}
                onPress={() => {
                  setModal3(false);
                }}
              >
                <AntDesign name="closecircleo" color="red" size={25} />
              </BorderlessButton>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
