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
    height: 250,
    backgroundColor: theme.colors.color5,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    top: 300,
    left: 62,
    margin: 20,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    top: -3.2,
  },
  line: {
    width: 250,
    height: 0.5,
    backgroundColor: theme.colors.color4,
    top: 90
  },
  modalSubtitle: {
    fontSize: 13,
    textAlign: "center",
    top: 8.5,
  },
  closeModalIcon: {
    left: 210,
    top: 100,
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
