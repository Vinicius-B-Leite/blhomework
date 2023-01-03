import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'styled-components';
import * as S from './styles'



export default function ComponentSwipe({ iconName, iconColor, iconPosition = 'end' }) {
    const theme = useTheme()
    return (
        <S.Container alignItems={`flex-${iconPosition}`}>
            <AntDesign size={theme.icons.md} color={iconColor} name={iconName} style={{ marginHorizontal: '8%' }} />
        </S.Container>
    );
}