import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: -77,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.color2,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
    fontFamily: theme.fonts.font7_bold,
    lineHeight: 30,
    marginTop: 85,
  },
  image: {
    width: 345,
    height: 345,
  },
});
