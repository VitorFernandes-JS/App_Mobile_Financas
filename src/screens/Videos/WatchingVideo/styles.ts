import { theme } from './../../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 38,
    top: 35,
    color: theme.colors.color4,
  },
  viewMenuModal: {
    flexDirection: "row",
  },
  viewBoxVideo: {
    width: 350,
    height: 220,
    backgroundColor: theme.colors.color5,
    borderRadius: 15,
    top: 50,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
    zIndex: 2,
  },
  viewTitleVideo: {
    width: 250,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 8,
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  titleVideo: {
    fontFamily: theme.fonts.font5_medium,
    fontSize: 14,
    color: theme.colors.color1,
  },
  viewIconHeart: {
    width: 45,
    height: 45,
    left: -160,
    top: -7,
    transform: [{ rotate: "-15deg" }],
    zIndex: 2,
  },
  viewBoxComments: {
    width: 350,
    height: 250,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
    top: -40,
    zIndex: 1,
  },
  viewAmountOfComments: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  textAmountOfComments: {
    top: 70,
    fontFamily: theme.fonts.font4_regular_inter,
    fontSize: 14,
    left: 45
  },
  viewAvatar: {
    top: 50,
    left: -270
  },
  input: {
    width: 160,
    height: 40,
    backgroundColor: theme.colors.color6,
    top: -75,
    left: 365,
    fontSize: 12,
  },
  button: {
    width: 30,
    height: 20,
    backgroundColor: theme.colors.color2,
    left: 250,
    top: -55,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 12,
    color: theme.colors.color6
  },
  scroll: {
    top: -20,
    width: 300,
    height: 300,
    left: 20
  },
  iconUser: {
    left: 50,
    top: 20
  },
  viewDays: {
    flexDirection: "row"
  },
  text1: {
    fontFamily: theme.fonts.font6_semiBold,
    fontSize: 16,
    left: 80
  },
  textDays: {
    fontFamily: theme.fonts.font4_regular,
    top: 3,
    fontSize: 12,
    left: 85

  },
  text2: {
    fontFamily: theme.fonts.font4_regular,
    fontSize: 12,
    left: 80
  }
});
