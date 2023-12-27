import React, { useState } from "react";

import { Group, Rect, Text } from "react-konva";

interface IButtonProps {
  label:string,
  onClick: Function
}

export const CustomButton:React.FC<IButtonProps> = ({ label, onClick }) => {
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
        width={100}
        height={50}
        fill={isClicked ? "darkblue" : isHovered ? "blue" : "lightblue"}
        cornerRadius={10}
      />
      <Text
        text={label}
        x={50 - label.length * 3}
        y={25 - 10}
        fontSize={16}
        fill="white"
      />
    </Group>
  );
};

export const OutlineButton:React.FC<IButtonProps>  = ({ label, onClick }) => {
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
        width={100}
        height={50}
        fill="transparent"
        stroke={isClicked ? "darkblue" : isHovered ? "blue" : "lightblue"}
        strokeWidth={2}
        cornerRadius={10}
      />
      <Text
        text={label}
        x={50 - label.length * 3}
        y={25 - 10}
        fontSize={16}
        fill={isClicked ? "darkblue" : isHovered ? "blue" : "lightblue"}
      />
    </Group>
  );
};

export const TextButton:React.FC<IButtonProps>  = ({ label, onClick }) => {
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
        fill={isClicked ? "darkblue" : isHovered ? "blue" : "lightblue"}
        padding={10}
      />
    </Group>
  );
};
