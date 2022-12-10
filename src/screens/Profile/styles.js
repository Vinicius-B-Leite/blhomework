import { StyleSheet } from "react-native";
import { theme } from '../../theme/index'



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrounbColor,
    },


    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%'
    },
    headerTitle:{
        fontSize: theme.font.md,
        color: theme.colors.white,
        fontWeight: 'bold'
    },

    divisor: {
        width: '100%',
        height: '0.5%',
        backgroundColor: theme.colors.blackBackgroundColor
    },


    main:{
        paddingTop: '5%',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    avatarBtn:{
        borderRadius: theme.borderRadius.full,
        width: '30%',
        height: '20%'
    },
    avatar:{
        borderRadius: theme.borderRadius.full,
        width: '100%',
        height: '90%'
    },
    userName:{
        color: theme.colors.white,
        fontSize: theme.font.sm,
    },
    email:{
        color: theme.colors.white,
        fontSize: theme.font.sm,
        marginBottom: '5%'
    },

    options:{
        flexDirection: 'row',
        width: '85%',
        backgroundColor: theme.colors.blackBackgroundColor,
        height: '9%',
        alignItems: 'center',
        paddingHorizontal: '2%',
        borderRadius: theme.borderRadius.sm,
        paddingRight: '5%',
        marginTop: '3%'
    },
    icons:{
        backgroundColor: theme.colors.disableContrast,
        height: '73%',
        width: '13%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.borderRadius.full,
        marginRight: '5%',
    },
    optTextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    optText:{
        color: theme.colors.white,
        fontSize: theme.font.sm
    }
})