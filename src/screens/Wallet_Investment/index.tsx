import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
} from "react-native";
import { styles } from "./styles";

import WalletInvestmentImg from "../../assets/grafico-de-pizza.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxWalletInvestment } from "../../components/BoxWalletInvestment";
import { Wallet_InvestmentModal } from "./Wallet_InvestmentModal";
import { AddWalletInvestment } from "../../components/AddWalletInvestment";
import { BoxExtractWalletInvestment } from "../../components/BoxExtractWalletInvestment";
import { Trash } from "../../components/trash";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { apiFinances } from "../../services";
import { AntDesign } from "@expo/vector-icons";
import Emoji from "../../assets/emoji_feliz.png";
import { ButtonInformation } from "../../components/ButtonInformation";
import * as Progress from "react-native-progress";
import { theme } from "../../global/styles/theme";
interface IRouteParams {
  token: string;
}

interface ITransactionsInvestmentWallets {
  id: string;
  value: number;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IInvestments {
  id: string;
  value: number;
  dayOfInvestment: Date;
  goal_id: string;
  transaction_investment: ITransactionInvestment[];
  priority: string;
  created_at: Date;
  updated_at: Date;
}

interface ITransactionInvestment {
  id: string;
  value: number;
  description: string;
  category: string;
  investment_id: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}
export interface IGoals {
  id: string;
  name: string;
  amount: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  investment: IInvestments;
}

export function WalletInvestment() {
  const [contextGraphics, setContextGraphics] = useState(0);

  const [porcentageGoalsMonthAmount, setPorcentageGoalsMonthAmount] = useState(
    []
  );
  const [visibleModalSuccess, setVisibleModalSuccess] = useState(false);
  const [visibleModalInformationsGoals, setVisibleModalInformationsGoals] =
    useState(false);
  const [visible, setVisible] = useState(false);
  const [transactionsWalletsInvestment, setTransactionsWalletsInvestment] =
    useState<ITransactionsInvestmentWallets[]>([]);

  const [goals, setGoals] = useState<IGoals[]>([]);
  const [isActiveButtonDelete, setIsActiveButtonDelete] = useState(false);
  const [goalId, setGoalId] = useState("");
  // const [goal, setGoal] = useState<IGoals>({} as IGoals);
  const [whatIsGoalIndex, setWhatIsGoalIndex] = useState(0);
  const [investment, setInvestment] = useState<IInvestments>(
    {} as IInvestments
  );
  const investmentValue =
    goals?.[whatIsGoalIndex]?.investment?.transaction_investment?.reduce(
      (acc, item) => {
        return (acc += item.value);
      },
      0
    ) || 0;

  async function handleCreateInvestment(index: number) {
    const haveGoal = goals.length > index;
    const haveInvestment = goals?.[index]?.investment === null;

    if (!haveGoal) {
      Alert.alert("Você não cadastrou essa meta ainda!");
      return;
    }

    if (!haveInvestment) {
      setWhatIsGoalIndex(index);
      setInvestment(goals?.[index]?.investment);
      return;
    }

    setWhatIsGoalIndex(index);
    setGoalId(goals?.[index]?.id || "");
    setVisible(true);
  }

  const route = useRoute();
  const { token } = route.params as IRouteParams;

  useEffect(() => {
    apiFinances.get("/goals").then((response) => {
      setGoals(response.data.sort((a: any, b: any) => +new Date(a.created_at) - +new Date(b.created_at)));
      setPorcentageGoalsMonthAmount(
        response?.data?.map((goal: IGoals) => {
          const totalTransactionsInvesments =
            goal?.investment?.transaction_investment?.reduce(
              (acc, transactionInvestment) =>
                (acc += transactionInvestment?.value || 0),
              0
            );
          return Number(
            (totalTransactionsInvesments / goal?.investment?.value || 0).toFixed(2)
          );
        })
      );
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if (visible === true) {
      return;
    }

    apiFinances.get("/goals").then((response) => {
      setGoals(response.data.sort((a: any, b: any) => +new Date(a.created_at) - +new Date(b.created_at)));
      setPorcentageGoalsMonthAmount(
        response?.data?.map((goal: IGoals) => {
          const totalTransactionsInvesments =
            goal?.investment?.transaction_investment?.reduce(
              (acc, transactionInvestment) =>
                (acc += transactionInvestment?.value || 0),
              0
            );
          return Number(
            (totalTransactionsInvesments / goal?.investment?.value || 0).toFixed(2)
          );
        })
      );
    }).catch((error) => {
      console.log(error);
    });
  }, [visible, transactionsWalletsInvestment]);

  useEffect(() => {
    setInvestment(goals?.[whatIsGoalIndex]?.investment);
    if (investmentValue === goals?.[whatIsGoalIndex]?.amount) {
      setVisibleModalSuccess(true);
    }
  }, [goals]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWallet
        text="Investimento "
        value={investmentValue || 0}
        token={token}
        img={WalletInvestmentImg}
        textModal="Aqui você pode adicionar um investimento em cada meta, e acompanhar o seu progresso!"
      />
      <SafeAreaView style={styles.boxsWallet1}>
        <BoxWalletInvestment
          title={`Meta 1 ${goals?.[0]?.investment?.priority || ""}`}
          isSelected={whatIsGoalIndex === 0 ? true : false}
          onPress={() => {
            handleCreateInvestment(0);
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.boxsWallet2}>
        <BoxWalletInvestment
          title={`Meta 2 ${goals?.[1]?.investment?.priority || ""}`}
          isSelected={whatIsGoalIndex === 1 ? true : false}
          onPress={() => {
            handleCreateInvestment(1);
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.boxsWallet3}>
        <BoxWalletInvestment
          title={`Meta 3 ${goals?.[2]?.investment?.priority || ""}`}
          isSelected={whatIsGoalIndex === 2 ? true : false}
          onPress={() => {
            handleCreateInvestment(2);
          }}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.boxGrafic}>
        <SafeAreaView style={styles.viewChart}>
          <SafeAreaView style={styles.viewWhite} />
          <Progress.Circle
            size={150}
            thickness={10}
            progress={porcentageGoalsMonthAmount?.[whatIsGoalIndex] || 0}
            color={theme.colors.color2}
            showsText={true}
            indeterminate={false}
          />
          <SafeAreaView></SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.viewSquareAndText}>
          <SafeAreaView style={styles.squareGoal} />
          <Text style={styles.textTargetPercentage}>% meta do mês</Text>
        </SafeAreaView>

        <ButtonInformation
          onPress={() => setVisibleModalInformationsGoals(true)}
        />

        <SafeAreaView style={styles.viewAddAndTrash}>
          <SafeAreaView style={styles.add}>
            <AddWalletInvestment
              setTransactionsWalletsInvestment={
                setTransactionsWalletsInvestment
              }
              investmentId={goals?.[whatIsGoalIndex]?.investment?.id}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.trash}>
            <Trash
              onPress={() => {
                setIsActiveButtonDelete((prevState) => !prevState);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.viewScroll}>
          <ScrollView
            showsVerticalScrollIndicator={true}
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
          >
            <SafeAreaView>
              {goals?.[
                whatIsGoalIndex
              ]?.investment?.transaction_investment?.map(
                (transactionWallet) => (
                  <BoxExtractWalletInvestment
                    key={transactionWallet.id}
                    transactionWallet={transactionWallet}
                    isActiveButtonDelete={isActiveButtonDelete}
                    setVisibleModal={setVisible}
                  />
                )
              )}
            </SafeAreaView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>

      <Baseboard token={token} />
      <Wallet_InvestmentModal
        isVisible={visible}
        setIsVisible={setVisible}
        goalId={goalId}
        nameGoal={goals?.[whatIsGoalIndex]?.name}
      />
      <Modal
        visible={visibleModalSuccess}
        transparent={true}
        animationType="slide"
      >
        <SafeAreaView style={styles.modal}>
          <Text>Você atingiu sua meta!</Text>
          <Image source={Emoji} style={styles.emoji} />
        </SafeAreaView>
        <BorderlessButton
          style={styles.iconClose}
          onPress={() => {
            setVisibleModalSuccess(false);
          }}
        >
          <AntDesign name="closecircle" color="red" size={16} />
        </BorderlessButton>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModalInformationsGoals}
      >
        <SafeAreaView style={styles.viewModal}>
          <Text style={styles.modalText}>Informações</Text>
          <SafeAreaView style={styles.line}></SafeAreaView>
          <Text style={styles.modalSubtitle}></Text>
          <BorderlessButton
            style={styles.rectButtoncloseModalIcon}
            onPress={() => {
              setVisibleModalInformationsGoals(false);
            }}
          >
            <AntDesign name="closecircleo" color="red" size={25} />
          </BorderlessButton>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
