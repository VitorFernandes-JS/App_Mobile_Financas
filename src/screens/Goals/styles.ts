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
    shadowRadius: 8,
  },
  textInBody: {
    fontFamily: theme.fonts.font5_medium,
    fontSize: 26,
    color: theme.colors.color6,
    top: 15,
  },
  image: {
    width: 32,
    height: 32,
    marginLeft: 125,
    top: -15,
  },
  add: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.color6,
    borderRadius: 5,
    top: 175,
    left: 115,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
  },
  addImg: {
    transform: [{ rotate: "45deg" }],
    width: 25,
    height: 25,
    top: 146,
    left: 115,
    opacity: 0.7,
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
  closeModalIcon: {
    left: 235,
    top: 225,
    position: "absolute"
  },
  viewButtonAdd: {
    alignItems: "center",
    top: -19,
  },
  buttonAdd: {
    top: 113,
    width: 100,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 5,
    position: "absolute"
  },
  textAdd: {
    fontSize: 16,
    color: theme.colors.color6,
    textAlign: "center",
    top: 5,
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
  targetImg: {
    width: 35,
    height: 35,
    top: 70,
    left: 130,
  },
  moneyImg: {
    width: 35,
    height: 35,
    top: 140,
    left: 250,
    transform: [{ rotate: "310deg" }],
    position: "absolute",
  },
});
