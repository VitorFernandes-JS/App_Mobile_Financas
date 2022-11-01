import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxsWallet1: {
    left: -200,
  },
  boxsWallet2: {
    left: -70,
  },
  boxsWallet3: {
    left: 60,
  },
  boxGrafic: {
    width: 375,
    height: 200,
    borderRadius: 12,
    backgroundColor: theme.colors.color5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
  buttonInformation: {
    margin: 5,
  },
  viewSquareAndText: {
    flexDirection: "row",
    top: 145
  },
  squareGoal: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: theme.colors.color2,
    left: 10
  },
  textTargetPercentage: {
    color: theme.colors.color4,
    fontSize: 10,
    fontFamily: theme.fonts.font4_regular,
    left: 15
  },
  viewAddAndTrash: {
    flexDirection: "row",
    top: -40
  },
  add: {
    left: 310
  },
  trash: {
    left: 315
  },
  viewScroll: {
  },
  scrollView: {
    top: 130,
    left: 25
  },
  contentContainer: {
    top: 135,
  },
  modal: {
    flexDirection: "row",
    width: 200,
    height: 50,
    backgroundColor: theme.colors.color6,
    borderRadius: 12,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 2, height: 2 },
    top: 350,
    left: 100
  },
  emoji: {
    width: 25,
    height: 25,
    left: 5,
  },
  iconClose: {
    top: 297,
    left: 100  
  }
});
