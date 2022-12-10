import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../theme';

export default function FloatButton({callback}) {
    return (
        <TouchableOpacity onPress={() => callback()} style={styles.container}>
            <Ionicons name='ios-add-outline' size={theme.icons.lg} color={theme.colors.white}/>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.contrast,
        width: Dimensions.get('screen').width / 5,
        height: Dimensions.get('screen').width / 5,
        borderRadius: theme.borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '3%',
        right: '5%'
    }
})