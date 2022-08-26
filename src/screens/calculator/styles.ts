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
    top: 35,
    color: theme.colors.color4,
  },
  viewMenuModal: {
    flexDirection: 'row',
  },
  bodyInitialValue: {
    alignItems: "center",
    flexDirection: "column",
    width: 300,
    height: 85,
    backgroundColor: theme.colors.color5,
    zIndex: 0,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1.5, height: 1.5 },
    top: 60,
    borderRadius: 12
  },
  viewInitialValue: {
    width: 120,
    height: 30,
    backgroundColor: theme.colors.color3,
    borderRadius: 10,
    marginLeft: -120,
    zIndex: 3,
    top: 13
  },
  initialValue: {
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    color: theme.colors.color1,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  viewInitialValue1: {
    width: 40,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 10,
    marginLeft: -195,
    zIndex: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
    top: 10
  },
  initialValue1: {
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    color: theme.colors.color1,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  inputInitialValue: {
    width: 200,
    height: 30,
    backgroundColor: theme.colors.color6,
    borderRadius: 10,
    top: -22,
    marginLeft: 30,
    zIndex: 1,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
  },
  textInputInitialValue: {
    margin: 9,
    color: theme.colors.color1,
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 15
  },
  bodyValueMonth: {
    alignItems: "center",
    flexDirection: "column",
    width: 300,
    height: 85,
    backgroundColor: theme.colors.color5,
    zIndex: 0,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1.5, height: 1.5 },
    top: 60,
    borderRadius: 12,
    marginTop: 15
  },
  viewValueMonth: {
    width: 133,
    height: 30,
    backgroundColor: theme.colors.color3,
    borderRadius: 10,
    marginLeft: -107,
    zIndex: 3,
    top: 13
  },
  initialValueMonth: {
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    color: theme.colors.color1,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  viewValueMonth1: {
    width: 40,
    height: 30,
    backgroundColor: theme.colors.color2,
    borderRadius: 10,
    marginLeft: -195,
    zIndex: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
    top: 10
  },
  valueMonth1: {
    fontSize: 20,
    fontFamily: theme.fonts.font4_regular,
    color: theme.colors.color1,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  inputValueMonth: {
    width: 200,
    height: 30,
    backgroundColor: theme.colors.color6,
    borderRadius: 10,
    top: -22,
    marginLeft: 30,
    zIndex: 1,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1.5, height: 1.5 },
  },
  textInputValueMonth: {
    margin: 9,
    color: theme.colors.color1,
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 15
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: theme.colors.color2,
    borderRadius: 10,
    marginTop: 73,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: theme.fonts.font6_semiBold,
    color: theme.colors.color6,
    marginTop: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    left: 66.5,
    top: 250,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.7,
    shadowRadius: 14,
  },
  total: {
    fontFamily: theme.fonts.font7_bold,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    top: 1.5,
  },
  line: {
    width: 280,
    height: 1.5,
    backgroundColor: theme.colors.color3,
    top: -9.5,
  },
  box1: {
    height: 35,
    width: 240,
    backgroundColor: theme.colors.color2,
    borderRadius: 8,
    margin: 7,
  },
  box2: {
    height: 35,
    width: 240,
    backgroundColor: theme.colors.color3,
    borderRadius: 8,
    margin: 7,
  },
  box3: {
    height: 35,
    width: 240,
    backgroundColor: theme.colors.color4,
    borderRadius: 8,
    margin: 7,
  },
  textBox: {
    padding: 8.5,
    color: "#000",
  },
  closeModalIcon: {
    top: -7,
  },


  // timeText: {
  //   flex: 1,
  //   flexDirection: "row",
  //   width: "50%",
  //   display: "flex",
  //   marginTop: 17,
  //   fontSize: 20,
  //   fontFamily: theme.fonts.text500,
  //   marginLeft: 94,
  // },
  // inputTime: {
  //   height: 37,
  //   width: "23%",
  //   borderRadius: 8,
  //   margin: 11,
  //   borderWidth: 3,
  //   padding: 3,
  //   marginRight: -18,
  // },
  // feesText: {
  //   flex: 1,
  //   flexDirection: "row",
  //   width: "50%",
  //   display: "flex",
  //   marginTop: 17,
  //   fontSize: 20,
  //   fontFamily: theme.fonts.text500,
  //   marginLeft: 94,
  // },
  // inputFees: {
  //   height: 37,
  //   width: "23%",
  //   borderRadius: 8,
  //   margin: 11,
  //   borderWidth: 3,
  //   padding: 3,
  //   marginRight: -18,
  // },
  // buttonCalculate: {
  //   backgroundColor: "#fff",
  //   borderRadius: 8,
  //   padding: 6,
  //   margin: 10,
  // },
  // textCalculate: {
  //   color: "#000",
  //   fontSize: 25,
  //   fontFamily: theme.fonts.title700,
  // },
});
