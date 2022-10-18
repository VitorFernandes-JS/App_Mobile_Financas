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
  viewModal: {
    width: 280,
    height: 340,
    backgroundColor: theme.colors.color6,
    borderRadius: 25,
    left: 66.5,
    top: 270,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    justifyContent: "center",
  },
  titleModal1: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 16,
    left: 10,
    top: 35,
    color: theme.colors.color3,
    position: "absolute",
  },
  inputAmount: {
    top: -95
  },
  titleModal2: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 16,
    left: 15,
    top: 120,
    color: theme.colors.color3,
    position: "absolute",
  },
  inputDay: {
    top: -10
  },
  titleModal3: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 16,
    left: 15,
    top: 205,
    color: theme.colors.color3,
    position: "absolute",
  },
  inputPriority: {
    top: 75
  },
  viewNameGoal: {
    width: 150,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 8,
    top: -160,
    left: -65,
    alignItems: "center",
    justifyContent: "center",
  },
  textGoal: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 16,
    color: theme.colors.color6,
  },
  modalPatternView: {
    top: 255,
    right: 240,
    position: "absolute",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 5,
    top: 300,
    shadowOpacity: 0.15,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: theme.colors.color6,
    fontSize: 16,
    fontFamily: theme.fonts.font6_semiBold,
  }
});