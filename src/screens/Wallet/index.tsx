import React from "react";
import { SafeAreaView } from "react-native";

import { HeaderWallet } from "../../components/headerWallet";
import { Baseboard } from "../../components/baseboard";

interface IWalletProps {
  token: string;
}

export function Wallet({ token }: IWalletProps) {
  return (
    <SafeAreaView>
      <HeaderWallet text="Carteira " value="1000,00"/>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
