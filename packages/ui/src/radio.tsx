import React, { useState } from "react";
import { Stage, Layer, Group, Circle, Text } from "react-konva";

interface IRadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange: Function;
}

interface IRadioGroupProps {
  label: string;
  value: string;
  options: Array<any>;
  selectedValue: string;
  onChange: Function;
}

export const RadioButton: React.FC<IRadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onChange,
}) => {
  const handleButtonClick = () => {
    onChange(value);
  };

  return (
    <Group onClick={handleButtonClick} cursor="pointer" draggable>
      <Circle
        radius={8}
        fill={selectedValue === value ? "#1976D2" : "white"}
        stroke="white"
        strokeWidth={2}
      />
      {selectedValue === value && <Circle radius={4} fill="white" />}
      <Text text={label} x={20} y={-6} fontSize={16} fill="white" />
    </Group>
  );
};

export const RadioGroup: React.FC<IRadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Layer>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      ))}
    </Layer>
  );
};
