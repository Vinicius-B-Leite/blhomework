import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components';
import * as S from './styles'


export default function FloatButton({callback}) {
    const theme = useTheme()
    return (
        <S.Container onPress={() => callback()} >
            <Ionicons name='ios-add-outline' size={theme.icons.lg} color={theme.colors.text}/>
        </S.Container>
    );
}