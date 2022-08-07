import React from "react";
import { SafeAreaView, Text } from "react-native";

import { Baseboard } from "../../components/baseboard";

interface IWalletProps {
  token: string;
}

export function Wallet({ token }: IWalletProps) {
  return (
    <SafeAreaView>
      <Baseboard token={token} />
    </SafeAreaView>
  );
}
