import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        flex-direction: row;
        align-items: center;
        width: 100%;
        background-color: ${({theme}) => theme.colors.blackBackgroundColor} ;
        margin: 2% 0;
        height: ${() => Dimensions.get('screen').height / 14}px ;
        padding: 0 5%;
`;
export const Avatar = styled.Image`
        width: 12%;   
        height: 70%;
        border-radius: ${({theme}) => theme.borderRadius.full}px;
`;
export const ClassroomName = styled.Text`
        color: ${({theme}) => theme.colors.white};
        margin-left: 5%;
        font-size: ${({theme}) => theme.font.sm}px;
`;