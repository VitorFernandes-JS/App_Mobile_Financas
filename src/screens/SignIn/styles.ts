import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
        },
        content: {
            marginTop: -77,
            paddingHorizontal: 50,
        },
        title: {
            color: theme.colors.heading,
            textAlign: 'center',
            fontSize: 38,
            marginBottom:10,
            fontFamily: theme.fonts.title700,
            lineHeight: 40,
            marginTop: 85,
        },
        image: {
            width: 385,
            height: 385,
        },
        subtitle: {
            color: theme.colors.heading,
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: 47,
            fontFamily: theme.fonts.title500,
            lineHeight: 25,
        }
});