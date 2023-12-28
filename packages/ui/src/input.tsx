import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

interface ICustomInput {
  value:string;
  placeholder:string;
  width:number;
  height:number;
  variant:string;
  fontSize:number;
  cornerRadius:number;
  color1:string;
  color2:string;
}

export const CustomInput:React.FC<ICustomInput> = ({
  value,
  placeholder,
  width,
  height,
  variant,
  fontSize,
  cornerRadius,
  color1,
  color2
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

//   const handleTextChange = (e) => {
//     onChange(e.target.value);
//   };

  const renderBorder = () => {
    switch (variant) {
      case "outlined":
        return (
          <Rect
            width={width}
            height={height}
            fill={isFocused ? "#E3F2FD" : "white"}
            stroke="#90CAF9"
            strokeWidth={2}
            cornerRadius={cornerRadius}
          />
        );
      case "filled":
        return (
          <Rect
            width={width}
            height={height}
            fill={isFocused ? "#BBDEFB" : "white"}
            cornerRadius={5}
          />
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {renderBorder()}
      <Text
        text={value || placeholder}
        x={variant === "outlined" ? 10 : 5}
        y={5}
        fontSize={fontSize}
        fill={isFocused ? color1 : color2}
        width={width - (variant === "outlined" ? 20 : 10)}
        height={height - 10}
        verticalAlign="middle"
        align="left"
        onFocus={handleFocus}
        onBlur={handleBlur}
        
      />
    </React.Fragment>
  );
};
