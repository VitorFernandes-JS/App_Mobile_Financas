import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        },
        content: {
            marginTop: -77,
            paddingHorizontal: 47,
        },
        title: {
            color: theme.colors.heading,
            textAlign: 'center',
            fontSize: 40,
            marginBottom:10,
            fontFamily: theme.fonts.title700,
            lineHeight: 40,
            
        },
        image: {
            width: '100%%',
            height: 400,
        },
        subtitle: {
            color: theme.colors.heading,
            fontSize: 17,
            textAlign: 'center',
            marginBottom: 47,
            fontFamily: theme.fonts.title500,
            lineHeight: 25,
        }
});