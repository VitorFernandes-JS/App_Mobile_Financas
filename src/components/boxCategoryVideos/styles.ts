import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
      },
    body: {
        width: 180,
        height: 200,
        backgroundColor: theme.colors.color5,
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        top: 65,
        marginBottom: 20,
    },
    boxText: {
        width: 160,
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        left: 10,
        top: 150,
        backgroundColor: theme.colors.color6,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
    },
    text: {
        fontFamily: theme.fonts.font4_regular_inter,
        color: theme.colors.color1,
        fontSize: 12,
        margin: 5
    },
    webView: {
        width: "100%",
        height: "100%",
    },
    img: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        borderRadius: 15,
        
    }
});