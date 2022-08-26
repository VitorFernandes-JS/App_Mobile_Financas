import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    header: {
        width: 420,
        height: 200,
        borderRadius: 30,
        top: -16,
        backgroundColor: theme.colors.color2,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
    },
    avatar: {
        width: 150,
        height: 150,
        top: 120,
        marginLeft: 135,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: theme.colors.color6,
    },
    textGivenName: {
        top: 60,
        fontSize: 30,
        fontFamily: theme.fonts.font4_regular,
    },
    textFamilyName: {
        top: 70,
        fontSize: 12,
        color: theme.colors.color4,
    },
    box1: {
        width: 200,
        height: 50,
        backgroundColor: theme.colors.color5,
        borderRadius: 20,
        top: 105,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
    },
    box2: {
        width: 200,
        height: 50,
        backgroundColor: theme.colors.color5,
        borderRadius: 20,
        top: 130,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
    },
    box3: {
        width: 200,
        height: 50,
        backgroundColor: theme.colors.color5,
        borderRadius: 20,
        top: 155,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
    },
    textContactUs: {
        fontSize: 20,
        fontFamily: theme.fonts.font4_regular,
        margin: 12
    },
    developedBy: {
        fontSize: 10,
        fontFamily: theme.fonts.font4_regular,
        textAlign: 'center',
        top: 200,
    },
    iconPhone: {
        top: -33,
        marginLeft: 160
    }
});
