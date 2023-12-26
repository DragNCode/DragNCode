import { atom } from "recoil";

export const currentSelectedElement = atom({
    key: 'currentSelectedElement',
    default: {
        number: 0,
        element: 'default'
    }
})