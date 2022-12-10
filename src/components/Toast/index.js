import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

export default function Toast({ text, bg }) {

    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
                delay: 2000
            })
        ]).start()
    },[])

    return (
        <Animated.View style={[styles.container, { backgroundColor: bg || '#77dd77', opacity}]} >
            <Text numberOfLines={1} style={styles.messagem} >{text}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        paddingVertical: '1%',
        paddingHorizontal: '5%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.borderRadius.full
    },
    messagem: {
        color: theme.colors.white,
        fontSize: theme.font.sm,
        fontWeight: 'bold'
    }
})