import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 415,
    height: 106,
    top: 675,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  iconHome: {
    width: 55,
    height: 55,
    opacity: 0.6,
    top: 6,
    marginLeft: 30,
    color: theme.colors.color1,
  },
  textHome: {
    top: 2,
    marginLeft: 2,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
  },
  iconWallet: {
    width: 55,
    height: 55,
    top: -48,
    marginLeft: 110,
    color: theme.colors.color1,
    opacity: 0.6,
  },
  textWallet: {
    top: -1,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
    marginLeft: -4,
  },
  borderStar: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.color2,
    borderRadius: 50,
    top: -140,
    marginLeft: 175,
  },
  borderStar1: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.color6,
    borderRadius: 50,
    top: -246,
    marginLeft: 180,
  },
  iconStar: {
    width: 37,
    height: 37,
    top: -110,
    marginLeft: 30,
    zIndex: 1,
  },
  imgStar: {
    width: 37,
    height: 37
  },
  textGoal: {
    top: -170,
    marginLeft: 188,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
    opacity: 0.6,
  },
  iconFavorite: {
    width: 55,
    height: 55,
    top: -263,
    marginLeft: 270,
    color: theme.colors.color1,
    opacity: 0.6,
  },
  textFavorite: {
    marginLeft: -6,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
  },
  iconProfile: {
    width: 55,
    height: 55,
    top: -317,
    marginLeft: 350,
    color: theme.colors.color1,
    opacity: 0.6,
  },
  textProfile: {
    marginLeft: 3,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
  },
});
