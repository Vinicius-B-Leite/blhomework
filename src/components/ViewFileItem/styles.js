import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        width: 100%;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
        padding:5%;
        flex-direction: row;
        margin: 3% 0;
`;
export const FileName = styled.Text`
        margin-left: 5%;
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.lightGrey}   ;
`;