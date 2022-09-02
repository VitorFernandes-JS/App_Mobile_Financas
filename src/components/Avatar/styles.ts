import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2.3,
    borderColor: theme.colors.color2,
  },
  buttonAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    top: -36,
    left: 317,
    marginRight: 22,
    backgroundColor: theme.colors.color2,
  }
});
