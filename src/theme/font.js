import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')


export const font = {
    lg: Math.floor(width / 9),
    xmd: Math.floor(width / 12),
    md: Math.floor(width / 19),
    xsm: Math.floor(width / 22),
    sm: Math.floor(width / 25),
    vsm: Math.floor(width / 30),
}