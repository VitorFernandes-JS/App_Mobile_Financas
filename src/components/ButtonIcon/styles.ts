import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    icon: {
        width: 45,
        height: 45,
        
    },
    container: {
        width: '100%',    
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        flex: 1,
        color: theme.colors.google,
        fontSize: 17,
        textAlign: 'center',
    },
    contentWrapper: {
        width: '70%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: theme.colors.line,

    },
    iconWrapper: {
        width: '30%',
        alignItems: 'center'
    }
});