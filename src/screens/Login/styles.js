import styled, { css } from "styled-components";

export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor} ;
        align-items: center;
        padding-top: 30%;
`
export const TitleContainer = styled.View`
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: 10%;
`
export const Title = styled.Text`
        font-size: ${({ theme }) => theme.font.lg}px;
        color: ${({ color, theme }) => color || theme.colors.white};
`
export const TitleContrast = styled.Text`
        color: ${({ theme }) => theme.colors.contrast} ;
        font-style: italic;
        margin-right: 5%;
`
export const InputContainer = styled.View`
        width: 90%;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor} ;
        align-items: center;
        padding: 0 5%;
        margin: 2% 0;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px ;
       ${({ theme, error }) => error && css`
                border-width: 1px;
                border-color: ${theme.colors.red};
        `}
`
export const Input = styled.TextInput`
        flex: 1;
        margin-left: 5%;
`
export const BtnShowPassword = styled.TouchableOpacity`
        flex-direction: row;
        justify-content: center;
        height: 100%;
        width: 12%;
        border-radius: ${({ theme }) => theme.borderRadius.full}px ;
        align-items: center;
`
export const Btn = styled.TouchableOpacity`
        width: 90%;
        background-color: ${({ theme }) => theme.colors.contrast} ;
        justify-content: center;
        align-items: center;
        padding: 2.5% 0;
        margin: 4% 0;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px ;
`
export const TextBtn = styled.Text`
        font-size: ${({ theme }) => theme.font.md}px ;
        color: ${({ theme }) => theme.colors.white} ;
`



