import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.color2};
  font-family: ${theme.fonts.font4_regular};
  margin: 4px;
`;

export const styles = StyleSheet.create({
textInput1: {
    width: 250,
    height: 40,
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