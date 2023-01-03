import styled from 'styled-components/native'

export const Options = styled.TouchableOpacity`
        flex-direction: row;
        width: 85%;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        height: 9%;
        align-items: center;
        padding: 0 2%;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        padding-right: 5%;
        margin-top: 3%;
`
export const Icons = styled.View`
        background-color: ${({ theme }) => theme.colors.disableContrast};
        height: 73%;
        width: 13%;
        justify-content: center;
        align-items: center;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        margin-right: 5%;

`
export const OptTextContainer = styled.View`
        flex-direction: row;
        justify-content: space-between;
        flex: 1;
`
export const OptText = styled.Text`
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.font.sm}px;
`