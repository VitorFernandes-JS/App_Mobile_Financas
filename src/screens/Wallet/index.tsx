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
  color: string;
  percent: string;
}
interface IWallet {
  id: string;
  value: number;
}

export function Wallet({ token }: IWalletProps) {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionsWallets, setTransactionsWallets] = useState<
    ITransactionsWallets[]
  >([]);
  const [wallet, setWallet] = useState<IWallet>({} as IWallet);
  const [isActiveButtonDelete, setIsActiveButtonDelete] = useState(false);

  const expensives = transactionsWallets.filter(
      (expensive: ITransactionsWallets) => expensive.type === "withdraw"
    );

    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: ITransactionsWallets) => {
        return acumullator + Number(expensive.value);
      },
      0
    );

    const totalByCategory: CategoryData[] = [];

    transactionsWallets.category.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: ITransactionsWallets) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.value);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
      setTotalByCategories(totalByCategory);
      }
    );

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
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, [transactionsWallets]);

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
        showsVerticalScrollIndicator={true}
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
                data={totalByCategories}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: "bold",
                    fill: "black",
                  },
                }}
                labelRadius={50}
              />
            </SafeAreaView>

            <HistoryCard
              title={"Restaurante"}
              amount={"R$ 150,00"}
              color={"#f0f"}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
