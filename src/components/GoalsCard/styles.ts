import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
body: {
    width: 350,
    height: 80,
    backgroundColor: theme.colors.color2,
    borderRadius: 20,
    top: 120,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.color5,
    borderRadius: 10,
    position: "absolute",
    top: -5,
    left: -5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  numberText: {
    color: theme.colors.color1,
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular_inter,
  },
  viewTitle: {
    marginLeft: 35,
    marginTop: 10,
  },
  title: {
    color: theme.colors.color1,
    fontSize: 16.5,
    fontFamily: theme.fonts.font6_semiBold,
  },
  fieldValue: {
    width: 170,
    height: 30,
    backgroundColor: theme.colors.color5,
    borderRadius: 10,
    position: "absolute",
    left: 180,
    top: -5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  fieldValueText: {
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular_inter,
  },
});