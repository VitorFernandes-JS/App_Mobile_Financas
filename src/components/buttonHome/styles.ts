import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 252,
        height: 380,
        backgroundColor: theme.colors.color2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        top: 100
    }
});