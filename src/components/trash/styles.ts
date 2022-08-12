import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: 25,
    height: 25,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTrash: {
    color: theme.colors.color6,
  },
});
