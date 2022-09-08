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
    top: -15
  },
  add: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.color6,
    borderRadius: 5,
    top: 175,
    left: 115,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 2},
  },
  addImg: {
    transform: [{ rotate: "45deg" }],
    width: 25,
    height: 25,
    top: 146,
    left: 119,
    opacity: 0.7,
  }
});