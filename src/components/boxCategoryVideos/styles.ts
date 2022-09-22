import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  body: {
    width: 185,
    height: 200,
    backgroundColor: theme.colors.color5,
    borderRadius: 15,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    top: 65,
    marginBottom: 20,
  },
  img: {
    width: 165,
    height: 130,
    left: 9,
    position: "absolute",
    top: 10,
    overflow: 'hidden',
  },
  boxText: {
    width: 160,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    left: 10,
    top: 150,
    position: "absolute",
    backgroundColor: theme.colors.color6,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  text: {
    fontFamily: theme.fonts.font5_medium_inter,
    color: theme.colors.color1,
    fontSize: 12,
    margin: 5,
    textAlign: "center",
  },
});
