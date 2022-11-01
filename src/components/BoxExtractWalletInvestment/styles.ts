import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
`;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  box: {
    flexDirection: "row",
    width: 300,
    height: 100,
    backgroundColor: theme.colors.color6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    margin: 10,
    top: -120,
    justifyContent: "center",
    alignItems: "center",
  },
  closeModalIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: -5,
    right: -10,
  },
  date: {
    width: 80,
    height: 100,
    left: -1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textDate: {
    fontSize: 20,
    color: theme.colors.color4,
    fontFamily: theme.fonts.font7_bold_inter
  },
  textDateMonth: {
    fontSize: 12,
    color: theme.colors.color4,
    fontFamily: theme.fonts.font5_medium
  },
  icon: {
    color: theme.colors.color4,
    left: -63.5,
    top: -11.5,
    position: "absolute",
  },
  line: {
    width: 1,
    height: 100,
    backgroundColor: theme.colors.color5,
    position: "absolute",
    right: 220,
  },
  category: {
    fontSize: 14,
    color: theme.colors.color4,
    position: "absolute",
    top: 35,
    left: 115
  },
  description: {
    fontSize: 12,
    color: theme.colors.color4,
    position: "absolute",
    top: 50,
    left: 115
  },
  value: {
    color: "#26B602",
    left: 210,
    position: "absolute",
  },
  viewModal: {
    width: 250,
    height: 80,
    backgroundColor: theme.colors.color6,
    borderRadius: 15,
    top: "50%",
    left: "20%",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
    alignItems: "center",
  },
  modalSubtitle: {
    top: 10,
    fontFamily: theme.fonts.font4_regular,
    fontSize: 16,
  },
  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "48%",
  },
  buttonToExclude: {
    backgroundColor: "#FF0000",
    top: 322,
    right: -115,
    padding: 5,
    width: 80,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonToCancel: {
    backgroundColor: "#26B602",
    top: 322,
    left: 100,
    padding: 5,
    width: 80,
    borderRadius: 7,
    alignItems: "center",
  },
  textToExclude: {
    color: theme.colors.color6,
  },
  textToCancel: {
    color: theme.colors.color6,
  },
  textBaseboard: {
    fontSize: 10,
    color: theme.colors.color4,
    position: "absolute",
    top: 432,
    left: 150,
  }
});
