import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import AutoHeightImage from 'react-native-auto-height-image';

export const MessageContainer = styled.View` 
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: ${({ isMyMessage }) => isMyMessage ? 'flex-end' : 'flex-start'};
        margin: ${({ isMyMessage }) => isMyMessage ? '1%' : '3%'} 0;
`
export const UserName = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.grey};
        margin-bottom: 4%;
`
export const UserPhoto = styled.Image`
        width: 9%;
        height: ${({ theme }) => theme.icons.xmd};
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        margin-right: 3%;
`
export const Main = styled.View`
        max-width: 75%;
        justify-content: center;
`
export const Gradient = styled(LinearGradient)`
        padding: 2% 3%;
        align-items: center;
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md}px;
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md}px;    
        border-top-right-radius: ${({theme, isMyMessage}) => isMyMessage ? 0 : theme.borderRadius.md}px;
        border-top-left-radius: ${({theme, isMyMessage}) => isMyMessage ? theme.borderRadius.md : 0}px;
`
export const Message = styled.Text`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
`
export const MessageImage = styled(AutoHeightImage)`
        border-radius: 10;
`
