import { Dimensions } from 'react-native'
import styled from 'styled-components/native'



const y = -Dimensions.get('screen').height / 17

export const Container = styled.View`
        position: absolute;
        top: 50%;
        left: 10%;
        height: ${Dimensions.get('screen').height / 7};
        width: 80%;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        transform: translateY(${y}px);
`
export const OptionsButton = styled.TouchableOpacity`
        justify-content: center;
        flex: 1;
        padding: 0 5% ;
`
export const ButtonText = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.white};
`
export const CloseBtn = styled.TouchableOpacity`
        position: absolute;
        top: 0;
        left: 0;
        width: ${Dimensions.get('screen').width};
        height: ${Dimensions.get('screen').height};
        z-index: -1;
        background-color: ${({ theme }) => theme.colors.backgrounbColorSecundary};
`
