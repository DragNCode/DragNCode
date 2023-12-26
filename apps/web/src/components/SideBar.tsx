import React, { useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SelectItems } from "@/types/type";
import { useRecoilState } from "recoil";
import { selectedCategory } from "@/atoms/Sidebar/selectedCategory";

const SideBar = () => {
    return (
        <div className="w-72 mr-2 ml-2 border" >
            <Selector />
        </div>
    )
}

export default SideBar;

const Selector: React.FC = () => {

    const [value, setValue] = useRecoilState(selectedCategory);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue({
            index: newValue,
            value: SelectItems[newValue]
        });
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={value.index} 
                    onChange={handleChange} 
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {
                        SelectItems.map(item => (
                            <Tab key={item} sx={{color: 'white'}} label={item} />
                        ))
                    }
                </Tabs>
            </Box>  
        </div>
    )
}
