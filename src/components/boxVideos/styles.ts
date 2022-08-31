import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface IViewButtonProps {
  left?: number;
  top?: number;
}

export const styles = StyleSheet.create({
  container: {
    width: 265,
    height: 400,
    backgroundColor: theme.colors.color2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 15,
    top: 64,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
  },
  viewCalculator: {
    alignItems: "center",
  },
  iconCalculator: {
    width: 52,
    height: 52,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 2.0 },
    margin: 11.5,
  },
  textCalculator: {
    fontSize: 10,
    fontFamily: theme.fonts.font7_bold,
  },
});

export const viewButtonStyles = ({ top, left }: IViewButtonProps) =>
  StyleSheet.create({
    button: {
      width: 100,
      height: 100,
      borderRadius: 15,
      backgroundColor: theme.colors.color5,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1.5, height: 1.5 },
      left,
      top,
    },
  });
