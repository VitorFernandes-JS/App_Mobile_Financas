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
    margin: 13,
    fontSize: 15,
    color: "#26B602",
    fontFamily: theme.fonts.font5_medium,
  },
  valueOpen: {
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 20,
    color: theme.colors.color4
  },
});
