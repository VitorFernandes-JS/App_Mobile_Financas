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
      marginBottom: 15,
   },
   viewCalculatorAndComparator: {
      flexDirection: 'row',
   },
   buttonCalculator: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#80ffbf',
      marginLeft: 5
   },
   iconCalculator: {
      marginTop: -2,
   },
   textButtonCalculator: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title500,
      fontWeight: 'bold',
      marginTop: 10
   },
   buttonComparator: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#4d79ff',
      marginLeft: 9
   },
   iconComparator: {
      marginTop: -2,
   },
   textButtonComparator: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title500,
      fontWeight: 'bold',
      marginTop: 10
   }, 
   viewIndexesAndVideos: {
      flexDirection: 'row',
      marginTop: 15,
   },
   buttonIndexes: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#ffff33',
      marginLeft: 6
   },
   buttonVideo: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#ff4d4d',
      marginLeft: 8
   },
   viewFinancingAndLoan: {
      flexDirection: 'row',
      marginTop: 15
   },
   buttonSimulator: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#663300',
      marginLeft: 7
   },
   buttonLoan: {
      backgroundColor: '#000000',
      borderRadius: 21,
      width: 170,
      height: 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: '#33cc00',
      marginLeft: 8
   },
   
   
});