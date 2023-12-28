import { atom } from "recoil";

export const label = atom({
    key:'label',
    default:{
        label:"click me",
        width:100,
        height:30,
        cornerRadius:2,
        color1:"darkblue",
        color2:"lightblue",
        colorHovered:"blue",
        textColor:"white",
        fontSize:16
    }
})