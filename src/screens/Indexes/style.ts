import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 38,
    color: theme.colors.color4,
    top: 33
  },
  viewMenuModal: {
    flexDirection: "row",
    top: -105
  },
  viewSelicAndIpcaAndCdi: {
    flexDirection: "row",
  },
  showSelic: {
    width: 110,
    height: 100,
    borderRadius: 10,
    left: 55,
    backgroundColor: theme.colors.color5,
    top: 133,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0.5, height: 3 },
    zIndex: 1,
    marginLeft: 250,
  },
  titleSelic: {
    fontFamily: theme.fonts.font6_semiBold,
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    color: "#595959",
  },
  textSelic: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 6,
  },
  textSelic1: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 7,
  },
  textSelic2: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 8,
  },
  showIpca: {
    width: 110,
    height: 100,
    borderRadius: 10,
    backgroundColor: theme.colors.color5,
    top: 133,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0.5, height: 3 },
    zIndex: 1,
    left: 65,
  },
  titleIpca: {
    fontFamily: theme.fonts.font6_semiBold,
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    color: "#595959",
  },
  textIpca: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 6,
  },
  textIpca1: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 7,
  },
  textIpca2: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 8,
  },
  showCdi: {
    width: 110,
    height: 100,
    borderRadius: 10,
    left: 75,
    backgroundColor: theme.colors.color5,
    top: 133,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0.5, height: 3 },
    zIndex: 1,
  },
  titleCdi: {
    fontFamily: theme.fonts.font6_semiBold,
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    color: "#595959",
  },
  textCdi: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 6,
  },
  textCdi1: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 7,
  },
  textCdi2: {
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
    top: 8,
  },
  box: {
    width: 380,
    height: 125,
    borderRadius: 20,
    backgroundColor: theme.colors.color6,
    top: 120,
    right: 290,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0.5, height: 3 },
  },
  pointBlue1: {
    width: 16,
    height: 16,
    backgroundColor: "blue",
    borderRadius: 10,
    left: 178.9,
    marginVertical: -12,
  },
  pointBlue2: {
    width: 16,
    height: 16,
    backgroundColor: "blue",
    borderRadius: 10,
    left: -69.5,
    marginVertical: -4.4,
  },
});
