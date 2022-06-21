import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  container: {
    width: "100%",
    height: 60,
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    paddingLeft: 3,
    paddingRight: 1,
    marginTop: -15,
  },
  title: {
    flex: 1,
    color: theme.colors.google,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  contentWrapper: {
    width: "70%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: theme.colors.line,
    opacity: 0.9,
  },
  iconWrapper: {
    width: "28%",
    alignItems: "center",
  },
});
