import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 50,
        backgroundColor: theme.colors.color6,
        borderRadius: 15,
        top: -90,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 3 },
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        position: "absolute"
      },
      title: {
        color: theme.colors.color1,
        fontSize: 14,
        fontFamily: theme.fonts.font4_regular,
      }
});