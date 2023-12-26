import { atom } from "recoil";

export const selectedCategory = atom({
    key: 'selectedCategory',
    default: {
        index: 0,
        value: ''
    }
})