import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 15,
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
    width: '25%',
    borderRadius: 8,
    margin: 10,
    borderWidth: 3,
    padding: 3,
    marginRight: 23,
   },
   typeText: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    display: 'flex',
    marginTop: 17,
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    marginLeft: 94
   },
   inputType: {
    width: '25%',
    borderRadius: 8,
    margin: 10,
    borderWidth: 3,
    padding: 3,
    marginRight: 23,
   },
   line: {
    marginTop: 10,
		height: 2,
    width: 300,
    backgroundColor: '#000'
	 },
   total: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 10
   },
   boxAndText: {
    margin: 4
   },
   textTopBox: {
    fontFamily: theme.fonts.text500,
    marginHorizontal: 7
   },
   box1: {
    height:35,
    width: 300,
    backgroundColor: '#99ff99',
    borderRadius: 8,
    margin: 7
   },
   textBox: {
    padding: 8.5,
   },
   box2: {
    height:35,
    width: 300,
    backgroundColor: '#ff8080',
    borderRadius: 8,
    margin: 7
   },
   box3: {
    height:35,
    width: 300,
    backgroundColor: '#ffff99',
    borderRadius: 8,
    margin: 7
   },
   box4: {
    height:35,
    width: 300,
    backgroundColor: '#6666ff',
    borderRadius: 8,
    margin: 7
   },
});
