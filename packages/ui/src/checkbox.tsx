import React, { useState } from "react";
import { Group, Rect, Text, Line } from "react-konva";

interface ICheckboxProps {
  label: string,
  width: number,
  height: number,
  cornerRadius: number
}

export const Checkbox: React.FC<ICheckboxProps> = ({ label, width, height, cornerRadius }) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!isChecked);
  };

  return (
    <Group onClick={handleClick} cursor="pointer">
      <Rect
        width={width}
        height={height}
        fill={isChecked ? "blue" : "white"}
        stroke="black"
        strokeWidth={2}
        cornerRadius={cornerRadius}
      />
      {isChecked && (
        <Line points={[5, 12, 10, 17, 17, 7]} stroke="white" strokeWidth={2} />
      )}
      <Text text={label} x={30} y={2} fontSize={16} fill="white" />
    </Group>
  );
};
