import { AbsoluteCenter, Box, IconButton, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { SimpleButton } from "@repo/ui/button";
import { Divider } from '@chakra-ui/react'
import { SimpleInput, InputWithAddon } from "@repo/ui/input";
import { useRecoilState } from "recoil";
import { ShowElement } from "@/atoms/Sidebar/ShowElement";
import { Elements } from "@/utils/Objects";

export const Element: React.FC = () => {

    const [elementsList, setElementsList] = useRecoilState(ShowElement);

    const addToList = (colorScheme: string, size: string, variant?: string) => {
        setElementsList([...elementsList, Elements.Button]);
    }

    return (
        <Box>

            <Box className="w-64 m-auto mt-4" >
                <InputGroup>
                    <InputLeftAddon children={<SearchButton />} />
                    <Input placeholder='Search' />
                </InputGroup>
            </Box>

            <Partition text="Buttons" />            

            <Box className="m-auto flex mt-8 justify-evenly">
                <SimpleButton variant="solid" colorScheme="teal" size="sm" text="Button" handleClick={addToList} />
                <SimpleButton variant="outline" colorScheme="teal" size="sm" text="Button" />
                <SimpleButton variant="ghost" colorScheme="teal" size="sm" text="Button" />
                <SimpleButton variant="link" colorScheme="teal" size="sm" text="Button" />
            </Box>

            <Partition text="Inputs" />

            <Box className="mt-8 w-64 m-auto" >
                <SimpleInput size="sm" placeholder="Input" variant="outline" />
                <SimpleInput size="sm" placeholder="Input" variant="filled" />
                <SimpleInput size="sm" placeholder="Input" variant="flushed" />
                <InputWithAddon size="sm" placeholder="Input" leftAddon="Left" />
                <InputWithAddon size="sm" placeholder="Input" rightAddon="Right" />
                <InputWithAddon size="sm" placeholder="Input" leftAddon="Left" rightAddon="Right" />
            </Box>

        </Box>
    )
} 

const SearchButton = () => {
    return (
        <IconButton aria-label='Search database' icon={<Search2Icon />} />
    )
}

interface PartitionProps {
    text?: string
}

const Partition: React.FC<PartitionProps> = (props) => {
    return (
        <Box position='relative' mt={8}>
            <Divider />
            <AbsoluteCenter px='4' bg={'#2C3539'} >
                {props.text}
            </AbsoluteCenter>
        </Box>
    )
}