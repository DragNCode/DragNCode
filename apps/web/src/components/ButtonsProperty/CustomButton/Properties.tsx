import { customButtonProperties } from "@/atoms/elements/Button/CustomButton/CustomButtonProperties";
import { currentSelectedElement } from "@/atoms/elements/currentSelectedElement";
import { CustomButtonJson1 } from "@/atoms/json1/Button/CustomButton";
import {
  OutlinedInput,
  OutlinedTextarea,
} from "@/components/CardsProperties/Card/Properties";
import { Typography, TextField } from "@mui/material";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const CustomButtonProperties: React.FC = () => {
  const properties = [
    { title: "color1", value: "#13274F", type: "string" },
    { title: "color2", value: "#F0F8FF", type: "string" },
    { title: "colorHovered", value: "#F0F8FF", type: "string" },
    { title: "textColor", value: "white", type: "string" },
  ];

  const TextProperties = [
    { title: "label", value: "Click me", type: "string", name: "Label" },
  ];

  const PositionSizeProperties = [
    { title: "width", value: 300, type: "number", name: "Width" },
    { title: "height", value: 400, type: "number", name: "Height" },
    { title: "cornerRadius", value: 2, type: "number", name: "Corner Radius" },
  ];

  const FontProperties = [
    { title: "fontSize", value: 25, type: "number", name: "Font Size" },
  ];

  const { number } = useRecoilValue(currentSelectedElement);
  const [json, setJson] = useRecoilState(CustomButtonJson1);
  const [btnProperties, setBtnProperties] = useRecoilState(
    customButtonProperties
  );

  const handlePropertyChange = (title: string, value: number | string) => {
    setBtnProperties((prev: any) => {
      const existingBtnIndex = prev.findIndex(
        (btn: any) => btn.index === number
      );

      if (existingBtnIndex !== -1) {
        return prev.map((btn: any, index: number) =>
          index === existingBtnIndex ? { ...btn, [title]: value } : btn
        );
      } else {
        const newBtn = {
          index: number,
          label: "click me",
          width: 100,
          height: 30,
          cornerRadius: 2,
          color1: "darkblue",
          color2: "lightblue",
          colorHovered: "blue",
          textColor: "white",
          fontSize: 16,
        };
        (newBtn as any)[title] = value;
        return [...prev, newBtn];
      }
    });

    const jsonObject = json.find((item) => item.index === number);

    if (!jsonObject) {
      const newBtn = {
        index: number,
        label: "click me",
        width: 100,
        height: 30,
        cornerRadius: 2,
        color1: "darkblue",
        color2: "lightblue",
        colorHovered: "blue",
        textColor: "white",
        fontSize: 16,
        xPosition: 0,
        yPosition: 0,
      };
      (newBtn as any)[title] = value;
      setJson((prev) => [...prev, newBtn]);
    } else {
      setJson((prev) => {
        return prev.map((p) => {
          if (p.index === number) {
            return { ...p, [title]: value };
          } else {
            return p;
          }
        });
      });
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
                btnProperties
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
                btnProperties
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
                btnProperties
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
