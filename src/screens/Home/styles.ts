import  { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';



export const styles = StyleSheet.create({
   container: {
    width: '100%',
    alignItems: 'center'
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
      marginBottom: 20,
   },
   buttonCalculator: {
      backgroundColor: (theme.colors.google),
      borderRadius: 20,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: (theme.colors.heading)
   },
   iconCalculator: {
      marginTop: 2,
   },
   textButtonCalculator: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 10
      
   },
   buttonComparator: {
      marginTop: 20,
      backgroundColor: (theme.colors.google),
      borderRadius: 20,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: (theme.colors.heading)
   },
   iconComparator: {
      marginTop: 2,
   },
   textButtonComparator: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 10
   },
   buttonIndexes: {
      marginTop: 20,
      backgroundColor: (theme.colors.google),
      borderRadius: 20,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: (theme.colors.heading)
   },
   iconIndexes: {
      marginTop: 2,
   },
   textButtonIndexes: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 10
   },
   buttonVideo: {
      marginTop: 20,
      backgroundColor: (theme.colors.google),
      borderRadius: 20,
      width: 250,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: (theme.colors.heading)
   },
   iconVideo: {
      marginTop: 2,
      
   },
   textButtonVideo: {
      color: (theme.colors.heading),
      textAlign: 'center',
      fontSize: 20,
      fontFamily: theme.fonts.text500,
      marginTop: 10
      
   },

});