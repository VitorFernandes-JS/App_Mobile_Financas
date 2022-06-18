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
	flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
   },
   title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 8
   },

   textSelic: {
       lineHeight: 60
   }
});