import  { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
    alignItems: 'flex-end',
   },
   header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42, 
   },
   textoSelic: {
       lineHeight: 60
   }
});