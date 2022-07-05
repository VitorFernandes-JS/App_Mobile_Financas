import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: theme.colors.color5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    paddingLeft: 3,
    paddingRight: 1,
    top: 30
  },
  icon: {
    width: 35,
    height: 35,
  },
  title: {
    flex: 1,
    color: theme.colors.color1,
    fontSize: 17,
    textAlign: "center",
    fontFamily: theme.fonts.font5_medium
  },
  contentWrapper: {
    width: "70%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: theme.colors.color4,
    opacity: 0.9,
  },
  iconWrapper: {
    width: "28%",
    alignItems: "center",
  },
});
