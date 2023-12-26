import React, { useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";

const SideBar = () => {
    return (
        <div className="w-72 mr-2 ml-2 border" >
            <Selector />
        </div>
    )
}

export default SideBar;

const Selector: React.FC = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab sx={{color: 'white'}} label="Item One" />
                    <Tab sx={{color: 'white'}} label="Item Two" />
                    <Tab sx={{color: 'white'}} label="Item Three" />
                    <Tab sx={{color: 'white'}} label="Item Four" />
                </Tabs>
            </Box>  
        </div>
    )
}
