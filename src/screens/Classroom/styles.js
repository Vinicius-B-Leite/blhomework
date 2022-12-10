import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrounbColor
    },

    main: {
        padding: '5%'
    },

    task:{
        fontSize: theme.font.xmd,
        color: theme.colors.white
    },
    classroomName: {
        color: theme.colors.white,
        fontSize: theme.font.sm
    }
})