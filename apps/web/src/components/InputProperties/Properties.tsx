import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { inputProperties } from "@/atoms/elements/Input/inputProperties";
import { Typography, TextField } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const CustomInputProperties: React.FC = () => {
  const properties = [
    { title: "width", value: 300, type: "number" },
    { title: "height", value: 400, type: "number" },
    { title: "color1", value: "#13274F", type: "string" },
    { title: "color2", value: "#F0F8FF", type: "string" },
    { title: "cornerRadius", value: 2, type: "number" },
    { title: "fontSize", value: 25, type: "number" },
    { title: "label", value: "click me", type: "string" },
  ];

  const { number } = useRecoilValue(currentSelectedElement);
  const [inptProperties, setInptProperties] = useRecoilState(inputProperties)

  const handlePropertyChange = (title: string, value: number | string) => {
    setInptProperties((prev:any) => {
      const existingBtnIndex = prev.findIndex((btn:any) => btn.index === number);

      if (existingBtnIndex !== -1) {
        return prev.map((btn:any, index:number) =>
          index === existingBtnIndex ? { ...btn, [title]: value } : btn
        );
      } else {
        const newBtn = {
            index:number,
            label:"click me",
            width:100,
            height:30,
            cornerRadius:2,
            color1:"darkblue",
            color2:"lightblue",
            colorHovered:"blue",
            textColor:"white",
            fontSize:16
        };
        (newBtn as any)[title] = value;
        return [...prev, newBtn];
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
             inptProperties
                .filter((btn) => btn.index === number)
                .map((btn) => (btn as any)[property.title])[0]
            }
          />
        </div>
      ))}
    </div>
  );
};
