import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewModal: {
    width: 250,
    height: 200,
    backgroundColor: theme.colors.color5,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    top: 280,
    left: 62,
    margin: 20,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  line: {
    width: 250,
    height: 1,
    backgroundColor: theme.colors.color6,
    top: -3,
  },
  closeModalIcon: {
    left: 210,
    top: 5,
  },
  viewButtonAdd: {
    alignItems: "center",
    top: -19,
  },
  buttonAdd: {
    width: 100,
    height: 25,
    backgroundColor: "#26B602",
    borderRadius: 5,
  },
  textAdd: {
    fontSize: 16,
    color: theme.colors.color6,
    textAlign: "center",
    top: 2,
  },
  viewInterrogation: {
    top: -107,
    left: 15,
  },
  body: {
    width: 25,
    height: 25,
    backgroundColor: "#26B602",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTrash: {
    color: theme.colors.color6,
    left: 1,
  },
});
