import { Dimensions } from 'react-native';
import ColorPicker, { Panel1, Preview } from 'reanimated-color-picker';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgrounbColor};
`;
export const Header = styled.View`
    padding: 5%;

`
export const CloseModal = styled.TouchableOpacity``

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.xsm}px;
`
export const ColorContainer = styled(ColorPicker)`
    width: 100%;
    max-height: 45%;
    padding: 0 5%;
`
export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`
export const PickerSlide = styled(Panel1)`
    width: 100%;
    height: 50%;
    margin: 5% 0;
`
export const PreviewColor = styled(Preview)`
    width: ${Dimensions.get('screen').width / 6}px;
    height: ${Dimensions.get('screen').width / 6}px;
    border-radius: ${Dimensions.get('screen').width / 6}px;
    margin-right: 5%;
    elevation: 5;   
`
export const InputColor = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    margin-top: 5%;
    padding: 2% 5%;
    width: 100%;
    color: ${({theme}) => theme.colors.text};
`
export const Form = styled.View`
    padding: 0 5% 5% 5%;
    flex-direction: row;
    justify-content: space-between;
`
export const InitInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
    width: 20%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px ;
    color: ${({ color }) => color};
    font-size: ${({ theme }) => theme.font.sm}px;
    padding: 0 5%;
`
export const SubjectNameInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
    width: 77%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.font.sm}px;
    padding: 2% 5%;
`
export const PreviewText = styled.Text`
    color: ${({theme}) => theme.colors.text};
    margin: 8% 6% 0 6%;
`
export const Card = styled.View`
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    flex-direction: row;
    align-items: center;
    padding: 3%  5%;
    background-color: ${({ theme }) => theme.colors.blackBackgroundColor};
    width: 90%;
    margin:  5%;
    margin-bottom: 5%;
`
export const Initial = styled.Text`
    font-size: ${({theme}) =>theme.font.md}px;
    color: ${({color}) => color};
    margin-right: 5%;        font-size: ${({theme}) =>theme.font.md}px;
    color: ${({color}) => color};
    margin-right: 5%;
`
export const SubjectName = styled.Text`
    font-size: ${({theme}) => theme.font.sm}px;
    color: ${({theme}) => theme.colors.text};
`
export const Date = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.font.sm}px;
`
export const CreateButton = styled.TouchableOpacity`
    width: 90%;
    background-color: ${({theme}) => theme.colors.contrast};
    margin: 0 5%;
    justify-content: center;
    align-items: center;
    padding: 3% 0;
    border-radius: ${({theme}) => theme.borderRadius.sm}px;
`
export const CreateButtonText = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.font.xsm}px;
`
