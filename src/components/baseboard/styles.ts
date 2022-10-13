import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 415,
    height: 106,
    top: 670,
    backgroundColor: theme.colors.color5,
    borderRadius: 30,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  iconHome: {
    width: 55,
    height: 55,
    opacity: 0.5,
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
    opacity: 0.5,
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
    top: -195,
    marginLeft: 180,
  },
  iconStar: {
    width: 37,
    height: 37,
    borderRadius: 30,
    top: -241,
    marginLeft: 185,
  },
  imgStar: {
    width: 37,
    height: 37,
    zIndex: 1,
  },
  textGoal: {
    top: 17,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
  },
  iconFavorite: {
    width: 55,
    height: 55,
    top: -250,
    marginLeft: 270,
    color: theme.colors.color1,
    opacity: 0.5,
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
    top: -305,
    marginLeft: 350,
    color: theme.colors.color1,
    opacity: 0.5,
  },
  textProfile: {
    marginLeft: 3,
    color: theme.colors.color1,
    fontSize: 12,
    fontFamily: theme.fonts.font4_regular,
  },
});
