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
    marginBottom: -2,
    marginTop: 8,
  },
  iconInterrogation: {
    left: 130,
    top: -33,
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
  },
  viewInitialValue: {
    flexDirection: "row",
  },
  InitialValue: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    display: "flex",
    marginTop: 10,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94,
  },
  inputInitialValue: {
    width: "40%",
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 10,
    marginRight: 60,
  },
  timeText: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    display: "flex",
    marginTop: 17,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94,
  },
  inputTime: {
    height: 37,
    width: "23%",
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 3,
    marginRight: -18,
  },
  typeText: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    display: "flex",
    marginTop: 17,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94,
  },
  inputType: {
    height: 37,
    width: "23%",
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 3,
    marginRight: -18,
  },
  buttonCalculate: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
    margin: 10,
  },
  textCalculate: {
    color: "#000",
    fontSize: 25,
    fontFamily: theme.fonts.title700,
  },
  viewModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 375,
    backgroundColor: "white",
    borderRadius: 20,
    left: 42,
    top: 172,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.7,
    shadowRadius: 14,
  },
  total: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    top: 1.5,
  },
  line: {
    width: 330,
    height: 1.2,
    backgroundColor: theme.colors.google,
    top: -9.5,
  },
  boxAndText: {
    margin: 1,
    alignItems: "center",
  },
  viewTopBoxSelic: {
    width: 130,
    backgroundColor: theme.colors.heading,
    borderRadius: 15,
    left: 75,
    top: 15,
    zIndex: 1,
  },
  textTopBoxSelic: {
    fontFamily: theme.fonts.text500,
    left: 8.5,
  },
  viewTopBoxIpca: {
    width: 130,
    backgroundColor: theme.colors.heading,
    borderRadius: 15,
    left: 75,
    top: 15,
    zIndex: 1,
  },
  textTopBoxIpca: {
    fontFamily: theme.fonts.text500,
    left: 13.5,
  },
  viewTopBoxCdi: {
    width: 45,
    backgroundColor: theme.colors.heading,
    borderRadius: 15,
    left: 114,
    top: 15,
    zIndex: 1,
  },
  textTopBoxCdi: {
    fontFamily: theme.fonts.text500,
    left: 11.2,
  },
  viewTopBoxSavings: {
    width: 100,
    backgroundColor: theme.colors.heading,
    borderRadius: 15,
    left: 87,
    top: 15,
    zIndex: 1,
  },
  textTopBoxSavings: {
    fontFamily: theme.fonts.text500,
    left: 11.8,
  },
  textBox: {
    padding: 8.5,
  },
  box1: {
    height: 35,
    width: 270,
    backgroundColor: "#99ff99",
    borderRadius: 8,
    margin: 7,
  },
  box2: {
    height: 35,
    width: 270,
    backgroundColor: "#ff8080",
    borderRadius: 8,
    margin: 7,
  },
  box3: {
    height: 35,
    width: 270,
    backgroundColor: "#6666ff",
    borderRadius: 8,
    margin: 7,
  },
  box4: {
    height: 35,
    width: 270,
    backgroundColor: "#ffff99",
    borderRadius: 8,
    margin: 7,
  },
  closeModalIcon: {
    top: -10,
  },
});
