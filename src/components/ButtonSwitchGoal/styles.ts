import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 20,
    backgroundColor: theme.colors.color6,
    borderRadius: 5,
    margin: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontFamily: theme.fonts.font4_regular,
  }
});