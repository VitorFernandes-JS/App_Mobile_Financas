import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface IViewButtonProps {
  left?: number;
  top?: number;
}

export const styles = StyleSheet.create({

});

export const viewButtonStyles = ({ top, left }: IViewButtonProps) =>
  StyleSheet.create({
    viewButton: {
      width: 13,
      height: 13,
      backgroundColor: "#1a1aff",
      borderRadius: 25,
      left,
      top,
    },
  });