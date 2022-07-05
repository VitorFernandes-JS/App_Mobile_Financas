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
  viewTitle:{
    flexDirection: "row",
  },
  title1: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    color: theme.colors.color2,
    shadowOpacity: 0.1,
    top: -40
  },
  title2: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    shadowOpacity: 0.2,
    top: -40
  },
  title3: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    color: theme.colors.color2,
    shadowOpacity: 0.1,
    top: -40
  },
  title4: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    shadowOpacity: 0.2,
    top: -40
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
    marginTop: 20,
  },
  image: {
    width: 345,
    height: 345,
    top: -40
  },
});
