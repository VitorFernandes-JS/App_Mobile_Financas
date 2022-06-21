import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    backButton: {
        left: 60
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 13,
        borderWidth: 3,
        borderColor: (theme.colors.heading),
    }
});
