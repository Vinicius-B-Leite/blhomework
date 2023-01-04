import styled, { css } from "styled-components/native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Dimensions } from "react-native";


export const Container = styled.SafeAreaView`
        flex: 1;
        background-Color: ${({ theme }) => theme.colors.backgrounbColor};
        `
export const Header = styled.View`
        flex-Direction: row;
        padding: 5%;
        align-Items: center;
        justify-Content: space-between;
        `
export const BtnGoBack = styled.Text`
        color: ${({ theme }) => theme.colors.white};
        font-Size:${({ theme }) => theme.font.md}px ;
        `
export const BtnPost = styled.Text`
        font-Size:${({ theme }) => theme.font.sm}px;
        color: ${({ theme }) => theme.colors.contrast};
        `
export const Main = styled.View`
        padding: 5%;
        flex: 1;`

export const Inp = styled.TextInput`
        flex-Direction: row;
        width: 100%;
        background-Color:${({ theme }) => theme.colors.blackBackgroundColor};
        height: ${({ height }) => height || '10%'};
        padding: 5%;
        align-Items: center;
        border-Radius: ${({ theme }) => theme.borderRadius.sm}px;
        font-size:${({ theme }) => theme.font.sm}px ;
        color: ${({ theme }) => theme.colors.white};
        margin: 2% 0 ;
`

export const SelectSubject = styled.TouchableOpacity`
        flex-Direction: row;
        width: 100%;
        background-Color:${({ theme }) => theme.colors.blackBackgroundColor};
        height: 10%;
        padding: 0  5%;
        align-Items: center;
        border-Radius: ${({ theme }) => theme.borderRadius.sm}px;
        justify-Content: space-between;
        font-Size:${({ theme }) => theme.font.sm}px ;
        color: ${({ theme }) => theme.colors.white};
        margin: 2% 0 ;
`
export const InactiveOrActiveText = styled.Text`
        ${({ active }) => active ? css`
        color: ${({ color }) => color};
        font-Size: ${({ theme }) => theme.font.sm}px;`
                : css`
        color: ${({ theme }) => theme.colors.grey};
        font-Size: ${({ theme }) => theme.font.sm}px;`}
`

export const UploadIcon = styled.TouchableOpacity`
        flex-Direction: row;
        align-Items: center;
        `
export const UploadAndDateContainer = styled.View`
        flex-Direction: row;
        width: 100%;
        justify-Content: space-between;
        margin-Top: 5%;`

export const CalendarContainer = styled.TouchableOpacity`
        flex-Direction: row;
        align-Items: center;`

export const CloseBottomSheet = styled.TouchableOpacity`
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.backgrounbColorSecundary};
`
export const ModalBottomSheet = styled(BottomSheet).attrs(({ theme }) => ({
        handleStyle: {
                backgroundColor: theme.colors.blackBackgroundColor,
                borderTopLeftRadius: theme.borderRadius.xmd,
                borderTopRightRadius: theme.borderRadius.xmd
        },
        style: {
                backgroundColor: theme.colors.blackBackgroundColor
        },
        handleIndicatorStyle: {
                backgroundColor: theme.colors.white, width: '50%'
        },
        backgroundStyle: {
                backgroundColor: theme.colors.blackBackgroundColor
        }
}))``


export const FilesList = styled(BottomSheetFlatList).attrs({

})`
        padding: 5%;

`