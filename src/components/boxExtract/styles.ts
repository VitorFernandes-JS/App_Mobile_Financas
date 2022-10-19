import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  box: {
    flexDirection: "row",
    width: 300,
    height: 100,
    backgroundColor: theme.colors.color6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    margin: 10,
    top: -120,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: theme.colors.color4,
    left: -63.5,
    top: -11.5,
    position: "absolute",
  },
  line: {
    width: 1,
    height: 100,
    backgroundColor: theme.colors.color5,
    position: "absolute",
    right: 220,
  },
  category: {
    fontSize: 14,
    color: theme.colors.color4,
    position: "absolute",
    top: 35,
    left: 115
  },
  description: {
    fontSize: 12,
    color: theme.colors.color4,
    position: "absolute",
    top: 50,
    left: 115
  },
  valueWitdraw: {
    left: 210,
    position: "absolute",
    color: 'red',
  },
  valueDeposit: {
    left: 210,
    position: "absolute",
    color: 'green'
  }
});
