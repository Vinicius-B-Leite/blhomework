import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import * as S from './styles'



export default function Toast({ text, bg, visible, onAnimatedFinished, duration }) {

    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (visible === true) {
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
                    delay: duration || 3000
                })
            ]).start(() => {
                if (onAnimatedFinished) {
                    onAnimatedFinished()
                }
            })
        }

    }, [visible])

    if (!visible) return

    return (
        <S.Container>
            <Animated.View style={{
                paddingVertical: '0.5%', paddingHorizontal: '2%', opacity, backgroundColor: bg || '#77dd77'}}>
                <S.Message numberOfLines={1} >{text}</S.Message>
            </Animated.View>

        </S.Container>
    );
}