import { atom } from "recoil";

export const ShowElement = atom({
    key: 'ShowElement',
    default: [{
        item: '',
        color: '',
        size: '',
        variant: ''
    }]
});
