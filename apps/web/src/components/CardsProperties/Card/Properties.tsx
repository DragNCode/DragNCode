import { SampleCardProperties } from "@/atoms/elements/SampleCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const ChangeCardProperties: React.FC = () => {
  const properties = [
    { title: "width", value: 300, type: "number" },
    { title: "height", value: 250, type: "number" },
    { title: "color", value: "#13274F", type: "string" },
    { title: "cornerRadius", value: 2, type: "number" },
    { title: "headingColor", value: "#F0F8FF", type: "string" },
    { title: "subTextColor", value: "#B2BEB5", type: "string" },
    { title: "contentColor", value: "white", type: "string" },
    { title: "buttonColor", value: "B2BEB5", type: "string" },
    { title: "headingFont", value: 25, type: "number" },
    { title: "subTextFont", value: 15, type: "number" },
    { title: "contentFont", value: 20, type: "number" },
    { title: "buttonFont", value: 15, type: "number" },
    { title: "headingText", value: "Sample Card", type: "string" },
    { title: "subText", value: "Subtext goes here", type: "string" },
    {
      title: "content",
      value:
        "This assumes that you are using these values as props in a React component.",
      type: "string",
    },
    { title: "buttonText", value: "Click!", type: "string" },
  ];

  const transformedObject = {
    width: "Width",
    height: "Height",
    color: "Color",
    cornerRadius: "Corner Radius",
    headingColor: "Heading Color",
    subTextColor: "Subtext Color",
    contentColor: "Content Color",
    buttonColor: "Button Color",
    headingFont: "Heading Font",
    subTextFont: "Subtext Font",
    contentFont: "Content Font",
    buttonFont: "Button Font",
    headingText: "Heading Text",
    subText: "Subtext",
    content: "Content",
    buttonText: "Button Text",
  };

  const { number } = useRecoilValue(currentSelectedElement);
  const [Card, setCard] = useRecoilState(SampleCardProperties);

  useEffect(() => {
    console.log(Card);
  }, [Card]);

  const handlePropertyChange = (title: string, value: number | string) => {
    setCard((prev) => {
      const existingCardIndex = prev.findIndex((card) => card.index === number);

      if (existingCardIndex !== -1) {
        return prev.map((card, index) =>
          index === existingCardIndex ? { ...card, [title]: value } : card
        );
      } else {
        const newCard = {
          index: number,
          width: 300,
          height: 250,
          color: "#13274F",
          cornerRadius: 2,
          headingColor: "#F0F8FF",
          subTextColor: "#B2BEB5",
          contentColor: "white",
          buttonColor: "B2BEB5",
          headingFont: 25,
          subTextFont: 15,
          contentFont: 20,
          buttonFont: 15,
          headingText: "Sample Card",
          subText: "Subtext goes here",
          content:
            "This assumes that you are using these values as props in a React component. If you are",
          buttonText: "Click!",
        };
        (newCard as any)[title] = value;
        return [...prev, newCard];
      }
    });
  };

  return (
    <div>
      {properties.map((property) => (
        <div key={property.title} className="flex text-white mt-4">
          <label className="">
            {(transformedObject as any)[property.title]}
          </label>
          {/* <TextField
            id={property.title}
            label="Standard"
            variant="standard"
            className="bg-white text-black ml-2"
            sx={{ height: "20px" }}
            onChange={(e) => {
              const value = e.target.value;
              handlePropertyChange(
                property.title,
                property.type === "number"
                  ? value === ""
                    ? 0
                    : parseFloat(value)
                  : value
              );
            }}
            value={
              Card.filter((card) => card.index === number).map(
                (card) => (card as any)[property.title]
              )[0]
            }
          /> */}
          <TextField
            id={property.title}
            label="Standard"
            variant="standard"
            onChange={(e) => {
              const value = e.target.value;
              handlePropertyChange(
                property.title,
                property.type === "number"
                  ? value === ""
                    ? 0
                    : parseFloat(value)
                  : value
              );
            }}
            value={
              Card.filter((card) => card.index === number).map(
                (card) => (card as any)[property.title]
              )[0]
            }
            className=" text-white"
          />
        </div>
      ))}
    </div>
  );
};

const Properties = {
  width: "Width",
  height: "Height",
};
