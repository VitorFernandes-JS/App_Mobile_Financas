import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 100,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: -90,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
  },
  textEnter: {
    margin: 10,
    color: "#26B602",
    fontFamily: theme.fonts.font4_regular,
  },
});
