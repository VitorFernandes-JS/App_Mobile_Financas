import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 47,
    width: 47,
    borderRadius: 50,
    alignItems: "flex-start",
    marginTop: -45,
    right: 145,
  },
  borderBackButton: {
    height: 58,
    width: 180,
    borderRadius: 50,
    marginTop: 45,
    backgroundColor: theme.colors.color6,
    right: 270,
  },
});
