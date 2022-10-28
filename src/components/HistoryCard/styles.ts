import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

interface IContainerProps {
    borderLeftColor: string;
}

export const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: theme.colors.color1,
        fontFamily: theme.fonts.font4_regular,
        marginLeft: 10,
    },
    amount: {
        fontSize: 16,
        color: theme.colors.color1,
        fontFamily: theme.fonts.font6_semiBold,
        marginRight: 10,
    }
});

export const viewContainerStyles = ({ borderLeftColor }: IContainerProps) =>
  StyleSheet.create({
    container: {
        width: 300,
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.color5,
        justifyContent: 'space-between',
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor,
      }
  });