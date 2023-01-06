import styled from "styled-components";

export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.backgrounbColor};
`
export const Main = styled.View`
        padding: 5%;
`
export const Task = styled.Text`
        font-size: ${({ theme }) => theme.font.xmd}px; 
        color: ${({ theme }) => theme.colors.text};`

export const ClassroomName = styled.Text`
        color: ${({ theme }) => theme.colors.text}; 
        font-size: ${({ theme }) =>  theme.font.sm}px;`

export const NoHomeworks = styled.Text`
        color:  ${({ theme }) => theme.colors.contrast};
        font-size: ${({ theme }) => theme.font.sm}px; 
        margin-left: 5%;
`
