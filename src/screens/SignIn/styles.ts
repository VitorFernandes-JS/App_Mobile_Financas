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
            width: '100%',
            height: 470,
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