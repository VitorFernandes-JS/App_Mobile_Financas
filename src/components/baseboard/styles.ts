import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 106,
        top: 550,
        backgroundColor: theme.colors.color5,
        borderRadius: 20,
        shadowOpacity: 0.4,
        shadowOffset: {width: 1, height: 1},
    },
    iconHome: {
        width: 40,
        height: 40,
        top: 15,
        marginLeft: 15
    },
    textHome: {
        top: 10,
        marginLeft: 19,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    },
    iconPig: {
        width: 40,
        height: 40,
        top: -37,
        marginLeft: 80
    },
});