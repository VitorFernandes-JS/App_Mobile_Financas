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
       width: 250,
       height: 100,
       borderRadius: 20,
       opacity: 0.87
   },
   textSelic: {
       lineHeight: 60,
       textAlign: 'center'
   }
});