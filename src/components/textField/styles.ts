import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewValue: {
    top: -75,
  },
  boxGreen: {
    width: 50,
    height: 20,
    backgroundColor: theme.colors.color2,
    borderRadius: 7,
    top: 10,
    zIndex: 1,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitleValue: {
    fontSize: 14,
    fontFamily: theme.fonts.font5_medium,
    color: theme.colors.color6,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.3,
  },
  boxWhite: {
    width: 200,
    height: 30,
    backgroundColor: theme.colors.color6,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.1,
    borderRadius: 7,
  },
  textInputValue: {
    marginLeft: 60,
    top: 7,
    fontFamily: theme.fonts.font5_medium_inter,
  },
});
