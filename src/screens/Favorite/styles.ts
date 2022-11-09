import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
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
    width: 370,
    height: 220,
    borderRadius: 15,
    top: 50,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
    zIndex: 2,
    alignItems: "center",
    marginBottom: 15,
  },
  video: {
    width: 350,
    borderRadius: 15,
    backgroundColor: theme.colors.color3,
  },
  trash: {
    left: 170,
    top: -15,
  },
  viewModal: {
    width: 250,
    height: 80,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: "50%",
    left: "20%",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
    alignItems: "center",
  },
  modalSubtitle: {
    top: 10,
    fontFamily: theme.fonts.font4_regular,
    fontSize: 16,
  },
  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "48%",
  },
  buttonToExclude: {
    backgroundColor: "#FF0000",
    top: 322,
    right: -115,
    padding: 5,
    width: 80,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonToCancel: {
    backgroundColor: "#26B602",
    top: 322,
    left: 100,
    padding: 5,
    width: 80,
    borderRadius: 7,
    alignItems: "center",
  },
  textToExclude: {
    color: theme.colors.color6,
  },
  textToCancel: {
    color: theme.colors.color6,
  },
  textBaseboard: {
    fontSize: 10,
    color: theme.colors.color4,
    position: "absolute",
    top: 432,
    left: 150,
  }
});
