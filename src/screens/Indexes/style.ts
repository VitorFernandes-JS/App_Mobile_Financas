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
   textoSelic: {
       lineHeight: 60
   }
});