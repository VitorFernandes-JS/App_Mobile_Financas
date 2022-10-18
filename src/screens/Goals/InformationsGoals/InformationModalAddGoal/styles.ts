import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
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
});