import { ItemState } from "@/atoms/Sidebar/ItemState";
import { ItemStateTyes } from "@/utils/Objects";
import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { Element } from "./Element";

export const Item = () => {

    const item = useRecoilValue(ItemState);

    return (
        <Box
            minW={80}
            maxW={80}
            maxH={'93vh'}
            bg={'#2C3539'}
            color={'white'}
            overflowY={'auto'}
        >
            {
                item === ItemStateTyes.Element ? 
                    <Element />
                : item === ItemStateTyes.Text ?
                    <Text />
                : item === ItemStateTyes.Upload ?
                    <Upload />
                : 'Todo: render some error'
            }
        </Box>
    )
}

const Text = () => {
    return (
        <div>
            Text
        </div>
    )
}


const Upload = () => {
    return (
        <div>
            Uplaod
        </div>
    )
}