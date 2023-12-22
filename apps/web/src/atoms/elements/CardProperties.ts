import { atom } from "recoil";

export const CardProperties = atom({
    key: 'CardProperties',
    default: {
        placeholder: [
            [0, 'placeholder']
        ],
        height: [
            [0, 250]
        ],
        width: [
            [0, 40]
        ]
    }
})