import { ItemState } from "@/atoms/Sidebar/ItemState";
import { ItemStateTyes } from "@/utils/Objects";
import { Box } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

export const Item = () => {

    const [ item, setItem ] = useRecoilState(ItemState);

    return (
        <Box
            minW={80}
            bg={'#2C3539'}
            color={'white'}
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

const Element = () => {
    return (
        <div>
            Element
        </div>
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