import { atom } from "recoil";

export const properties = atom({
    key: 'properties',
    default: {
        color: 'teal',
        label: 'label',
        width: 140,
        height: 40,
        cornerRadius: 4
    }
})