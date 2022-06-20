import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    avatar: {
        width: 58,
        height: 58,
        borderRadius: 50,
        borderWidth: 3,
        top: 45,
        left: 210,
        marginRight: 22,
        borderColor: 'white',
        position: 'absolute',
    },       
    borderAvatar: {
        backgroundColor: '#fff',
        width: 150,
        height: 58,
        borderRadius: 50,
        top: 45,
        left: 210,
        marginRight: -45,
    },
    viewModal: {
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 20,
        top: 270,
        left: 85,
        margin: 20,
        shadowColor: '#1a1a1a',
        shadowOpacity: 0.7,
        shadowRadius: 17
    },
    modalText: {
        fontSize: 33,
        textAlign: 'center',
        top: -6.5,
        fontFamily: (theme.fonts.title700)
    },
    line: {
        width: 200,
        height: 1,
        backgroundColor: (theme.colors.google),
        top: -10
    },
    viewUser: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    iconUser: {
        right: 28.5,
        fontSize: 27,
        top: 13.2
    },
    textUser: {
        fontSize: 20,
        top: -10
    },
    viewIconExit: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconExitForSignIn: {
        fontSize: 19,
        right: 35,
        transform: [{ rotate: '180deg' }],
        top: -3.7
    },
    textExitForSignIn: {
        top: -25.5,
        left: 3.5,
        fontSize: 20
    },
    closeModalIcon: {
        left: 87,
        top: -5,
    },
});