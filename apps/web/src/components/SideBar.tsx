import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedCategory } from "@/atoms/Sidebar/selectedCategory";
import { Group, Layer, Stage } from "react-konva";
import { CustomButton, TextButton, OutlineButton } from "@repo/ui/button";
import { Card, CardWithImage, SongCard } from "@repo/ui/card";
import { countItemInArray } from "@/utils/Objects";
import { elementsToShow } from "@/atoms/elements/elementsToShow";

const displayObject = {
  button: {
    CustomButton: (
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
    ),

    OutlineButton: (
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
    ),

    TextButton: (
      <TextButton
        label={"click"}
        onClick={() => console.log("hi")}
        fontSize={16}
        color1="darkblue"
        color2="lightblue"
        colorHovered="blue"
      />
    ),
  },

  card: {
    Card: (
      <Card
        width={270}
        height={250}
        color={"#13274F"}
        cornerRadius={2}
        headingColor={"#F0F8FF"}
        subTextColor={"#B2BEB5"}
        contentColor={"white"}
        buttonColor={"B2BEB5"}
        headingFont={20}
        subTextFont={10}
        contentFont={15}
        buttonFont={15}
        headingText={"Sample Card"}
        subText={"Subtext goes here"}
        content={
          "This assumes that you are using these values as props in a React component. If you are "
        }
        buttonText={"Click!"}
      />
    ),

    CardWithImage: (
      <CardWithImage
        width={270}
        height={320}
        color={"#13274F"}
        cornerRadius={2}
        headingColor={"#F0F8FF"}
        subTextColor={"#B2BEB5"}
        contentColor={"white"}
        headingFont={20}
        subTextFont={10}
        contentFont={15}
        headingText={"Sample Card"}
        subText={"Subtext goes here"}
        content={
          "This assumes that you are using these values as props in a React component. If you are "
        }
        iconColor={""}
      />
    ),

    SongCard: (
      <SongCard
        width={270}
        height={200}
        color={"#13274F"}
        cornerRadius={2}
        headingColor={"#F0F8FF"}
        subTextColor={"#B2BEB5"}
        contentColor={"white"}
        headingFont={20}
        subTextFont={10}
        contentFont={15}
        headingText={"Sample Card"}
        subText={"Subtext goes here"}
        content={
          "This assumes that you are using these values as props in a React component. If you are "
        }
        iconColor={"#F0F8FF"}
      />
    ),
  },
};

const SideBar = () => {
  const [hoverState, setHoverState] = useState("");

  const [_value, _setValue] = useRecoilState(selectedCategory);

  const handleHovered = (e: any) => {
    const hoveredEl = e.target.name;

    setHoverState((prev) => hoveredEl);
  };

  return (
    <div className="flex">
      <div
        className="w-72 mr-2 ml-2 border-t border-r"
        style={{ background: "#04151F" }}
      >
        {/* <Selector /> */}

        <div className="text-center my-2 flex flex-col gap-6">
          Elements
          <div className="flex flex-col gap-2">
            <button
              className="rounded-md p-2 border border-slate-400 w-2/3 text-center mx-auto  bg-slate-800 hover:bg-slate-600"
              name="Button"
              onMouseEnter={(e) => handleHovered(e)}
            >
              Button
            </button>
            <button
              className="rounded-md p-2 border border-slate-400 w-2/3 text-center mx-auto  bg-slate-800 hover:bg-slate-600"
              name="card"
              onMouseEnter={(e) => handleHovered(e)}
            >
              Card
            </button>
          </div>
        </div>

        {/* {value.value === "Elements" && <Elements />} */}
      </div>

      <RenderBox hoveredState={hoverState} />
    </div>
  );
};

export default SideBar;

const RenderBox = (props: any) => {
  if (props.hoveredState === "Button") {
    return <RenderButtons />;
  }
  if (props.hoveredState === "card") {
    return <RenderCards />;
  }
};

const RenderButtons = () => {
  const [elements, setElemets] = useRecoilState(elementsToShow);

  return (
    <div className="w-72 border-t border-r" style={{ background: "#04151F" }}>
      <div className="flex flex-col">
        <Stage height={300} width={350}>
          <Layer>
            <Group
              x={100}
              y={50}
              onClick={() => {
                const count = countItemInArray(elements, "CustomButton");
                setElemets((prev) => [...prev, `CustomButton${count + 1}`]);
              }}
            >
              {displayObject["button"].CustomButton}
            </Group>

            <Group
              x={100}
              y={125}
              onClick={() => {
                const count = countItemInArray(elements, "OutlineButton");
                setElemets((prev) => [...prev, `OutlineButton${count + 1}`]);
              }}
            >
              {displayObject["button"].OutlineButton}
            </Group>
            <Group
              x={125}
              y={200}
              onClick={() => {
                const count = countItemInArray(elements, "TextButton");
                setElemets((prev) => [...prev, `TextButton${count + 1}`]);
              }}
            >
              {displayObject["button"].TextButton}
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
const RenderCards = () => {
  const [elements, setElemets] = useRecoilState(elementsToShow);

  return (
    <div className="w-72 border-t border-r" style={{ background: "#04151F" }}>
      <div className="flex flex-col">
        <Stage height={900} width={350}>
          <Layer>
            <Group
              x={6}
              y={50}
              onClick={() => {
                const count = countItemInArray(elements, "Card");
                setElemets((prev) => [...prev, `Card${count + 1}`]);
              }}
            >
              {displayObject["card"].Card}
            </Group>
            <Group
              x={6}
              y={350}
              onClick={() => {
                const count = countItemInArray(elements, "CardWithImage");
                setElemets((prev) => [...prev, `CardWithImage${count + 1}`]);
              }}
            >
              {displayObject["card"].CardWithImage}
            </Group>
            <Group
              x={6}
              y={700}
              onClick={() => {
                const count = countItemInArray(elements, "SongCard");
                setElemets((prev) => [...prev, `SongCard${count + 1}`]);
              }}
            >
              {displayObject["card"].SongCard}
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
