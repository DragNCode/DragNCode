import React from "react";
import { Box } from '@chakra-ui/react';
import { SimpleButton } from "@repo/ui/button";
import { WrapItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

export const Navbar: React.FC = () => {

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <Box borderRadius='2px' h='7vh' bg='#D53F8C' className="flex justify-between items-center" >
            <Box 
                className="flex p-2 justify-between w-44 items-center"
            >
                <SimpleButton 
                    variant="outline" 
                    colorScheme="purple" 
                    size="md" 
                    text="Home" 
                    handleClick={handleClick}
                />
                <SimpleButton 
                    variant="outline" 
                    colorScheme="purple" 
                    size="md" 
                    text="File"
                    handleClick={handleClick}
                />
            </Box>
            <Box>
                <WrapItem>
                    <Avatar name='Krish Rathor' src='https://bit.ly/dn-abramov' bg={'orange'} />
                </WrapItem>

            </Box>

        </Box>
    )

}