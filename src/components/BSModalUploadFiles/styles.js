import styled from 'styled-components/native';

export const Container = styled.View`
        flex: 1;
`;
export const Alert = styled.View`
        color: ${({ theme }) => theme.colors.white} ;
        text-align: 'center';
        font-size: ${({ theme }) => theme.font.xsm}px ;
`;
export const ImageAlert = styled.View`
        background-color: ${({ theme }) => theme.colors.darkGreen} ;
        color: ${({ theme }) => theme.colors.green} ;
`;
export const TextAlert = styled.View`
        background-color: ${({ theme }) => theme.colors.darkYellow} ;
        color: ${({ theme }) => theme.colors.yellow} ;
`;
export const UploadContainer = styled.View`
        width: '100%';
        justify-content: 'center';
        align-items: 'center';
        border-width: 2;
        border-color: ${({ theme }) => theme.colors.contrast} ;
        border-radius: ${({ theme }) => theme.borderRadius.md}px;
        margin: '8%' 0;
        padding: '10%' 0;
        background-color: ${({ theme }) => theme.colors.contrastTrasnparent} ;
`;
export const UploadText = styled.View`
        color: ${({ theme }) => theme.colors.white} ;
        font-size: ${({ theme }) => theme.font.sm}px;
`;
