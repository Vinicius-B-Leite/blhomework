import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')


export const borderRadius = {
    full: width,
    lg: Math.floor(width / 8),
    xmd: Math.floor(width / 11),
    md: Math.floor(width / 22),
    sm: Math.floor(width / 60),
}