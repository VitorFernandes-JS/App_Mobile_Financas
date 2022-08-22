import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  box: {
    flexDirection: "row",
    width: 300,
    height: 100,
    backgroundColor: theme.colors.color6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    margin: 10,
    top: -120,
  },
  viewScroll: {
    flex: 1,
    zIndex: 1
  },
});
