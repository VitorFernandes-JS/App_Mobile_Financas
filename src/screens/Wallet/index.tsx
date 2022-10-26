import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { styles } from "./styles";

import WalletImg from "../../assets/wallet.png";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";
import { BoxExtract } from "../../components/boxExtract";
import { Trash, ITrashProps } from "../../components/trash";
import { Add } from "../../components/add";
import { ModalPattern } from "../../components/modalPattern";
import { apiFinances } from "../../services";
interface IWalletProps {
  token: string;
}

interface ITransactionsWallets {
  id?: string;
  value: number;
  type: "deposit" | "withdraw" | string;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}
interface IWallet {
  id: string,
	value: number,
}

let depositSum = 0;
let withdrawSum = 0;

export function Wallet({ token }: IWalletProps) {
  const [transactionsWallets, setTransactionsWallets] = useState<
    ITransactionsWallets[]
  >([]);
  const [wallet, setWallet] = useState<IWallet>({} as IWallet);

  useEffect(() => {
    (async () => {
      try {
        const responseWallet = 
        await apiFinances
          .get("/wallets")
          .catch((err) => { console.log("wallet err: ", err.response.data.message) })
        const responseTransactionsWallet = 
          await apiFinances
            .get("/transactions_wallets/wallet/" + responseWallet?.data?.id)

        setWallet(responseWallet?.data)
        setTransactionsWallets(responseTransactionsWallet?.data)
      } catch (error) {
        console.log("Error: ", error)
      }
    })()
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const responseWallet = 
          await apiFinances
            .get("/wallets")
            .catch((err) => { console.log("wallet err: ", err.response.data.message) })
        
        setWallet(responseWallet?.data)
      } catch (error) {
        console.log("Error: ", error)
      }
    })()
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
        <Text style={styles.valueOpen}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(depositSum)}</Text>
        <SafeAreaView style={styles.line} />
        <Text style={styles.textLeft}>Saída:</Text>
        <SafeAreaView style={styles.viewModal2}>
          <ModalPattern text="Essa é a SAÍDA de todos os valores no MÊS atual (Esse valor é 'reiniciado' ao fim de todos os meses)." />
        </SafeAreaView>
        <Text style={styles.valueLeft}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(withdrawSum)}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.viewTrash}>
        <Trash onPress={() => { } } isActive={false}/>
      </SafeAreaView>
      <SafeAreaView style={styles.viewAdd}>
        <Add setTransactionsWallets={setTransactionsWallets} walletId={wallet.id} />
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
            />
          ))}
        </SafeAreaView>
      </ScrollView>

      <Baseboard token={token} />
    </SafeAreaView>
  );
}
