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
        opacity: 0.8,
        top: 5,
        marginLeft: 17,
        color: theme.colors.color1
    },
    textHome: {
        top: 7,
        marginLeft: 20,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    },
    iconWallet: {
        top: -45,
        marginLeft: 110,
        color: theme.colors.color1,
        opacity: 0.6,
    },
    textWallet: {
        top: -44,
        marginLeft: 109,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    },
    borderStar: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.color2,
        borderRadius: 50,
        top: -140,
        marginLeft: 175
    },
    borderStar1: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.color6,
        borderRadius: 50,
        top: -246,
        marginLeft: 180
    },
    iconStar: {
        width: 37,
        height: 37,
        top: -190,
        marginLeft: 187,
        zIndex: 1
    },
    textGoal: {
        top: -170,
        marginLeft: 188,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    },
    iconFavorite: {
        top: -260,
        marginLeft: 255,
        color: theme.colors.color1,
        opacity: 0.6,
    },
    textFavorite: {
        top: -260,
        marginLeft: 250,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    },
    iconProfile: {
        top: -315.5,
        marginLeft: 340,
        color: theme.colors.color1,
        opacity: 0.6,
    },
    textProfile: {
        top: -313.8,
        marginLeft: 347,
        color: theme.colors.color1,
        fontSize: 12,
        fontFamily: theme.fonts.font4_regular
    }
});