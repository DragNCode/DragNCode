import { atom } from "recoil";

export const inputProperties = atom({
    key:'inputProperties',
    default:[{
        index:0,
        value:"",
        placeholder:"",
        width:300,
        height:30,
        variant:"Outlined",
        fontSize:16,
        cornerRadius:2,
        color1:"black",
        color2:"white",
    },]
})