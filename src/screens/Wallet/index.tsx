import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ScrollView, Modal } from "react-native";
import { styles } from "./styles";

import WalletImg from "../../assets/wallet.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxExtract } from "../../components/boxExtract";
import { Trash } from "../../components/trash";
import { Add } from "../../components/add";
import { ModalPattern } from "../../components/modalPattern";
import { apiFinances } from "../../services";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { HistoryCard } from "../../components/HistoryCard";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

interface IWalletProps {
  token: string;
}

interface ITransactionsWallets {
  id: string;
  value: number;
  type: "deposit" | "withdraw" | string;
  category: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  percent: string;
}
interface IWallet {
  id: string;
  value: number;
}

export function Wallet({ token }: IWalletProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionsWallets, setTransactionsWallets] = useState<ITransactionsWallets[]>([]);
  const [wallet, setWallet] = useState<IWallet>({} as IWallet);
  const [isActiveButtonDelete, setIsActiveButtonDelete] = useState(false);
  const [countReload, setCountReload] = useState(0)

  useEffect(() => {
    (async () => {
      try {
        const responseWallet = await apiFinances
          .get("/wallets")
          .catch((err) => {
            console.log("wallet err: ", err.response.data.message);
          });
        const responseTransactionsWallet = await apiFinances.get(
          "/transactions_wallets/wallet/" + responseWallet?.data?.id
        );

        setWallet(responseWallet?.data);
        setTransactionsWallets(responseTransactionsWallet?.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (countReload > 1) {
      return;
    }
    (async () => {
      try {
        const responseWallet = await apiFinances
          .get("/wallets")
          .catch((err) => {
            console.log("wallet err: ", err.response.data.message);
          });

        setWallet(responseWallet?.data);

        const responseTransactionsWallet = await apiFinances.get(
          "/transactions_wallets/wallet/" + responseWallet?.data?.id
        );

        setTransactionsWallets(responseTransactionsWallet?.data);
        setCountReload(prevState => prevState + 1)
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, [transactionsWallets]);

  const expensives = transactionsWallets.filter(
    (expensive: ITransactionsWallets) => expensive.type === "withdraw"
  );

  const totalExpensives = expensives.reduce((acc, expensive) => acc += expensive.value, 0);

  const dataForVictoryPie = expensives.reduce((acc, expensive) => {

    if (expensive.category === "Salário") {
      acc.Salario.y = acc.Salario.y + expensive.value
      acc.Salario.x = (acc.Salario.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Bonificacao") {
      acc.Bonificacao.y = acc.Bonificacao.y + expensive.value
      acc.Bonificacao.x = (acc.Bonificacao.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Restaurante") {
      acc.Restaurante.y = acc.Restaurante.y + expensive.value
      acc.Restaurante.x = (acc.Restaurante.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Viagem") {
      acc.Viagem.y = acc.Viagem.y + expensive.value
      acc.Viagem.x = (acc.Viagem.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Passeio") {
      acc.Passeio.y = acc.Passeio.y + expensive.value
      acc.Passeio.x = (acc.Passeio.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Farmacia") {
      acc.Farmacia.y = acc.Farmacia.y + expensive.value
      acc.Farmacia.x = (acc.Farmacia.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Mercado") {
      acc.Mercado.y = acc.Mercado.y + expensive.value
      acc.Mercado.x = (acc.Mercado.y / totalExpensives) * 100
      return acc
    }

    if (expensive.category === "Outros") {
      acc.Outros.y = acc.Outros.y + expensive.value
      acc.Outros.x = (acc.Outros.y / totalExpensives) * 100
      return acc
    }

    return acc
  }, {
    Salario: {
      x: 0,
      y: 0,
      category: "Salario",
      color: "#FF872C",
    },
    Bonificacao: {
      x: 0,
      y: 0,
      category: "Bonificacao",
      color: "#E83F5B",
    },
    Restaurante: {
      x: 0,
      y: 0,
      category: "Restaurante",
      color: "#5636D3",
    },
    Viagem: {
      x: 0,
      y: 0,
      category: "Viagem",
      color: "#d8ff2c",
    },
    Passeio: {
      x: 0,
      y: 0,
      category: "Passeio",
      color: "#ff2c2c",
    },
    Farmacia: {
      x: 0,
      y: 0,
      category: "Farmacia",
      color: "#2c2cff",
    },
    Mercado: {
      x: 0,
      y: 0,
      category: "Mercado",
      color: "#2cffca",
    },
    Outros: {
      x: 0,
      y: 0,
      category: "Outros",
      color: "#2c2c2c",
    },
  })

  const valueType = transactionsWallets.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit = acc.deposit + transaction.value;
        return acc;
      }
      if (transaction.type === "withdraw") {
        acc.withdraw = acc.withdraw - transaction.value;
        return acc;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
    }
  );

  const dataFormattedForGraphic = Object.values(dataForVictoryPie).filter((data) => data.y > 0).map(data => {
    return {
      ...data,
      x: data.x.toFixed(2) + '%',
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWallet
        text="Carteira "
        value={wallet.value}
        token={token}
        img={WalletImg}
        textModal="Aqui você tem um controle total da sua carteira, basta adicionar um gasto/ganho e começar a simular!"
      />

      <SafeAreaView style={styles.box}>
        <Text style={styles.textEnter}>Entrada:</Text>
        <SafeAreaView style={styles.viewModal1}>
          <ModalPattern text="Essa é a ENTRADA de todos os valores no MÊS atual (Esse valor é 'reiniciado' ao fim de todos os meses)." />
        </SafeAreaView>
        <Text style={styles.valueOpen}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          }).format(valueType.deposit)}
        </Text>
        <SafeAreaView style={styles.line} />
        <Text style={styles.textLeft}>Saída:</Text>
        <SafeAreaView style={styles.viewModal2}>
          <ModalPattern text="Essa é a SAÍDA de todos os valores no MÊS atual (Esse valor é 'reiniciado' ao fim de todos os meses)." />
        </SafeAreaView>
        <Text style={styles.valueLeft}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
          }).format(valueType.withdraw)}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <BorderlessButton
          style={styles.chart}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Ionicons name="ios-bar-chart-outline" size={19} color="white" />
        </BorderlessButton>
        <Trash
          onPress={() => {
            setIsActiveButtonDelete((prevState) => !prevState);
          }}
          isActive={false}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.viewAdd}>
        <Add
          setTransactionsWallets={setTransactionsWallets}
          walletId={wallet.id}
        />
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <SafeAreaView>
          {transactionsWallets?.map((transactionWallet) => (
            <BoxExtract
              key={transactionWallet.id}
              transactionWallet={transactionWallet}
              isActiveButtonDelete={isActiveButtonDelete}
              setTransactionsWallets={setTransactionsWallets}
            />
          ))}
        </SafeAreaView>
      </ScrollView>

      <Baseboard token={token} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <SafeAreaView style={styles.containerModal}>
          <BorderlessButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <AntDesign name="closecircleo" color="red" size={25} />
          </BorderlessButton>

          <ScrollView
            contentContainerStyle={{ width: "100%", alignItems: "center" }}
            showsVerticalScrollIndicator={false}
          >
            <SafeAreaView>
              <VictoryPie
                data={dataFormattedForGraphic}
                colorScale={dataFormattedForGraphic.map((data) => data.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: "bold",
                    fill: "white",
                    fontFamily: theme.fonts.font4_regular,
                  },
                }}
                labelRadius={50}
              />
            </SafeAreaView>

            {dataFormattedForGraphic.map((data, index) => (
              <HistoryCard
                key={index}
                title={data.category}
                amount={data.y}
                color={data.color}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
