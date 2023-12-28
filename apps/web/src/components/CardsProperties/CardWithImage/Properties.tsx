import { CardWithImageProperties } from "@/atoms/elements/CardWithImage/CardWithImageProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { Typography, TextField } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const CardImageProperties: React.FC = () => {
  const properties = [
    { title: "width", value: 300, type: "number" },
    { title: "height", value: 400, type: "number" },
    { title: "color", value: "#13274F", type: "string" },
    { title: "cornerRadius", value: 2, type: "number" },
    { title: "headingColor", value: "#F0F8FF", type: "string" },
    { title: "subTextColor", value: "#B2BEB5", type: "string" },
    { title: "contentColor", value: "white", type: "string" },
    { title: "headingFont", value: 25, type: "number" },
    { title: "subTextFont", value: 15, type: "number" },
    { title: "contentFont", value: 20, type: "number" },
    { title: "headingText", value: "Sample Card", type: "string" },
    { title: "subText", value: "Subtext goes here", type: "string" },
    {
      title: "content",
      value:
        "This assumes that you are using these values as props in a React component. If you are",
      type: "string",
    },
    { title: "iconColor", value: "#F0F8FF", type: "string" },
  ];

  const { number } = useRecoilValue(currentSelectedElement);
  const [cardProperties, setCardProperties] = useRecoilState(
    CardWithImageProperties
  );

  const handlePropertyChange = (title: string, value: number | string) => {
    setCardProperties((prev) => {
      const existingCardIndex = prev.findIndex((card) => card.index === number);

      if (existingCardIndex !== -1) {
        return prev.map((card, index) =>
          index === existingCardIndex ? { ...card, [title]: value } : card
        );
      } else {
        const newCard = {
          index: number,
          width: 300,
          height: 400,
          color: "#13274F",
          cornerRadius: 2,
          headingColor: "#F0F8FF",
          subTextColor: "#B2BEB5",
          contentColor: "white",
          headingFont: 25,
          subTextFont: 15,
          contentFont: 20,
          headingText: "Sample Card",
          subText: "Subtext goes here",
          content:
            "This assumes that you are using these values as props in a React component. If you are",
          iconColor: "#F0F8FF",
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
          <label>{property.title}</label>
          <TextField
            id={property.title}
            label="Standard"
            variant="standard"
            className="bg-white text-black ml-2"
            onChange={(e) => {
              const value = e.target.value;
              handlePropertyChange(
                property.title,
                property.type === "number" ? value === "" ? 0 : parseFloat(value) : value
              );
            }}
            value={
              cardProperties
                .filter((card) => card.index === number)
                .map((card) => (card as any)[property.title])[0]
            }
          />
        </div>
      ))}
    </div>
  );
};
