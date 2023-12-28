import { atom } from "recoil";

export const outlineBtnProperties = atom({
    key:'label',
    default:[{
        index:0,
        label:"click me",
        width:100,
        height:30,
        cornerRadius:2,
        color1:"darkblue",
        color2:"lightblue",
        colorHovered:"blue",
        textColor:"white",
        fontSize:16
    },]
})