import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
        background-color: ${({theme}) =>  theme.colors.contrast};
        width:  ${() => Dimensions.get('screen').width / 5}   ;
        height: ${() => Dimensions.get('screen').width / 5}  ;
        border-radius: ${({theme}) => theme.borderRadius.full}px  ;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 3%;
        right: 5%
`;