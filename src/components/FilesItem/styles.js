import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
        width: 100%;
        height: ${() => Dimensions.get('screen').height / 12};
        background-color: ${({ theme }) => theme.colors.blackBackgroundColor} ;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        margin: 3% 0 ;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px ;
`;
export const Left = styled.View`
        flex-direction: row;
        align-items: center;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        width: 80%;
`;
export const FileExtensionContainer = styled.View`
        width: 15%;
        border-radius: ${({ theme }) => theme.borderRadius.sm}px;
        align-items: center;
        padding: 5% 0;
        text-align: center;
        background-color: ${({ extFile, theme }) => (extFile === 'pdf' | extFile === 'docx') ? theme.colors.darkYellow : theme.colors.darkGreen};
`;
export const FileEXT = styled.View`
        font-size: ${({ theme }) => theme.font.sm}px;
        color: ${({theme, extFile}) => (extFile === 'pdf' || extFile === 'docx') ? theme.colors.yellow : theme.colors.green};
`;
export const Info = styled.View`
        font-size: ${({ theme }) => theme.font.sm}px;
        color:  ${({ theme }) => theme.colors.white};
        width: 100%;
        margin-left: 5%;
`;
export const Right = styled.View`
        width: 18%;
        height: 100%;
        align-items: center;
        justify-content: center;
        position: relative;
`;
export const XIcon = styled.View`
        position: absolute;
        top: 32%;
        left: 29%;
        z-index: 2;
`;