import styled from 'styled-components/native'

export const Container = styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor};
`
export const Header = styled.View`
        flex-direction: row;
        align-items: center;
        padding: 3% 5%;
`
export const IconsGoback = styled.TouchableOpacity`
        margin-right: 5%;
`
export const Search = styled.View`
        flex-direction: row;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        justify-content: flex-end;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        padding: 0% 5%;
        width: 90%;
`
export const Input = styled.TextInput`
        flex: 1;
        color: ${({ theme }) => theme.colors.text};
        margin-right: 5%;
        font-size: ${({ theme }) => theme.font.sm}px;
`

export const Text = styled.Text`
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.font.sm}px;
        font-weight: bold;
        margin-left: ${({ml}) => ml || 0};
        line-height: ${({ theme }) => theme.font.lg}px;
`

export const CreateSubject = styled.TouchableOpacity`
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        padding: 5%;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        margin:  3% 0;
`

export const CreateSubjectText = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.text};
`