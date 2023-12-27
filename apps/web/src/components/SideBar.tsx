import React, { useEffect } from "react";
import { Box, Tabs, Tab,Button } from "@mui/material";
import { SelectItems } from "@/types/type";
import { useRecoilState } from "recoil";
import { selectedCategory } from "@/atoms/Sidebar/selectedCategory";
import { Group, Layer, Stage } from "react-konva";

import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";

const SideBar = () => {
  const [value, setValue] = useRecoilState(selectedCategory);

  return (
    <>
      <div className="w-72 mr-2 ml-2 border">
        <Selector />

        {value.value === "Elements" && <Elements />}
      </div>
    </>
  );
};

export default SideBar;

const Selector: React.FC = () => {
  const [value, setValue] = useRecoilState(selectedCategory);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue({
      index: newValue,
      value: SelectItems[newValue],
    });
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value.index}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {SelectItems.map((item) => (
            <Tab key={item} sx={{ color: "white" }} label={item} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

const Elements: React.FC = () => {
  return (
    <div className="text-white flex flex-col gap-3 max-h-screen overflow-y-scroll mt-5">

      <div>Buttons:</div>
      <Stage
        height={240}
        width={270}
        className="flex flex-col gap-3"
      >
        <Layer>
        
            <Group x={95} y={0}>
              <CustomButton label={"click"} onClick={() => console.log("hi")} />
            </Group>
            <Group x={95} y={75}>
              <OutlineButton label={"click"} onClick={() => console.log("hi")} />
            </Group>
            <Group x={95}  y={150}>
              <TextButton label={"click"} onClick={() => console.log("hi")} />
            </Group>
          
        </Layer>
      </Stage>

      <div>Checkbox:</div>
      <Stage
        height={640}
        width={270}
        className="flex flex-col gap-3"
      >
        <Layer>
        
            <Group x={95} y={0}>
              <Checkbox label={"checkbox"} />
            </Group>
           
        </Layer>
      </Stage>

    </div>
    
  );
};
