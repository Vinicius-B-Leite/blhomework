import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
const { width } = Dimensions.get('screen')


export default function Skeleton({ w, h, r,  bg }) {

    const theme = useTheme()
    const x = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(x, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            })
        ).start()
    }, [])

    return (
        <View style={{ width: w, height: h, borderRadius: r, backgroundColor: bg, overflow: 'hidden', marginVertical: '3%' }}>
            <AnimatedLinearGradient
                colors={[theme.colors.blackBackgroundColor,theme.colors.backgrounbColor, theme.colors.blackBackgroundColor]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
                
                style={[,
                    {
                        width: '30%',
                        height: '100%'
                    },
                    {
                        transform:
                            [
                                {
                                    translateX: x.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-10, width]
                                    })
                                }]
                    }]}
            />
        </View>
    );
}