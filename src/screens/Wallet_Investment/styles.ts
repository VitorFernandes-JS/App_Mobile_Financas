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
    top: 120
  },
  add: {
    left: 310
  },
  trash: {
    left: 315
  }
});
