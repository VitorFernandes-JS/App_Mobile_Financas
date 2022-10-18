import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

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
    top: 25,
    left: 25,
  },
  textAmountOfComments: {
    fontFamily: theme.fonts.font4_regular,
    fontSize: 14,
  },
  viewAvatar: {
    top: 50,
    left: -320,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: theme.colors.color6,
    top: -75,
    left: 365,
  }
});
