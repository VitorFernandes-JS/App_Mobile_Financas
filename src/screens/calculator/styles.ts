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
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 13,
    marginTop: 8
   },
   viewInitialValue: {
    flexDirection: 'row'
   },
   InitialValue: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    marginTop: 10,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94
   },
   inputInitialValue: {
    width: '40%',
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 10,
    marginRight: 60,
   },
   timeText: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    marginTop: 17,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94
   },
   inputTime: {
    height: 37,
    width: '23%',
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 3,
    marginRight: -18,
   },
  feesText: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    marginTop: 17,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94
   },
   inputFees: {
    height: 37,
    width: '23%',
    borderRadius: 8,
    margin: 11,
    borderWidth: 3,
    padding: 3,
    marginRight: -18,
   },
   buttonCalculate: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    margin: 10
   },
   textCalculate: {
    color: '#000',
    fontSize: 25,
    fontFamily: theme.fonts.title700
  },
  viewModal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    left: 66.5,    
    top: 250,
    shadowColor: '#1a1a1a',
    shadowOpacity: 0.7,
    shadowRadius: 14
  },
   total: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    top: 1.5
   },
   line: {
    width: 280,
    height: 1.2,
    backgroundColor: (theme.colors.google),
    top: -9.5
   },
   box1: {
    height:35,
    width: 240,
    backgroundColor: '#ff8080',
    borderRadius: 8,
    margin: 7,
   },
   box2: {
    height:35,
    width: 240,
    backgroundColor: '#6666ff',
    borderRadius: 8,
    margin: 7,
   },
   box3: {
    height: 35,
    width: 240,
    backgroundColor: '#99ff99',
    borderRadius: 8,
    margin: 7,
   },
   textBox: {
    padding: 8.5,
    color: '#000'
   },
   closeModalIcon: {
    top: -10
  },
});