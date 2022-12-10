import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export default function Header() {

    const { user } = useContext(AuthContext)

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={{ uri: user.photoURL }} style={styles.avatar} />
                    <Text style={styles.userName} numberOfLines={1} >{user.displayName}</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.divisor} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    avatar: {
        width: '12%',
        height: '100%',
        borderRadius: theme.borderRadius.full
    },
    userName: {
        color: theme.colors.white,
        fontSize: theme.font.sm,
        marginLeft: '5%'
    },
    divisor: {
        width: '100%',
        height: '0.5%',
        backgroundColor: theme.colors.blackBackgroundColor
    }
})