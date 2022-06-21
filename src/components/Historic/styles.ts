import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

lineHistoric: {
    top: 10,
    width: 300,
    height: 2,
    backgroundColor: (theme.colors.google)
  },
  viewHistoric: {
    width: 100,
    height: 100
  },
  textHistoric: {
    top: 25,
    fontSize: 25,
    fontFamily: (theme.fonts.title500)
  }
});