import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')

export const icons ={
    xlg: Math.floor(width / 5),
    lg: Math.floor(width / 10),
    xmd: Math.floor(width / 12),
    md: Math.floor(width / 15),
    sm: Math.floor(width / 18),
}