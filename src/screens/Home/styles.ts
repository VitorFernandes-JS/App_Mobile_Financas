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
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 15
   },
   iconCalculator: {
      marginTop: -2,
      marginLeft: 25
   },
   textButtonCalculator: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   },
   buttonComparator: {
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 9,
      marginRight: 15
   },
   iconComparator: {
      marginTop: -2,
      marginLeft: 24
   },
   textButtonComparator: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   }, 
   viewIndexesAndVideos: {
      flexDirection: 'row',
      marginTop: 15,
   },
   buttonIndexes: {
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 6,
      marginRight: 15
   },
   iconIndexes: {
      marginTop: -2,
      marginLeft: 9
   },
   textButtonIndexes: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   }, 
   buttonVideo: {
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      marginRight: 15
   },
   iconVideo: {
      marginTop: -2,
      marginLeft: 3
   },
   textButtonVideo: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   }, 
   viewFinancingAndLoan: {
      flexDirection: 'row',
      marginTop: 15
   },
   buttonFinancing: {
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 7,
      marginRight: 15
   },
   iconFinancing: {
      marginTop: -2,
      marginLeft: 14
   },
   textButtonFinancing: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   }, 
   buttonLoan: {
      borderRadius: 21,
      width: 135,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      marginRight: 15
   },
   iconLoan: {
      marginTop: -2,
      marginLeft: 23
   },
   textButtonLoan: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.title700,
      marginTop: 10
   }, 
   
   
});