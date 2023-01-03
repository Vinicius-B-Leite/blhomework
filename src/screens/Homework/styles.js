import styled from "styled-components";


export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({theme}) => theme.colors.backgrounbColor} ;
`
export const Header = styled.View`
        width: 100%;
        flex-direction: row;
        padding: 5%;
        align-items: center;
        justify-content: space-between;
`
export const TextGoBack = styled.Text`
        font-size: ${({theme}) => theme.font.md}px ;
        color: ${({theme}) => theme.colors.white} ;
`
export const SucessButon = styled.TouchableOpacity`
        width: 20%;
        align-items: center;
`
export const Main = styled.View`
        padding: 5%;

`
export const Title = styled.Text`
        font-size: ${({theme}) => theme.font.md}px;
        color: ${({theme}) => theme.colors.white} ;
        padding-bottom: 1%;
`
export const Desciption = styled.ScrollView`
        max-height: ${() => Dimensions.get(screen).height / 1.5};
        margin-top: 5%;
`
export const SimpleText = styled.Text`
        font-size: ${({theme}) => theme.font.sm}px;
        color: ${({theme}) => theme.colors.lightGrey};
`
export const FilesContainer = styled.View`
        height: 30%;
        width: 100%;
        margin: 5% 0;
`