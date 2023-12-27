import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

export const CustomInput = ({
  value,
  placeholder,
  width,
  height,
  variant,
  fontSize,
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
            cornerRadius={5}
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
        fill={isFocused ? "black" : "#757575"}
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
