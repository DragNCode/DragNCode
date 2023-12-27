import React, { useState } from "react";
import { Rect, Circle, Group } from "react-konva";

interface IMUISwitchProps {
  width: number,
  height: number,
  trackColor: string,
  thumbColor: string,
  onChange: (isOn: boolean) => void
}

export const MUISwitch: React.FC<IMUISwitchProps> = ({ width, height, trackColor, thumbColor, onChange }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(newState);
  };

  return (
    <Group draggable onClick={handleToggle} onTap={handleToggle}>
      <Rect
        width={width}
        height={height}
        fill={isOn ? trackColor : "#ccc"}
        cornerRadius={height / 2}
        shadowColor="#000"
        shadowBlur={5}
        shadowOffset={{ x: 0, y: 2 }}
        shadowOpacity={0.2}
      />
      <Circle
        x={isOn ? width - height / 2 : height / 2}
        y={height / 2}
        radius={height / 2 - 5}
        fill={thumbColor}
        shadowColor="#000"
        shadowBlur={5}
        shadowOffset={{ x: 0, y: 2 }}
        shadowOpacity={0.2}
      />
    </Group>
  );
};
