import { Item } from "@/components/Item";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Box } from "@chakra-ui/react";

const Canva: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box className="flex" >
                <Sidebar />
                <Item />
                <Box p={4}> {/* Your main content goes here */}</Box>
            </Box>
        </>
    )
}

export default Canva;