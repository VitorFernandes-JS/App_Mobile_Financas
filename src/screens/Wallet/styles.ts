import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

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
    left: 140,
    position: "absolute",
  },
  textLeft: {
    margin: 13,
    fontSize: 16,
    color: "#FF0000",
    fontFamily: theme.fonts.font5_medium,
    right: 80,
    position: "absolute",
  },
  viewModal2: {
    top: -37,
    left: 210,
    position: "absolute",
  },
  valueLeft: {
    width: 100,
    height: 100,
    fontFamily: theme.fonts.font4_regular_inter,
    marginLeft: 25,
    color: theme.colors.color4,
    top: 45,
    left: 150,
    position: "absolute",
  },
  viewTrash: {
    top: -130,
    left: 140,
  },
  chart: {
    left: -30,
    top: 25,
    width: 25,
    height: 25,
    backgroundColor: "#ff6600",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  viewAdd: {
    top: -157,
    left: -140,
  },
  scrollView: {
    top: -90,
  },
  contentContainer: {
    top: 115,
    height: 800
  },
  containerModal: {
    width: 415,
    height: 650,
    top: 150,
    backgroundColor: theme.colors.color6,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.8,
    shadowOffset: { width: 2, height: 1 },
  },
  buttonClose: {
    left: 180,
    top: 15
  }
});

export const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    `;

export const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    margin-inline: 24px;
`;

export const Month = styled.Text`
    font-family: ${theme.fonts.font4_regular};
    font-size: ${RFValue(20)}px;
`;

