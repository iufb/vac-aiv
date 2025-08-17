import { moderateScale, scale, verticalScale } from "react-native-size-matters"

export const rS = (value: number) => {
    return scale(value)
}
export const rV = (value: number) => {
    return verticalScale(value)
}
export const rMS = (value: number, factor?: number) => {
    return moderateScale(value, factor)
}
