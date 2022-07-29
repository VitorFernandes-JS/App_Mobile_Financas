import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface IViewButtonProps {
    left?: number;
    top?: number;
  }

export const styles = StyleSheet.create({
    container: {
        width: 265,
        height: 400,
        backgroundColor: theme.colors.color2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        top: 70
    },
});

export const viewButtonStyles = ({ top, left }: IViewButtonProps) =>
  StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: theme.colors.color5,
        left,
        top,
    }
  });