import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 100,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: -90,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 3 },
    flexDirection: 'row'
  },
  textEnter: {
    margin: 13,
    fontSize: 15,
    color: "#26B602",
    fontFamily: theme.fonts.font5_medium,
    textDecorationLine: 'underline'
  },
  valueOpen: {
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 25,
    color: theme.colors.color4,
    top: 45,
    right: 85
  },
  line: {
    width: 1,
    height: 100,
    backgroundColor: theme.colors.color5,
    right: 42
  },
  textLeft: {
    margin: 13,
    fontSize: 15,
    color: "#FF0000",
    fontFamily: theme.fonts.font5_medium,
    right: 42,
    textDecorationLine: 'underline'
  },
  valueLeft: {
    width: 100,
    height: 100,
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 25,
    color: theme.colors.color4,
    top: 45,
    right: 112
  },
  body: {
    width: '100%',
  },
  viewTrash: {
    top: -110,
    left: 140
  }
});
