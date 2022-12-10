import { StyleSheet } from "react-native";
import { theme } from '../../theme'


export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.backgrounbColor,
        flex: 1,
    },
    main:{
        padding: '5%',
        marginTop: '5%'
    },
    enterClassroom:{
        fontSize: theme.font.md
    },
    enterClassroomIcon:{
        position: 'absolute',
        top: -10,
        right: '5%',
        color: theme.colors.contrast,
        paddingVertical: '1%',
        paddingHorizontal: '3%',
        fontWeight: 'bold',
        borderRadius: theme.borderRadius.full,
        fontSize: theme.font.md
    }
})