import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    viewModal: {
        width: 100,
        height: 100,
        backgroundColor: theme.colors.color5
    },
    question: {
     color: theme.colors.color1,
     top: 53.5,
     
    },
    borderQuestion: {
        width: 17,
        height: 17,
        backgroundColor: theme.colors.color3,
        top: 53.5,
        borderRadius: 50,
    },
    insideQuestion: {

    },
});

