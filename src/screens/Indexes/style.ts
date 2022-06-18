import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 8,
  },
  viewSelicAndIpca: {
    flexDirection: 'row'
  },
  showSelic: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    right: 5
  },
  titleSelic: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textSelic: {
    textAlign: "center",
    margin: 2,
  },
  textSelic1: {
    textAlign: "center",
    margin: 2,
  },
  textSelic2: {
    textAlign: "center",
    margin: 2,
  },
  showIpca: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    left: 5
  },
  titleIpca: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textIpca: {
    textAlign: "center",
    margin: 2,
  },
  textIpca1: {
    textAlign: "center",
    margin: 2,
  },
  textIpca2: {
    textAlign: "center",
    margin: 2,
  },
  showCdi: {
    width: 115,
    height: 100,
    borderRadius: 20,
    opacity: 0.87,
    left: 15
  },
  titleCdi: {
    fontFamily: theme.fonts.title700,
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    color: "#595959",
  },
  textCdi: {
    textAlign: "center",
    margin: 2,
  },
  textCdi1: {
    textAlign: "center",
    margin: 2,
  },
  textCdi2: {
    textAlign: "center",
    margin: 2,
  },
  pointBlue: {
    width: 16,
    height: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    left: 55,
    marginVertical: -12,
  },
  textFixe: {
    textAlign: 'center',
    fontSize: 13,
    left: 55,
    marginVertical: -3.7,
    color: '#fff',
  },
  pointBlue1: {
    width: 16,
    height: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    left: 177,
    marginVertical: -12,
  },
  textFixe1: {
    textAlign: 'center',
    fontSize: 13,
    left: 177,
    marginVertical: -3.7,
    color: '#fff'
  },
  pointBlue2: {
    width: 16,
    height: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    left: -72,
    marginVertical: -12,
  },
  textFixe2: {
    textAlign: 'center',
    fontSize: 13,
    left: -72,
    marginVertical: -3.7,
    color: '#fff'
  },
});
