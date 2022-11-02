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
    top: 210,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    position: "absolute",
  },
  box1: {
    width: 350,
    height: 80,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 310,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
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
  viewModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 260,
    backgroundColor: theme.colors.color6,
    borderRadius: 25,
    left: 66.5,
    top: 250,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  titleModal1: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 20,
    left: 15,
    top: 20,
    color: theme.colors.color3,
    position: "absolute",
  },
  inputName: {
    top: -75
  },
  titleModal2: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 20,
    left: 15,
    top: 120,
    color: theme.colors.color3,
    position: "absolute",
  },
  inputAmount: {
    top: 25
  },
  modalPatternView: {
    top: 175,
    right: 240,
    position: "absolute",
  },
  buttonLeft1: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 5,
    top: 220,
    left: 100,
    shadowOpacity: 0.15,
    position: "absolute",
  },
  buttonRight1: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 5,
    top: 220,
    left: 150,
    shadowOpacity: 0.15,
    position: "absolute",
  },
  arrowImgLeft: {
    transform: [{ rotate: "90deg" }],
    width: 20,
    height: 20,
    opacity: 0.7,
    top: 4,
    left: 3,
  },
  arrowImgRight: {
    transform: [{ rotate: "270deg" }],
    width: 20,
    height: 20,
    opacity: 0.7,
    top: 4,
    left: 5,
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
  buttonsGoals: {
    position: "absolute",
    top: 440,
    left: 300,
  },
  viewGrafic: {
    top: 25,
    left: 100,
    position: "absolute",
  },
  viewWhite: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: theme.colors.color6,
    position: "absolute",
  }
});
