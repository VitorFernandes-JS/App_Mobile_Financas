import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    avatar: {
        width: 58,
        height: 58,
        borderRadius: 50,
        borderWidth: 3,
        marginTop: 45,
        left: 210,
        marginRight: 22,
        borderColor: 'white',
        position: 'absolute',
        zIndex: 2,
    },       
    borderAvatar: {
        backgroundColor: '#fff',
        width: 150,
        height: 58,
        borderRadius: 50,
        marginTop: 45,
        left: 210,
        marginRight: -45,
    },
    viewModal: {
        width: 130,
        height: 140,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 20,
        top: 70,
        left: 270,
        margin: 20,
        zIndex: 1,
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        top: -10
    },
    viewIconExit: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconExitForSignIn: {
        fontSize: 17,
        right: 26.5,
        transform: [{ rotate: '180deg' }]
    },
    textExitForSignIn: {
        marginTop: -17.5,
        left: 3.5,
        fontSize: 15
    },
    closeModalIcon: {
        left: 62,
        top: 10
    },
});