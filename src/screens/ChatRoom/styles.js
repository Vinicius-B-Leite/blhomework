import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme";
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'



export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor};
`
export const Header = styled.TouchableOpacity`
        flex-direction: row;
        align-items: center;
        height: 6%;
        margin: 3% 5%;
`
export const Avatar = styled.Image`
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        width: 10%;
        height: 100%;
        margin: 0 2%;
`
export const Title = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.white};
`
export const InputArea = styled.View`
        flex-direction: row;
        margin: 2%;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        padding: 0 3%;
        align-items: center;
`
export const Input = styled.TextInput`
        flex: 1;
        color: ${({ theme }) => theme.colors.white};
`
export const ButtonImage = styled.TouchableOpacity`
        flex-direction: row;
        height: 76%;
        width: 10%;
        align-items: center;
        justify-content: center;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        margin: 0 2%;
`
export const ButtonSendMessage = styled.TouchableOpacity`
        width: 12%;
        background-color: ${({ theme }) => theme.colors.contrast};
        flex-direction: row;
        height: 80%;
        align-items: center;
        justify-content: center;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        margin: 0 2%;

`
export const SendIcon = styled(Feather)`
        color: ${({ theme }) => theme.colors.white};
        margin-top: 3%;
`


export const SectionTitle = styled.Text`
        text-align: center;
        color: ${({ theme }) => theme.colors.grey};
`