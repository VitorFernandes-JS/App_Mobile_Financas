import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
      },
    body: {
        width: 200,
        height: 230,
        backgroundColor: theme.colors.color5,
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        top: 65,
        
    }
});