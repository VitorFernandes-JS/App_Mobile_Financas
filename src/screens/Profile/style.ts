import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    width: 420,
    height: 200,
    borderRadius: 30,
    top: -16,
    backgroundColor: theme.colors.color2,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  avatar: {
    width: 150,
    height: 150,
    top: 120,
    marginLeft: 135,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: theme.colors.color6,
  },
  textGivenName: {
    top: 60,
    fontSize: 30,
    fontFamily: theme.fonts.font4_regular,
  },
  textFamilyName: {
    top: 70,
    fontSize: 12,
    color: theme.colors.color4,
  },
  box1: {
    width: 200,
    height: 50,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 105,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  box2: {
    width: 200,
    height: 50,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 130,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  box3: {
    width: 200,
    height: 50,
    backgroundColor: theme.colors.color5,
    borderRadius: 20,
    top: 155,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  textContactUs: {
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    margin: 12,
  },
  developedBy: {
    fontSize: 10,
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 200,
  },
  iconPhone: {
    top: -33,
    marginLeft: 160,
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
