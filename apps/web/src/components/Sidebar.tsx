import React from "react";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaCode, FaUpload } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { ItemState } from "@/atoms/Sidebar/ItemState";
import { ItemStateTyes } from "@/utils/Objects";

export const Sidebar: React.FC = () => {

    const [itemState, setItemState] = useRecoilState(ItemState);

    const handleElementClick = () => {
        setItemState(ItemStateTyes.Element);
    }

    const handleTextClick = () => {
        setItemState(ItemStateTyes.Text);
    }

    const handleUploadClick = () => {
        setItemState(ItemStateTyes.Upload);
    }

    return (
        <Box
            h="93vh"
            w="80px"
            bg="black" // Updated background color to black
            color="white"
            p={4}
            display="flex"
            flexDir="column"
            alignItems="center"
        >
            <VStack 
                spacing={4} 
                align="center" 
                mb={4} 
                style={{
                    marginBottom: '50px'
                }}
            >
                    
                    <Icon as={FaHome} boxSize={8} style={{cursor: "pointer"}} onClick={handleElementClick} />
                    <Text>Elements</Text>
            </VStack>
            <VStack 
                spacing={4} 
                align="center" 
                mb={4}
                style={{
                    marginBottom: '50px'
                }}
            >
                <Icon as={FaCode} boxSize={6} style={{cursor: "pointer"}} onClick={handleTextClick} />
                <Text>Text</Text>
            </VStack>
            <VStack 
                spacing={4} 
                align="center" 
                mb={4} 
                style={{
                    marginBottom: '50px'
                }}
            >
                <Icon as={FaUpload} boxSize={6} style={{cursor: "pointer"}}  onClick={handleUploadClick} />
                <Text>Upload</Text>
            </VStack>
        </Box>
    );
};
