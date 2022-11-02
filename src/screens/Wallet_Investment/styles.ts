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
  viewSquareAndText: {
    flexDirection: "row",
    top: 180,
  },
  squareGoal: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: theme.colors.color2,
    left: 10,
  },
  textTargetPercentage: {
    color: theme.colors.color4,
    fontSize: 10,
    fontFamily: theme.fonts.font4_regular,
    left: 15,
  },
  viewAddAndTrash: {
    flexDirection: "row",
    top: -25,
  },
  add: {
    left: 310,
  },
  trash: {
    left: 315,
  },
  viewScroll: {},
  scrollView: {
    top: 145,
    left: 25,
  },
  contentContainer: {
    height: 200,
    top: 145,
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
    left: 100,
  },
  emoji: {
    width: 25,
    height: 25,
    left: 5,
  },
  iconClose: {
    top: 297,
    left: 100,
  },
  viewModal: {
    width: 200,
    height: 200,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: "30%",
    left: "26%",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
    zIndex: 1,
  },
  modalText: {
    fontFamily: theme.fonts.font5_medium,
    fontSize: 20,
    textAlign: "center",
    top: 5,
  },
  line: {
    width: 200,
    height: 1.5,
    top: 7,
    backgroundColor: theme.colors.color3,
  },
  modalSubtitle: {
    margin: 10,
    top: 10,
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
  },
  rectButtoncloseModalIcon: {
    position: "absolute",
    top: 165,
    left: "45%",
  },
});
