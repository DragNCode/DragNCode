import { atom } from "recoil";

export const TextBtnProperties = atom({
    key:'label',
    default:[{
        index:0,
        label:"click me",
        color1:"darkblue",
        color2:"lightblue",
        colorHovered:"blue",
        fontSize:16
    },]
})