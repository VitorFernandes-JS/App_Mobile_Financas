import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    header: {
        width: 420,
        height: 400,
        borderRadius: 30,
        top: -16,
        backgroundColor: theme.colors.color2,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
    },
    avatar: {
        width: 100,
        height: 100,
    }
});
