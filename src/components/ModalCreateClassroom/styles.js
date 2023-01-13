import { Dimensions } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled.View`
        flex: 1;
        background-color: ${({theme}) => theme.colors.backgrounbColorSecundary};
        padding: 5%;
        justify-content: center;
        z-index: 2;
`
export const CloseBtn = styled.TouchableOpacity `
        position: absolute;
        top: 0;
        left: 0;
        width: ${() => Dimensions.get('screen').width}px;
        height: ${() => Dimensions.get('screen').height}px;
        z-index: -1;
`
export const Main = styled.View`
        background-color: ${({theme}) => theme.colors.blackBackgroundColor};
        width: 100%;
        height: ${ Dimensions.get('screen').height / 1.5}px;
        align-items: center;
        border-radius: ${({theme}) => theme.borderRadius.md}px;
`
export const PickDocument = styled.TouchableOpacity`
        width: 40%;
        height: 27%;
        border-radius: ${({theme}) => theme.borderRadius.full}px;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: ${({theme}) => theme.colors.text};
        margin-top: 10%;
`
export const Inp = styled.TextInput`
        width: 80%;
        height: 10%;
        background-color: ${({theme}) => theme.colors.backgrounbColor};
        margin-top: 5%;
        border-radius: ${({theme}) => theme.borderRadius.sm}px;
        padding: 0 5%;
        font-size: ${({theme}) => theme.font.sm}px;
        color: ${({theme}) => theme.colors.text};
`
export const CodeContainer = styled.View`
        width: 80%;
        height: 10%;
        background-color: ${({theme}) => theme.colors.backgrounbColor};
        margin-top: 5%;
        border-radius: ${({theme}) => theme.borderRadius.sm}px;
        padding: 0 5%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size:  ${({theme}) => theme.font.sm}px;
`


export const Code = styled.Text`
        color: ${({classroomID, theme}) => classroomID ? theme.colors.white : theme.colors.grey};
`
export const CreateClassroomButton = styled.TouchableOpacity `
        width: 80%;
        background-color: ${({theme}) =>  theme.colors.contrast};
        margin-top: 20%;
        height: 10%;
        justify-content: center;
        align-items: center;
        border-radius: ${({theme}) =>  theme.borderRadius.sm}px;
`
export const CreateClassroomButtonText = styled.Text `
        color: ${({theme}) =>  theme.colors.text};
        font-size: ${({theme}) => theme.font.sm}px;
`;