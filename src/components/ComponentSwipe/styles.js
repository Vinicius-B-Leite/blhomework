import styled from 'styled-components/native';

export const Container = styled.View`
        background-color: ${({theme}) => theme.colors.blackBackgroundColor} ;
        justify-content: center;
        border-radius: ${({theme}) =>theme.borderRadius.sm }px ;
        flex: 1;
        align-items: ${({alignItems}) => alignItems};
`;
