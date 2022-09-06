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
    top: 35,
    color: theme.colors.color4,
  },
  viewMenuModal: {
    flexDirection: "row",
  },
  body: {
    width: 250,
    height: 90,
    backgroundColor: theme.colors.color2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    top: 200,
    shadowOpacity: 0.3,
    shadowRadius: 8.5,
  },
  textInBody: {
    fontFamily: theme.fonts.font5_medium,
    fontSize: 25,
    color: theme.colors.color6,
    top: 15,
  },
  image: {
    width: 32,
    height: 32,
    marginLeft: 125,
    top: -15
  },
  add: {
    width: 32,
  }
});