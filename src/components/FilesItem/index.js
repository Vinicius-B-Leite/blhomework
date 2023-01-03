import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { Circle, G, Svg } from 'react-native-svg';
import * as S from './styles'
import { HomeworkContext } from '../../contexts/homeworkContext';
import Feather from 'react-native-vector-icons/Feather'
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';


const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function FilesItem({ item, porcentage, index }) {
    const theme = useTheme()
    const { stopSendToStorage } = useContext(HomeworkContext)
    const route = useRoute()

    const radius = Dimensions.get('screen').width / 25
    const circleCircumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(porcentage === 100 ? 100 : 0)).current
    const progressRef = useRef(null)


    function extensionFile() {
        let dotLastIndex = item.name.lastIndexOf('.')
        return item.name.slice(dotLastIndex + 1)
    }

    function animateCircle(toValue) {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animateCircle(porcentage)

        progressAnimation.addListener((value) => {
            const strokeDashoffset = circleCircumference - (circleCircumference * value.value) / 100


            if (progressRef.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        })
    }, [porcentage])

    return (
        <S.Container>

            <S.Left >
                <S.FileExtensionContainer extFile={extensionFile()}>
                    <S.FileEXT extFile={extensionFile()}>{extensionFile()}</S.FileEXT>
                </S.FileExtensionContainer>

                <View style={{ width: '80%' }}>
                    <S.Info numberOfLines={1}>{item.name}</S.Info>
                    <S.Info numberOfLines={1}>{item.size}kb</S.Info>
                </View>
            </S.Left>

            <S.Right>
                <Svg width='100%' height='60%'>
                    <G rotation='-90' origin={`${radius + 11}, ${radius + 4}`}>
                        <Circle
                            cx='50%'
                            cy='50%'
                            stroke={theme.colors.white}
                            strokeOpacity={0.3}
                            strokeWidth={2}
                            fill='transparent'
                            r={radius}
                        />
                        <AnimatedCircle
                            ref={progressRef}
                            cx='50%'
                            cy='50%'
                            stroke={theme.colors.contrast}
                            strokeWidth={2}
                            r={radius}
                            strokeDasharray={circleCircumference}
                        />
                    </G>
                </Svg>
                <S.XIcon onPress={() => stopSendToStorage({ fileName: item.name, classroomID: route.params.id, index })}>
                    <Feather name='x' size={theme.icons.sm} color={theme.colors.white} />
                </S.XIcon>

            </S.Right>

        </S.Container>
    );
}
