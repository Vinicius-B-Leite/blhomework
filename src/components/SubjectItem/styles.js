import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        width: 100%;
        padding: 5%;
        margin: 3% 0;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;    
        background-color: ${({theme}) => theme.colors.blackBackgroundColor};
`
export const SubjectName = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme, color }) => color || theme.colors.text};
        font-weight: bold;
`