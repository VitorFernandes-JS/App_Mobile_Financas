import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Icon, Title, Button } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type: "deposit" | "withdraw";
  isActive: boolean;
}

const icon = {
  deposit: "arrow-up-circle",
  withdraw: "arrow-down-circle",
};

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container type={type} isActive={isActive}>
      <Button  {...rest}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
      </Button>
    </Container>
  );
}