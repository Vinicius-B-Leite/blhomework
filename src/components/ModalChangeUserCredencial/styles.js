import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColorSecundary};
`
export const Close = styled.TouchableOpacity`
        flex: 1;
`
export const Main = styled.View`
        height: ${({ theme }) => Dimensions.get('screen').height / 2}px;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
        border-top-right-radius: ${({ theme }) => theme.borderRadius.lg}px;
        align-items: center;
`
export const Title = styled.Text`
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.font.md}px;
        margin-top: 13%;
`
export const Inp = styled.TextInput`
        background-color:${({ theme }) => theme.colors.backgrounbColor};
        width: 80%;
        font-size: ${({ theme }) => theme.font.sm}px;
        padding-left: 5%;
        margin-top: 5%;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
`
export const Btn = styled.TouchableOpacity`
        width: 80%;
        background-color: ${({ theme }) => theme.colors.contrast};
        justify-content: center;
        align-items: center;
        padding: 2% 0;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        margin-top: 10%;
`
export const TextBtn = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.text};
`