import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
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
  boxVideo: {
    width: 335,
    height: 200,
    top: -95,
    backgroundColor: theme.colors.color5,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
  },
  boxStart: {
    width: 120,
    height: 20,
    top: 185,
    right: 10,
    backgroundColor: theme.colors.color2,
    borderRadius: 5,
    zIndex: 1,
  },
  video: {
    width: 265,
    borderRadius: 8,
    left: 35,
    top: -10,
    zIndex: 2,
  },
  start: {
    fontFamily: theme.fonts.font7_bold,
    color: theme.colors.color6,
    textAlign: "center",
    fontSize: 16,
  },
});
