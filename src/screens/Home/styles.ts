import  { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';



export const styles = StyleSheet.create({
   container: {
    width: '100%',
    alignItems: 'center'
   },
   header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
   },
   title: {
      fontFamily: theme.fonts.title700,
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 10,
   },
   buttonCalculator: {
      backgroundColor: (theme.colors.google),
      borderRadius: 10,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
   },
   iconCalculator: {
      marginTop: 40,
      
   },
   textButtonCalculator: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 80
      
   },
   buttonComparator: {
      marginTop: 20,
      backgroundColor: (theme.colors.google),
      borderRadius: 10,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3
   },
   iconComparator: {
      marginTop: 40,
      
   },
   textButtonComparator: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 80
      
   },
});