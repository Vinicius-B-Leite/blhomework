import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrounbColor,
        alignItems: 'center',
        paddingTop: '30%'
    },

    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    Title: {
        fontSize: theme.font.lg,
    },
    titleContrast: {
        color: theme.colors.contrast,
        fontStyle: 'italic',
        marginRight: '5%'
    },

    inputContainer:{
        width: '90%',
        flexDirection: 'row',
        backgroundColor: theme.colors.blackBackgroundColor,
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: theme.borderRadius.sm
    },
    input:{
        flex: 1,
        marginLeft: '5%'
    },
    btnShowPassword: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        width: '12%',
        borderRadius: theme.borderRadius.full,
        alignItems: 'center',
    },

    btn:{
        width: '90%',
        backgroundColor: theme.colors.contrast,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '2.5%',
        marginVertical: '4%',
        borderRadius: theme.borderRadius.sm
    },
    textBtn:{
        fontSize: theme.font.md,
        color: theme.colors.white,
    }
})