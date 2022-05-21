import { StyleSheet } from 'react-native';
import { cos } from 'react-native-reanimated';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 51,
        height: 51,
        borderRadius: 8,
        lineHeight: 10,
        marginRight: 22,
        alignItems: 'flex-end',
        marginTop: 30
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 8
        
    }
});