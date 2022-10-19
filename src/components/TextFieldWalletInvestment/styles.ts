import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewValue: {
    top: -25,
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
    borderRadius: 7,
  },
  textInputValue: {
    textAlign: "center",
    top: 7,
    fontSize: 13.5,
    fontFamily: theme.fonts.font5_medium_inter,
  },
  viewValue2: {
    top: -20,
    marginLeft: 10,
  },
  boxGreen2: {
    width: 75,
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
  textTitleValue2: {
    fontSize: 14,
    fontFamily: theme.fonts.font5_medium,
    color: theme.colors.color6,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.3,
  },
  boxWhite2: {
    width: 200,
    height: 30,
    backgroundColor: theme.colors.color6,
    borderRadius: 7,
  },
  textInputValue2: {
    textAlign: "center",
    top: 7,
    fontSize: 13.5,
    fontFamily: theme.fonts.font5_medium_inter,
  },
});
