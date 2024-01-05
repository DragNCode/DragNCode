import { CardWithImageProperties } from "@/atoms/elements/CardWithImage/CardWithImageProperties";
import { SongCardProperties } from "@/atoms/elements/SongCard/SongCardProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { Typography, TextField } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { OutlinedInput, OutlinedTextarea } from "../Card/Properties";
import { SongCardJson1 } from "@/atoms/json1/SongCard";

export const ChangeSongCardProperties: React.FC = () => {
  const properties = [
    { title: "color", value: "#13274F", type: "string" },
    { title: "headingColor", value: "#F0F8FF", type: "string" },
    { title: "subTextColor", value: "#B2BEB5", type: "string" },
    { title: "contentColor", value: "white", type: "string" },
    { title: "iconColor", value: "#F0F8FF", type: "string" },
  ];

  const PositionSizeProperties = [
    { title: "width", value: 450, type: "number", name: "Width" },
    { title: "height", value: 200, type: "number", name: "Height" },
    { title: "cornerRadius", value: 2, type: "number", name: "Corner Radius" },
  ];

  const FontProperties = [
    { title: "headingFont", value: 25, type: "number", name: "Heading Font" },
    { title: "subTextFont", value: 15, type: "number", name: "SubText Font" },
    { title: "contentFont", value: 20, type: "number", name: "Content Font" },
  ];

  const TextProperties = [
    {
      title: "headingText",
      value: "Sample Card",
      type: "string",
      name: "Heading Text",
    },
    {
      title: "subText",
      value: "Subtext goes here",
      type: "string",
      name: "SubText",
    },
    {
      title: "content",
      value:
        "This assumes that you are using these values as props in a React component.",
      type: "string",
      name: "Content",
    },
  ];

  const { number } = useRecoilValue(currentSelectedElement);
  const [cardProperties, setCardProperties] =
    useRecoilState(SongCardProperties);
  const [json, setJson] = useRecoilState(SongCardJson1);

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

    const jsonObject = json.find((item) => item.index === number);

    if (!jsonObject) {
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
        xPosition: 0,
        yPosition: 0
      };
      (newCard as any)[title] = value;
      setJson(prev => [...prev, newCard]);
    } else {
      setJson(prev => {
        return prev.map(p => {
          if (p.index === number) {
            return {...p, [title]: value};
          } else {
            return p;
          }
        })
      })
    }

  };

  return (
    <div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Postion & Size</p>
        {PositionSizeProperties.map((property) => (
          <div className="flex align-middle items-center" key={property.name}>
            <p className="ml-6 m-6 inline-block w-24">{property.name}</p>
            <OutlinedInput
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
                cardProperties
                  .filter((card) => card.index === number)
                  .map((card) => (card as any)[property.title])[0] ??
                property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Text</p>
        {TextProperties.map((property) => (
          <div key={property.name}>
            <p className="ml-24 mt-2 inline-block w-24">{property.name}</p>
            <OutlinedTextarea
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
                cardProperties
                  .filter((card) => card.index === number)
                  .map((card) => (card as any)[property.title])[0] ??
                property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
      <div>
        <p className="mt-4 ml-2 text-xl">Font</p>
        {FontProperties.map((property) => (
          <div className="flex align-middle items-center" key={property.name}>
            <p className="ml-6 m-6 inline-block w-24">{property.name}</p>
            <OutlinedInput
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
                cardProperties
                  .filter((card) => card.index === number)
                  .map((card) => (card as any)[property.title])[0] ??
                property.value
              }
            />
          </div>
        ))}
      </div>
      <hr className=" mt-4 w-52 m-auto" />
    </div>
  );
};
