import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 415,
    height: 100,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    margin: -10,
  },
  viewAvatar: {
    top: 60,
  },
  viewBackButton: {
    top: 87,
    marginLeft: 170,
  },
});
