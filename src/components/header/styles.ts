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
  textWelcome: {
    fontSize: 24,
    fontFamily: theme.fonts.font7_bold,
    top: 25,
    color: theme.colors.color3,
    marginLeft: 28,
  },
  textName: {
    fontSize: 24,
    fontFamily: theme.fonts.font7_bold,
    top: 23,
    color: theme.colors.color1,
    marginLeft: 28,
  },
  iconEmojiHappy: {
    width: 26,
    height: 25.52,
  },
});
