import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 38,
    top: 185,
    color: theme.colors.color4,
  },
  viewMenuModal: {
    flexDirection: "column",
  },
  iconCalculator1: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: theme.colors.color5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
    left: -60,
    top: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCalculator2: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: theme.colors.color5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
    left: 60,
    top: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 52,
    height: 52,
    shadowOpacity: 0.1,
    margin: 11.5,
  },
  textCalculator: {
    fontSize: 12,
    fontFamily: theme.fonts.font7_bold,
    textAlign: "center",
    top: -5,
  },
});
