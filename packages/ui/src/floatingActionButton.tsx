import React, { useState } from "react";
import { Circle, Text, Group } from "react-konva";

interface IFloatingActionButtonProps {
  icon: string;
  onClick: () => void;
}

export const FloatingActionButton: React.FC<IFloatingActionButtonProps> = ({
  icon,
  onClick,
}) => {
  const [rotation, setRotation] = useState(0);

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <Group
      onClick={handleButtonClick}
      x={20}
      y={20}
      rotation={rotation}
      cursor="pointer"
    >
      <Circle
        radius={30}
        fill="#2196F3" // Material Design blue color
        shadowColor="black"
        shadowBlur={10}
        shadowOffset={{ x: 2, y: 2 }}
        shadowOpacity={0.5}
      />
      <Text text={icon} x={-5} y={-10} fontSize={24} fill="white" />
    </Group>
  );
};
