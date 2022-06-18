import  { StyleSheet } from 'react-native';
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
   showSelic:{
       width: 115,
       height: 100,
       borderRadius: 20,
       opacity: 0.87
   },
   titleSelic: {
    fontFamily: (theme.fonts.title700),
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    color: '#595959'
   },
   textSelic: {
       textAlign: 'center',
       margin: 2
   },
   textSelic1: {
    textAlign: 'center',
    margin: 2
   },
   textSelic2: {
       textAlign: 'center',
       margin: 2
   }
});