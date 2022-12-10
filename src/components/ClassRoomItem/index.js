import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';




export default function ClassRoomItem({ item }) {

    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Classroom', {classroomData: item})} >
            <Image source={{uri: item.avatarURL}}  style={styles.avatar}/>
            <Text numberOfLines={1} style={styles.classroomName}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: theme.colors.blackBackgroundColor,
        marginVertical: '2%',
        height: Dimensions.get('screen').height / 14,
        paddingHorizontal: '5%'
    },
    avatar:{
        width: '12%', 
        height: '70%',
        borderRadius: theme.borderRadius.full
    },
    classroomName:{
        color: theme.colors.white,
        marginLeft: '5%',
        fontSize: theme.font.sm
    }
})
