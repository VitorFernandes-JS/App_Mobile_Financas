import React, { useState } from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { styles } from "./styles";

import WalletImg from "../../assets/wallet.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxExtract } from "../../components/boxExtract";
import { Trash } from "../../components/trash";
import { Add } from "../../components/add";
import { ModalPattern } from "../../components/modalPattern";

interface IWalletProps {
  token: string;
}

interface ITransactionsWallets {
  id: string;
  value: number;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export function Wallet({ token }: IWalletProps) {
  const [transactionsWallets, setTransactionsWallets] = useState<
    ITransactionsWallets[]
  >([]);

  return (
    <SafeAreaView style={styles.container}>

      <HeaderWallet
        text="Carteira "
        value="100.000,00"
        token={token}
        img={WalletImg}
      />

      <SafeAreaView style={styles.box}>
        <Text style={styles.textEnter}>Entrada:</Text>
        <SafeAreaView style={styles.viewModal1}>
          <ModalPattern text="Essa é a ENTRADA de todos os valores no MÊS atual (Esse valor é 'reiniciado' ao fim de todos os meses)."/>
        </SafeAreaView>
        <Text style={styles.valueOpen}>R$ 4.000,00</Text>
        <SafeAreaView style={styles.line} />
        <Text style={styles.textLeft}>Saída:</Text>
        <SafeAreaView style={styles.viewModal2}>
          <ModalPattern text="Essa é a SAÍDA de todos os valores no MÊS atual (Esse valor é 'reiniciado' ao fim de todos os meses)."/>
        </SafeAreaView>
        <Text style={styles.valueLeft}>R$ 10.000,00</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <Trash />
      </SafeAreaView>
      <SafeAreaView style={styles.viewAdd} >
        <Add setTransactionsWallets={setTransactionsWallets} />
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <SafeAreaView>
          {transactionsWallets.map((transactionWallet) => (
            <BoxExtract transactionWallet={transactionWallet} />
          ))}
        </SafeAreaView>
      </ScrollView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
