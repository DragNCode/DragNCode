import { CheckBoxProerty } from "@/atoms/elements/CheckBox/CheckboxProperty";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { TextField } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const ChangeCheckBoxProperty: React.FC = () => {
  const properties = [
    { title: "width", value: 20, type: "number" },
    { title: "height", value: 20, type: "number" },
    { title: "cornerRadius", value: 5, type: "number" },
    { title: "label", value: "Label", type: "string" },
  ];

  const { number } = useRecoilValue(currentSelectedElement);
  const [btnProperties, setBtnProperties] = useRecoilState(
   CheckBoxProerty
  );

  const handlePropertyChange = (title: string, value: number | string) => {
    setBtnProperties((prev:any) => {
      const existingBtnIndex = prev.findIndex((btn:any) => btn.index === number);

      if (existingBtnIndex !== -1) {
        return prev.map((btn:any, index:number) =>
          index === existingBtnIndex ? { ...btn, [title]: value } : btn
        );
      } else {
        const newBtn = {
            index:number,
            label:"Label",
            width:20,
            height:20,
            cornerRadius:5,
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
              btnProperties
                .filter((btn) => btn.index === number)
                .map((btn) => (btn as any)[property.title])[0]
            }
          />
        </div>
      ))}
    </div>
  );
};
