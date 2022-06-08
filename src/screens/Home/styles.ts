import  { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';



export const styles = StyleSheet.create({
   container: {
    width: '100%',
    alignItems: 'center',
   },
   header: {
   flexDirection: 'row',
   display: 'flex',
   justifyContent: 'space-between',
  },
   title: {
      fontFamily: theme.fonts.title700,
      fontWeight: 'bold',
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20,
   },
   buttonCalculator: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: '50%',
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#fff',
      marginLeft: 5
   },
   iconCalculator: {
      marginTop: -2,
   },
   textButtonCalculator: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 26,
      fontFamily: theme.fonts.title500,
      fontWeight: 'bold',
      marginTop: 10
   },
   buttonComparator: {
      marginTop: 20,
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 190,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#fff',
      marginLeft: 5
   },
   iconComparator: {
      marginTop: -2,
   },
   textButtonComparator: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 26,
      fontFamily: theme.fonts.title500,
      fontWeight: 'bold',
      marginTop: 10
   }, 
});