import { atom } from "recoil";

export const CheckBoxProerty = atom({
    key: 'CheckBoxProperty',
    default: [{
        index: 0,
        width: 20,
        height: 20,
        cornerRadius: 5,
        label: 'Label'
    },]
})