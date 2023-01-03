import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        flex: 1;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor} ;
        padding: 3%;
        align-items: center;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
`;
export const Avatar = styled.Image`
        width: 12%;
        height: 100%;
        border-radius: ${({ theme }) => theme.borderRadius.full}px; 
        border-width: .1;
        border-color: ${({ theme }) => theme.colors.grey} ;
        resizeMode: cover;
`;
export const ChatName = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px ;
        color: ${({ theme }) => theme.colors.white} ;
`;
export const LastMessage = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.grey} ;
`;
export const MessagesUnread = styled.Text`
        position: absolute;
        background-color: ${({ theme }) => theme.colors.contrast} ;
        right: -25;
        top: 20%;
        font-size:  ${({ theme }) => theme.font.vsm}px;
        color: ${({ theme }) => theme.colors.white} ;
        padding: 2% 4%;
        border-radius:  ${({ theme }) => theme.borderRadius.full}px ;
`;
