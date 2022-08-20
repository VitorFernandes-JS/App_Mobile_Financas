import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 8,
  },
  iconInterrogation: {
    left: 87,
    top: -48.5,
    color: theme.colors.heading,
  },
  viewModalInterrogation: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    left: 55,
    top: 158,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.7,
    shadowRadius: 14,
  },
  textModalInterrogation: {
    marginRight: 3,
    textAlign: "center",
    top: 12,
  },
  closeModalInterrogationIcon: {
    left: 140,
    top: 8,
  },
  viewSelicAndIpca: {
    flexDirection: "row",
  },
  showSelic: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    right: 5,
  },
  titleSelic: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textSelic: {
    textAlign: "center",
    margin: 2,
  },
  textSelic1: {
    textAlign: "center",
    margin: 2,
  },
  textSelic2: {
    textAlign: "center",
    margin: 2,
  },
  showIpca: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    left: 5,
  },
  titleIpca: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textIpca: {
    textAlign: "center",
    margin: 2,
  },
  textIpca1: {
    textAlign: "center",
    margin: 2,
  },
  textIpca2: {
    textAlign: "center",
    margin: 2,
  },
  showCdi: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    left: 15,
  },
  titleCdi: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textCdi: {
    textAlign: "center",
    margin: 2,
  },
  textCdi1: {
    textAlign: "center",
    margin: 2,
  },
  textCdi2: {
    textAlign: "center",
    margin: 2,
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
