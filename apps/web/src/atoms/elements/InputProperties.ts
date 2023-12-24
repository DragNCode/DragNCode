import { atom } from "recoil";

export const InputProperties = atom({
    key: 'InputProperties',
    default: {
        placeholder: [
            [0, 'placeholder']
        ],
        height: [
            [0, 250]
        ],
        width: [
            [0, 30]
        ]
    }
})