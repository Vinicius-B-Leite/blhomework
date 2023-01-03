import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
        width: 100%;
        height: 10%;
        padding: 3% 5%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
`;
export const Btn = styled.TouchableOpacity`
        flex-direction: row;
        align-items: center;
        height: 100%;
`;
export const Avatar = styled.Image`
        width: ${Dimensions.get('screen').width / 10}px;
        height: ${Dimensions.get('screen').width / 10}px;
        border-radius: ${({ theme }) => theme.borderRadius.full}px ;
`;
export const UserName = styled.Text`
        color: ${({ theme }) => theme.colors.white} ;
        font-size: ${({ theme }) => theme.font.sm}px;
        margin-left: 5%;
`;