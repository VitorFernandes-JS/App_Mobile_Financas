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
    flexDirection: "row",
  },
  textEnter: {
    margin: 13,
    fontSize: 16,
    color: "#26B602",
    fontFamily: theme.fonts.font5_medium,
  },
  valueOpen: {
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 25,
    color: theme.colors.color4,
    top: 45,
    right: 100,
  },
  viewModal1: {
    top: -37,
    right: 10,
  },
  line: {
    width: 1,
    height: 100,
    backgroundColor: theme.colors.color5,
    right: 70,
  },
  textLeft: {
    margin: 13,
    fontSize: 16,
    color: "#FF0000",
    fontFamily: theme.fonts.font5_medium,
    right: 60,
  },
  viewModal2: {
    top: -37,
    right: 70,
  },
  valueLeft: {
    width: 100,
    height: 100,
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 25,
    color: theme.colors.color4,
    top: 45,
    right: 150,
  },
  viewTrash: {
    top: -110,
    left: 140,
  },
  viewAdd: {
    top: -135,
    left: -140,
  },
  scrollView: {
    top: -90,
  },
  contentContainer: {
    top: 115,
    flex: 1,
  },
});
