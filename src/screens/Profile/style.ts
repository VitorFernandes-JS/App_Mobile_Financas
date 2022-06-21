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
    border: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: 'black',
        top: 40,
        width: 370,
        height: 467,
        backgroundColor: (theme.colors.heading),
        borderRadius: 20,
        left: 40
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 13,
        borderWidth: 2.5,
        borderColor: (theme.colors.heading),
        marginBottom: 90,
        top: -8
    },
    viewGivenName: {
        width: 310,
        height: 50,
        backgroundColor: '#333333',
        justifyContent: 'center',
        borderRadius: 7,
        top: -80,
        shadowColor: "#1a1a1a",
        shadowOpacity: 0.6,
        shadowRadius: 17,
        left: -7
    },
    givenName: {
        fontSize: 26.5,
        fontFamily: (theme.fonts.title500),
        textAlign: 'center',
        color: (theme.colors.heading)
    },
    name: {
        justifyContent: 'center',
        top: -60,
        width: 300,
        height: 45,
        backgroundColor: (theme.colors.google),
        borderRadius: 15,
        left: -7
    },
    familyName: {
        justifyContent: 'center',
        top: -50,
        width: 300,
        height: 45,
        backgroundColor: (theme.colors.google),
        borderRadius: 15,
        left: -7
    },
    email: {
        justifyContent: 'center',
        top: -40,
        width: 300,
        height: 45,
        backgroundColor: (theme.colors.google),
        borderRadius: 15,
        left: -7
    },
    location: {
        justifyContent: 'center',
        top: -30,
        width: 300,
        height: 45,
        backgroundColor: (theme.colors.google),
        borderRadius: 15,
        left: -7
    },
    textName: {
        fontSize: 14,
        fontFamily: (theme.fonts.title500),
        margin: 8,
        color: (theme.colors.heading)
    },
    textFamilyName: {
        fontSize: 14,
        fontFamily: (theme.fonts.title500),
        margin: 8,
        color: (theme.colors.heading)
    },
    textEmail: {
        fontSize: 14,
        fontFamily: (theme.fonts.title500),
        margin: 8,
        color: (theme.colors.heading)
    },
    textLocation: {
        fontSize: 14,
        fontFamily: (theme.fonts.title500),
        margin: 8,
        color: (theme.colors.heading)
    },
});
