import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        width: 415,
        height: 250,
        backgroundColor: theme.colors.color2,
        borderRadius: 20,
        top: -15
    },
    title: {
        fontSize: 40,
        fontFamily: theme.fonts.font7_bold,
        top: 50,
        marginLeft: 20,
        color: theme.colors.color1
    },
    value: {
        width: 200,
        height: 200,
        fontSize: 25,
        fontFamily: theme.fonts.font5_medium,
        top: 50,
        marginLeft: 20,
        color: theme.colors.color5
    },
    viewTitle_Modal: {
        flexDirection: 'row',
    },
    data: {
        fontSize: 15,
        fontFamily: theme.fonts.font5_medium,
        marginLeft: 20,
        top: -117,
        color: theme.colors.color4
    }
});