import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        width: 100%;
        border-radius: ${({theme}) => theme.borderRadius.sm}px;
        flex-direction: row;
        align-items: center;
        padding: 3%  5%;
        background-color: ${({theme}) => theme.colors.blackBackgroundColor};
`;
export const Initials = styled.Text`
        font-size: ${({theme}) =>theme.font.md}px;
        color: ${({color}) => color};
        margin-right: 5%;
`;
export const Text = styled.Text`
        font-size: ${({theme}) => theme.font.sm}px;
        color: ${({theme}) => theme.colors.white};
`;
export const DarkBackground = styled.View`
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        border-radius:  ${({theme}) =>  theme.borderRadius.sm}px;
`;