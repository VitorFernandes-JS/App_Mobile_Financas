import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  body: {
    top: -100
  },
  bodyGrafic: {
    width: 350,
    height: 200,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    position: "absolute",
    top: 420,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  box: {
    width: 350,
    height: 80,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 200,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
    position: "absolute",
  },
  box1: {
    width: 350,
    height: 80,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 300,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
    position: "absolute",
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
  viewAddNewGoal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStar: {
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 20,
    left: 40
  },
  textAddNewGoal: {
    color: theme.colors.color1,
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    position: "absolute",
    top: 26.5,
    left: 90
  },
  iconAdd: {
    top: 23,
    left: 125
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
