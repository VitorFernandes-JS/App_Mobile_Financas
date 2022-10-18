import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.attention_light};
  font-family: ${theme.fonts.font4_regular};
  top: 42px;
  right: 120px;
`;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
  },
textInput1: {
    width: 250,
    height: 50,
    backgroundColor: theme.colors.color5,
    borderRadius: 10,
    color: theme.colors.color1,
    paddingLeft: 10,
    position: "absolute",
    left: -125,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
  },
})