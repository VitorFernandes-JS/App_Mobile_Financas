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
  viewBoxVideo: {
    width: 350,
    height: 220,
    backgroundColor: theme.colors.color5,
    borderRadius: 15,
    top: 50,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
    zIndex: 2,
    alignItems: "center",
  },
  video: {
    width: 350,
    borderRadius: 15,
    backgroundColor: theme.colors.color3,
  },
});
