import React, { useState } from "react";
import { Group, Rect, Text, Line } from "react-konva";

interface ICheckboxProps {
  label: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ label }) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!isChecked);
  };

  return (
    <Group onClick={handleClick} cursor="pointer">
      <Rect
        width={20}
        height={20}
        fill={isChecked ? "blue" : "white"}
        stroke="black"
        strokeWidth={2}
        cornerRadius={5}
      />
      {isChecked && (
        <Line points={[5, 12, 10, 17, 17, 7]} stroke="white" strokeWidth={2} />
      )}
      <Text text={label} x={30} y={2} fontSize={16} fill="white" />
    </Group>
  );
};
