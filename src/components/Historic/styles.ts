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
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHistoricInternal: {
    top: 30,
    width: 270,
    height: 170,
    borderRadius: 15,
    backgroundColor: (theme.colors.secondary),
  },
  titleHistoric: {
    top: 5,
    fontSize: 25,
    fontFamily: (theme.fonts.title500),
    marginLeft: 10,
    marginBottom: -10
  },
  iconTrash: {
    left: 240,
    top: -12,
    fontSize: 26,
    color: 'red'
  },
  textHistoricValor1: {
    top: 1,
    margin: 2,
    marginLeft: 5,
    fontSize: 11.5
  },
  lineHistoric1: {
    top: -3,
    width: 270,
    height: 1,
    backgroundColor: (theme.colors.google),
  },
  textHistoricValor2: {
    top: 8,
    margin: 2,
    marginLeft: 5,
    fontSize: 11.5
  },
  lineHistoric2: {
    top: 4,
    width: 270,
    height: 1,
    backgroundColor: (theme.colors.google),
  },
  textHistoricValor3: {
    top: 15,
    margin: 2,
    marginLeft: 5,
    fontSize: 11.5
  },
  lineHistoric3: {
    top: 11,
    width: 270,
    height: 1,
    backgroundColor: (theme.colors.google),
  },
  textHistoricValor4: {
    top: 21.5,
    margin: 2,
    marginLeft: 5,
    fontSize: 11.5
  },
  lineHistoric4: {
    top: 18,
    width: 270,
    height: 1,
    backgroundColor: (theme.colors.google),
  },
  textHistoricValor5: {
    top: 27.5,
    margin: 2,
    marginLeft: 5,
    fontSize: 11.5
  },
  lineHistoric5: {
    top: 25,
    width: 270,
    height: 1,
    backgroundColor: (theme.colors.google),
  },
});