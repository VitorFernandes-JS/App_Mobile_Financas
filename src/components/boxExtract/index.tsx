import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import DropDownPicker from "react-native-dropdown-picker";

interface ITransactionWallet {
  id: string;
  value: number;
  category: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IBoxExtractProps {
  transactionWallet: ITransactionWallet
}

const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Meses");
  const [items1, setItems1] = useState([
    { label: "Meses", value: "meses" },
    { label: "Anos", value: "anos" },
  ]);

  const [items1Open, setItems1Open] = useState(false);

export function BoxExtract({ transactionWallet }: IBoxExtractProps) {
  return (
    <SafeAreaView style={styles.container} key={transactionWallet.id}>
      <SafeAreaView style={styles.box}>
        <Text>{transactionWallet.category}</Text>

        <DropDownPicker
        style={{
          borderColor: theme.colors.color5,
          width: 110,
          marginLeft: 230,
          backgroundColor: theme.colors.color5,
          borderRadius: 20,
          top: -130,
        }}
        translation={{
          PLACEHOLDER: "Selecione",
        }}
        tickIconStyle={{
          width: 10,
          height: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.color6,
          width: 100,
          height: 80,
          borderRadius: 10,
          marginLeft: 230,
          borderColor: theme.colors.color5,
          top: 100,
        }}
        textStyle={{
          fontSize: 10,
          fontFamily: theme.fonts.font4_regular,
        }}
        arrowIconStyle={{
          width: 10,
          height: 10,
        }}
        closeIconStyle={{
          width: 15,
          height: 15,
        }}
        open={open}
        value={value}
        items={items1}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems1}
      />

        <Text>{transactionWallet.description}</Text>
        <Text>{transactionWallet.value}</Text>
        <SafeAreaView style={styles.line}/>
      </SafeAreaView>
    </SafeAreaView>
  );
}
