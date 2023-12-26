import { atom } from "recoil";

export const ButtonText = atom({
    key: 'ButtonText',
    default: {
        text: [
            [0, 'text']
        ],
        width: [
            [0, 140]
        ],
        height: [
            [0, 40]
        ]
    }
})