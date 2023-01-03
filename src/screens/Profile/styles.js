import { Dimensions } from "react-native"
import styled from "styled-components/native"


export const Container = styled.SafeAreaView`
        flex: 1;
        background-color: ${({theme}) => theme.colors.backgrounbColor};
`
export const Header = styled.View`
        width: 100%;
        flex-direction: row;
        align-items: center;
        padding: 5%;
`
export const HeaderTitle = styled.Text`
        font-size: ${({theme}) => theme.font.md}px;
        color: ${({theme}) => theme.colors.white};
        font-weight: bold;
`
export const Main = styled.View`
        padding-top: 5%;
        width: 100%;
        height: 100%;
        align-items: center;
`
export const AvatarBtn = styled.TouchableOpacity`
        border-radius: ${({theme}) => theme.borderRadius.full}px;
        width: ${Dimensions.get('screen').width / 3.5}px;
        height: ${Dimensions.get('screen').width / 3.2}px;
`
export const Avatar = styled.Image`
        border-radius: ${({theme}) => theme.borderRadius.full}px;
        width: 100%;
        height: 90%;
`
export const UserName = styled.Text`
        color: ${({theme}) => theme.colors.white};
        font-size: ${({theme}) => theme.font.sm}px;
`
export const Email = styled.Text`
        color: ${({theme}) => theme.colors.white};
        font-size: ${({theme}) => theme.font.sm}px;
        margin-bottom: 5%;
`
