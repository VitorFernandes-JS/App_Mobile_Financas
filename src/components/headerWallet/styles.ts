import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: 415,
    height: 250,
    backgroundColor: theme.colors.color2,
    borderRadius: 25,
    top: -18,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0.5, height: 3 },
  },
  title: {
    fontSize: 40,
    fontFamily: theme.fonts.font7_bold,
    top: 50,
    marginLeft: 20,
    color: theme.colors.color1,
  },
  value: {
    width: 240,
    height: 200,
    fontSize: 27,
    fontFamily: theme.fonts.font6_semiBold_inter,
    top: 48,
    marginLeft: 20,
    color: theme.colors.color5,
  },
  viewTitle_Modal: {
    flexDirection: "row",
  },
  data: {
    fontSize: 15,
    fontFamily: theme.fonts.font5_medium_inter,
    marginLeft: 20,
    top: -117,
    color: theme.colors.color4,
  },
  walletImg: {
    width: 100,
    height: 100,
    top: -205,
    marginLeft: 280,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  trocaImg: {
    width: 30,
    height: 30,
    left: 10,
  },
  trocaImg1: {
    width: 30,
    height: 30,
    top: -230,
    marginLeft: 350,
  },
});
