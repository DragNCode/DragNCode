import { Item } from "@/components/Item";
import { Navbar } from "@/components/Navbar";
import { Properties } from "@/components/Properties";
import { Sidebar } from "@/components/Sidebar";
import { Box } from "@chakra-ui/react";
import { Canvas } from "@/components/Canvas";

const Canva: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box className="flex" >
                <Sidebar />
                <Item />
                <Box minW={'60vw'}>
                    <Canvas />
                </Box>
                <Box minW={'10vw'}>
                    <Properties />
                </Box>
            </Box>
        </>
    )
}

export default Canva;