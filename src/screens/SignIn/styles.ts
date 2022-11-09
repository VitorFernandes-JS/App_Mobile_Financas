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
  viewTitle: {
    flexDirection: "row",
  },
  title1: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 60,
    color: theme.colors.color2,
    shadowOpacity: 0.1,
    top: -40,
  },
  title2: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    shadowOpacity: 0.2,
    top: -25,
  },
  title3: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 60,
    color: theme.colors.color2,
    shadowOpacity: 0.1,
    top: -40,
  },
  title4: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 45,
    shadowOpacity: 0.2,
    top: -25,
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
    top: 6,
  },
  image: {
    width: 345,
    height: 345,
    top: -50,
  },
  buttonContact: {
    width: 90,
    top: 70
  },
  contactUs: {
    fontFamily: theme.fonts.font4_regular,
  },
  viewModal: {
    width: 415,
    height: 300,
    backgroundColor: theme.colors.color6,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    top: 452
  },
  titleModal: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 32,
    color: theme.colors.color2,
    top: 13,
    position: "absolute"
  },
  closeButton: {
    width: 30,
    height: 30,
    top: 20,
    right: 20,
    position: "absolute"
  },
  containerButton: {
    width: 275,
    height: 60,
    backgroundColor: theme.colors.color5,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    paddingLeft: 3,
    paddingRight: 1,
    top: 20,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0.5, height: 3 },
    marginBottom: 15,
  },
  icon: {
    width: 35,
    height: 35,
  },
  text: {
    flex: 1,
    color: theme.colors.color1,
    fontSize: 14,
    textAlign: "center",
    fontFamily: theme.fonts.font5_medium,
    top: 3
  },
  contentWrapper: {
    width: "70%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: theme.colors.color4,
    opacity: 0.9,
  },
  iconWrapper: {
    width: "28%",
    alignItems: "center",
  },
});
