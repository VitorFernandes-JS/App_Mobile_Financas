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
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 10,
    fontFamily: theme.fonts.title700,
    fontWeight: "bold",
    lineHeight: 40,
    marginTop: 85,
  },
  image: {
    width: 315,
    height: 315,
  },
});
