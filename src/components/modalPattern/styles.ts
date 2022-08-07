import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  viewModal: {
    width: 200,
    height: 200,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: "30%",
    left: "26%",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
  },
  interrogation1: {
    width: 20,
    height: 20,
    top: -1,
    opacity: 0.6,
  },
  modalText: {
    fontFamily: theme.fonts.font5_medium,
    fontSize: 20,
    textAlign: "center",
    top: 5,
  },
  line: {
    width: 200,
    height: 1.5,
    top: 7,
    backgroundColor: theme.colors.color3,
  },
  modalSubtitle: {
    margin: 10,
    top: 10,
    fontFamily: theme.fonts.font4_regular,
    textAlign: "center",
  },
  rectButtoncloseModalIcon: {
    top: 65,
    left: "45%",
  },
});

  export const viewButtonStyles = ({ top }: IViewButtonProps) =>
  StyleSheet.create({
  interrogation: {
    width: 20,
    height: 20,
    top
  },
});
