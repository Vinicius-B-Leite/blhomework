import styled from 'styled-components/native'

export const Container = styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor};
`
export const Header = styled.View`
        flex-direction: row;
        align-items: center;
        padding: 5%;
`
export const IconsGoback = styled.TouchableOpacity`
        margin-right: 5%;
`
export const Search = styled.View`
        flex-direction: row;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        flex: 1;
        justify-content: flex-end;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        padding: 0 5%;
`
export const Input = styled.TextInput`
        flex: 1;
        color: ${({ theme }) => theme.colors.text};
        margin-right: 5%;
        font-size: ${({ theme }) => theme.font.sm}px;
`