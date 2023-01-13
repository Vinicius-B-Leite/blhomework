import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
        background-color: ${({ theme }) => theme.colors.backgrounbColor} ;
        flex: 1;
`
export const Main = styled.View`
        padding: 5%;
        margin-top: 5%;
`
export const EnterClassroom = styled.Text`
        font-size: ${({ theme }) => theme.font.md}px;
        color: ${({ theme }) => theme.colors.text};
        textDecorationLine: underline;
`
export const EnterClassroomIcon = styled.Text`
        position: absolute;
        top: -10px;
        right: 5%;
        color: ${({ theme }) => theme.colors.contrast};
        padding: 1% 3%;
        font-weight: bold;
        border-radius: ${({ theme }) => theme.borderRadius.full}px;
        font-size: ${({ theme }) => theme.font.md}px;
        z-index: 3;
`

