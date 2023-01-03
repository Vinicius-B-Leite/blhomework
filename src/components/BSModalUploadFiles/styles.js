import styled from 'styled-components/native';

export const Container = styled.View``;
export const Alert = styled.Text`
        color: ${({ theme }) => theme.colors.white} ;
        text-align: center;
        font-size: ${({ theme }) => theme.font.xsm}px ;
`;
export const ImageAlert = styled.Text`
        background-color: ${({ theme }) => theme.colors.darkGreen} ;
        color: ${({ theme }) => theme.colors.green} ;
`;
export const TextAlert = styled.Text`
        background-color: ${({ theme }) => theme.colors.darkYellow} ;
        color: ${({ theme }) => theme.colors.yellow} ;
`;
export const UploadContainer = styled.TouchableOpacity`
        width: 100%;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-color: ${({ theme }) => theme.colors.contrast} ;
        border-radius: ${({ theme }) => theme.borderRadius.md}px;
        margin: 8% 0;
        padding: 10% 0;
        background-color: ${({ theme }) => theme.colors.contrastTrasnparent} ;
`;
export const UploadText = styled.Text`
        color: ${({ theme }) => theme.colors.white} ;
        font-size: ${({ theme }) => theme.font.sm}px;
`;
