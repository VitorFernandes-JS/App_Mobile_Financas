import  { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
   },
   header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
   },
   title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
   },
   viewInitialValue: {
    flexDirection: 'row'
   },
   InitialValue: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    marginTop: 10,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94
   },
   inputInitialValue: {
    width: '40%',
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 10,
    marginRight: 100
   },
   textoSelic: {
       lineHeight: 60
   }
});