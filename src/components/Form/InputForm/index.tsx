import React from "react";
import { SafeAreaView, TextInput, TextInputProps } from "react-native";
import { Error, styles } from "./styles";

import { Control, Controller } from "react-hook-form";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: any;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={styles.textInput1}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </SafeAreaView>
  );
}
