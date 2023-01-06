import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        width: 100%;
        height: ${Dimensions.get('screen').height / 14}px;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor} ;
        align-items: center;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        margin: 1% 0;
        padding: 0 3%;
`;
export const Avatar = styled.Image`
        width: ${Dimensions.get('screen').width / 10}px;
        height: ${Dimensions.get('screen').width / 10}px;
        border-radius: ${({ theme }) => theme.borderRadius.full}px; 
        border-width: .1px;
        border-color: ${({ theme }) => theme.colors.grey} ;
        resizeMode: cover;
`;
export const ChatName = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px ;
        color: ${({ theme }) => theme.colors.text} ;
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
        color: ${({ theme }) => theme.colors.text} ;
        padding: 2% 4%;
        border-radius:  ${({ theme }) => theme.borderRadius.full}px ;
`;
