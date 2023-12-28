import React, { useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SelectItems, elements } from "@/types/type";
import { useRecoilState } from "recoil";
import { selectedCategory } from "@/atoms/Sidebar/selectedCategory";
import { Group, Layer, Stage } from "react-konva";

import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { Card, CardWithImage, SongCard } from "@repo/ui/card";
import { CustomInput } from "@repo/ui/input";
import { countItemInArray } from "@/utils/Objects";
import { elementsToShow } from "@/atoms/elements/elementsToShow";

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
    console.log(elements);
  }, [elements]);

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
  const [elements, setElemets] = useRecoilState(elementsToShow);

  return (
    <div className="text-white flex flex-col gap-3 mt-5 overflow-x-auto">
      <div className="m-auto text-gray-400">Buttons</div>
      <div className="overflow-x-auto">
        <Stage height={40} width={350}>
          <Layer>
            <Group
              x={20}
              y={0}
              onClick={() => {
                const count = countItemInArray(elements, "CustomButton");
                setElemets((prev) => [...prev, `CustomButton${count + 1}`]);
              }}
            >
              <CustomButton
                label={"click"}
                onClick={() => console.log("hi")}
                width={100}
                height={30}
                cornerRadius={2}
                color1="darkblue"
                color2="lightblue"
                colorHovered="blue"
                textColor="white"
                fontSize={16}
              />
            </Group>
            <Group
              x={140}
              y={0}
              onClick={() => {
                const count = countItemInArray(elements, "OutlineButton");
                setElemets((prev) => [...prev, `OutlineButton${count + 1}`]);
              }}
            >
              <OutlineButton
                label={"click"}
                onClick={() => console.log("hi")}
                width={100}
                height={30}
                cornerRadius={2}
                color1="darkblue"
                color2="lightblue"
                colorHovered="blue"
                textColor="white"
                fontSize={16}
              />
            </Group>
            <Group
              x={260}
              y={0}
              onClick={() => {
                const count = countItemInArray(elements, "TextButton");
                setElemets((prev) => [...prev, `TextButton${count + 1}`]);
              }}
            >
              <TextButton
                label={"click"}
                onClick={() => console.log("hi")}
                fontSize={16}
                color1="darkblue"
                color2="lightblue"
                colorHovered="blue"
              />
            </Group>
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Inputs</div>
      <div className="overflow-x-auto">
        <Stage height={40} width={450}>
          <Layer>
            <Group
              x={20}
              y={0}
              onClick={() => {
                const count = countItemInArray(elements, "CustomInput");
                setElemets((prev) => [...prev, `CustomInput${count + 1}`]);
              }}
            >
              <CustomInput
                value={"input"}
                placeholder="Outlined"
                width={300}
                height={50}
                variant="outlined"
                fontSize={16}
                cornerRadius={0}
                color1={""}
                color2={""}
              />
            </Group>
          </Layer>
        </Stage>
      </div>

      <div className="m-auto text-gray-400">Checkbox</div>
      <div className="overflow-x-auto">
        <Stage
          height={40}
          width={270}
          onClick={() => {
            const count = countItemInArray(elements, "Checkbox");
            setElemets((prev) => [...prev, `Checkbox${count + 1}`]);
          }}
        >
          <Layer>
            <Group x={80} y={0}>
              <Checkbox
                width={20}
                height={20}
                cornerRadius={5}
                label={"checkbox"}
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
                  "This assumes that you are using these values as props in a React component. If you are "
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
                  "This assumes that you are using these values as props in a React component. If you are "
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
                  "This assumes that you are using these values as props in a React component. If you are "
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
