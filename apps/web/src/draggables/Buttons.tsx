import React from "react";
import { Group, Rect, Text } from "react-konva";
import { ISimpleButton } from "@/types/type";

export const SimpleButton: React.FC<ISimpleButton> = (props) => {

    const { buttonWidth, buttonHeight, cornerRadius, label, color } = props; //key

    return (
        <Group draggable >
            <Rect
                width={buttonWidth}
                height={buttonHeight}
                fill={color} // Material UI blue color
                cornerRadius={cornerRadius}
                shadowColor="rgba(0, 0, 0, 0.3)"
                shadowBlur={5}
            />
            <Text
                text={label}
                width={buttonWidth}
                fontSize={16}
                fill="#fff" // Text color
                align="center"
                y={(buttonHeight - 16)/2}
            />
        </Group>
    )
}

export const Button2: React.FC = () => {
    return (
        <div>
            Button 2
        </div>
    )
}

export const Button3: React.FC = () => {
    return (
        <div>
            Button 3
        </div>
    )
}