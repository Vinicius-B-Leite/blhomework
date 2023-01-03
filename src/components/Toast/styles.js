import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled.View`
        position: absolute;
        margin-top: 5%;
        align-items: center;
        justify-content: center;
        z-index: 4;
        width: 100%;
`;

export const Message = styled.Text`
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.font.sm}px;
        font-weight: bold;
`;