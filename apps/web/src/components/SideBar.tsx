import React, { useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SelectItems } from "@/types/type";
import { useRecoilState } from "recoil";
import { selectedCategory } from "@/atoms/Sidebar/selectedCategory";
import { Group, Layer, Stage } from "react-konva";

import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { RadioButton, RadioGroup } from "@repo/ui/radio";
import { Card, CardWithImage, SongCard } from "@repo/ui/card";
<<<<<<< HEAD
import { CustomInput } from "@repo/ui/input";
=======
import { elementsToShow } from "@/atoms/elements/elementsToShow";
import { countItemInArray } from "@/utils/Objects";
>>>>>>> ad6c0b4087f35b7017eee1ce86e0fe2b0db26f44

const SideBar = () => {
  const [value, setValue] = useRecoilState(selectedCategory);
  let inputValue;

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
<<<<<<< HEAD
=======
  const [elements, setElemets] = useRecoilState(elementsToShow);

>>>>>>> ad6c0b4087f35b7017eee1ce86e0fe2b0db26f44
  return (
    <div className="text-white flex flex-col gap-3 mt-5 overflow-x-auto">
      <div className="m-auto text-gray-400">Buttons</div>
      <div className="overflow-x-auto">
        <Stage height={40} width={350}>
          <Layer>
            <Group x={20} y={0}>
              <CustomButton label={"click"} onClick={() => console.log("hi")} />
            </Group>
            <Group x={140} y={0}>
              <OutlineButton
                label={"click"}
                onClick={() => console.log("hi")}
              />
            </Group>
            <Group x={260} y={0}>
              <TextButton label={"click"} onClick={() => console.log("hi")} />
            </Group>
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Inputs</div>
      <div className="overflow-x-auto">
        <Stage height={40} width={450}>
          <Layer>
            <Group x={20} y={0}>
            <CustomInput
            value={"input"}
            placeholder="Outlined"
            width={300}
            height={50}
            variant="outlined"
            fontSize={16}
          />
            </Group>
           
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Checkbox</div>
      <div className="overflow-x-auto">
        <Stage height={40} width={270}>
          <Layer>
            <Group x={80} y={0}>
              <Checkbox label={"checkbox"} />
            </Group>
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Radio Button</div>
      <div className="overflow-x-auto m-auto">
        <Stage height={50} width={270}>
          <Layer>
            <Group x={100} y={20}>
              <RadioButton
                label="Label"
                value="hi"
                selectedValue="hi"
                onChange={() => console.log("object")}
              />
            </Group>
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Cards</div>
      <div className="overflow-x-auto">
        <Stage height={420} width={1200}>
          <Layer>
            <Group
              x={10}
              y={20}
              onClick={() => {
                const count = countItemInArray(elements, "Card");
                setElemets((prev) => [...prev, `Card${count + 1}`]);
              }}
            >
              <Card
                width={300}
                height={250}
                color={"#13274F"}
                cornerRadius={2}
                headingColor={"#F0F8FF"}
                subTextColor={"#B2BEB5"}
                contentColor={"white"}
                buttonColor={"B2BEB5"}
                headingFont={25}
                subTextFont={15}
                contentFont={20}
                buttonFont={15}
                headingText={"Sample Card"}
                subText={"Subtext goes here"}
                content={
<<<<<<< HEAD
                  "Content Content Content Content Content Content Content Content Content Content Content Content "
=======
                  "This assumes that you are using these values as props in a React component. If you are "
>>>>>>> ad6c0b4087f35b7017eee1ce86e0fe2b0db26f44
                }
                buttonText={"Click!"}
              />
            </Group>
            <Group
              x={330}
              y={20}
              onClick={() => {
                const count = countItemInArray(elements, "CardWithImage");
                setElemets((prev) => [...prev, `CardWithImage${count + 1}`]);
              }}
            >
              <CardWithImage
                width={300}
                height={400}
                color={"#13274F"}
                cornerRadius={2}
                headingColor={"#F0F8FF"}
                subTextColor={"#B2BEB5"}
                contentColor={"white"}
                headingFont={25}
                subTextFont={15}
                contentFont={20}
                headingText={"Sample Card"}
                subText={"Subtext goes here"}
                content={
<<<<<<< HEAD
                  "Content Content Content Content Content Content Content Content Content Content Content Content "
=======
                  "This assumes that you are using these values as props in a React comp"
>>>>>>> ad6c0b4087f35b7017eee1ce86e0fe2b0db26f44
                }
                iconColor={"#F0F8FF"}
              />
            </Group>
            <Group
              x={650}
              y={20}
              onClick={() => {
                const count = countItemInArray(elements, "SongCard");
                console.log(count);
                setElemets((prev) => [...prev, `SongCard${count + 1}`]);
              }}
            >
              <SongCard
                width={450}
                height={200}
                color={"#13274F"}
                cornerRadius={2}
                headingColor={"#F0F8FF"}
                subTextColor={"#B2BEB5"}
                contentColor={"white"}
                headingFont={25}
                subTextFont={15}
                contentFont={20}
                headingText={"Sample Card"}
                subText={"Subtext goes here"}
                content={
<<<<<<< HEAD
                  "Content Content Content Content Content Content Content Content Content Content Content Content "
=======
                  "This assumes that you are using these values as props in a React component."
>>>>>>> ad6c0b4087f35b7017eee1ce86e0fe2b0db26f44
                }
                iconColor={"#F0F8FF"}
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
