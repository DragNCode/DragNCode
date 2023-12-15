import { ItemStateTyes } from "@/utils/Objects";
import { atom } from "recoil";

export const ItemState = atom({
    key: 'itemState',
    default: ItemStateTyes.Element
})