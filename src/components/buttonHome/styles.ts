import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 265,
        height: 400,
        backgroundColor: theme.colors.color2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        top: 120
    }
});