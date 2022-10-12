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
  bodyGrafic: {
    width: 350,
    height: 200,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    position: "absolute",
    top: 420,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
});
