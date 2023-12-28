import React, { useState } from "react";

import { Group, Rect, Text } from "react-konva";

interface IButtonProps {
  label?: string;
  onClick?: Function;
  width?: number;
  height?: number;
  fontSize?: number;
  color1?: string;
  color2?: string;
  colorHovered?: string;
  cornerRadius?: number;
  textColor?: string;
}

export const CustomButton: React.FC<IButtonProps> = ({
  label,
  onClick,
  width,
  height,
  fontSize,
  color1,
  color2,
  colorHovered,
  cornerRadius,
  textColor,
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
    onClick(label);
  };

  return (
    <Group
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      draggable
    >
      <Rect
        width={width}
        height={height}
        fill={isClicked ? color1 : isHovered ? colorHovered : color2}
        cornerRadius={cornerRadius}
      />
      <Text
        text={label}
        x={50 - label.length * 3}
        y={8}
        fontSize={fontSize}
        fill={textColor}
      />
    </Group>
  );
};

export const OutlineButton: React.FC<IButtonProps> = ({
  label,
  onClick,
  width,
  height,
  fontSize,
  color1,
  color2,
  colorHovered,
  cornerRadius,
  textColor,
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
    onClick(label);
  };

  return (
    <Group
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      draggable
    >
      <Rect
        width={width}
        height={height}
        fill="transparent"
        stroke={isClicked ? color1 : isHovered ? colorHovered : color2}
        strokeWidth={2}
        cornerRadius={cornerRadius}
      />
      <Text
        text={label}
        x={50 - label.length * 3}
        y={8}
        fontSize={fontSize}
        fill={isClicked ? color1 : isHovered ? colorHovered : color2}
      />
    </Group>
  );
};

export const TextButton: React.FC<IButtonProps> = ({
  label,
  onClick,
  color1,
  color2,
  colorHovered,
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
    onClick(label);
  };

  return (
    <Group
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      draggable
    >
      <Text
        text={label}
        fontSize={16}
        fill={isClicked ? color1 : isHovered ? colorHovered : color2}
        padding={10}
      />
    </Group>
  );
};
