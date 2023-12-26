import { atom } from "recoil";

export const input = atom({
    key: 'input',
    default: [
        {
            id: '',
            coordinates: {
                x: 0,
                y: 0
            },
            properties: {
                width: 0,
                height: 0
            }
        },
    ]
})
