import { Dimensions } from "react-native";


const { width, height } = Dimensions.get('screen')

export const theme = {
    colors: {
        backgrounbColor: '#101010',
        backgrounbColorSecundary: 'rgba(18, 18, 18, 0.8)',
        blackBackgroundColor: '#080808',
        inputBackGroundColorPrimary: '#121212',
        contrast: '#48CAE4',
        disableContrast: '#175b69',
        white: '#fff',
        grey: '#808080',
        red: '#FF0000'
    },
    font: {
        lg: Math.floor(width / 9),
        xmd: Math.floor(width / 12), 
        md: Math.floor(width / 19), 
        sm: Math.floor(width / 25), 
    },
    icons: {
        lg: Math.floor(width / 10),
        md: Math.floor(width / 15),
        sm: Math.floor(width / 18),
    },
    borderRadius: {
        full: width,
        lg: Math.floor(width / 8),
        md: Math.floor(width / 22),
        sm: Math.floor(width / 60),
    }
}