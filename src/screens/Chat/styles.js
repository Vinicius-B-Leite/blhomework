import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor};
`

export const Header = styled.TouchableOpacity`
        padding: 5%;
`

export const HeaderTitle = styled.Text`
        font-size: ${({ theme }) => theme.font.md}px;
        color: ${({ theme }) => theme.colors.text} ;
`
export const Main = styled.View`
        padding: 5%;
`
export const InputContainer = styled.View`
        flex-direction: row;
        align-items: center;
        background-color:${({ theme }) => theme.colors.blackBackgroundColor} ;
        border-radius:${({ theme }) => theme.borderRadius.sm}px;
        padding: 0 5%;
`


export const Inp = styled.TextInput`
        margin-left: 5%;
        color: ${({ theme }) => theme.colors.text} ; 
        font-size: ${({ theme }) => theme.font.sm}px;
        flex: 1;
`

export const NoChats = styled.Text`
        color: ${({ theme }) => theme.colors.contrast};
        font-size: ${({ theme }) => theme.font.sm}px;
        margin-top: 5%;
`