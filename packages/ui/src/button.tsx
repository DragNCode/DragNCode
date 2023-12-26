"use client";
import React from "react";
import { Stage, Layer, Rect, Text, Group } from "react-konva";

type IContainedButtonProps = {
  text: string;
  width: number;
  height: number;
  cornerRadius: number;
  backgroundColor: string;
  textColor: string;
};

export const ContainedButton: React.FC<IContainedButtonProps> = ({
  text,
  width,
  height,
  cornerRadius,
  backgroundColor,
  textColor,
}) => {
  return (
    <Group>
      <Rect
        width={width}
        height={height}
        fill={backgroundColor}
        cornerRadius={cornerRadius}
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowBlur={5}
        shadowOffset={{ x: 2, y: 2 }}
        shadowOpacity={0.8}
      />
      <Text
        text={text}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
        fontSize={16}
        fill={textColor}
      />
    </Group>
  );
};
