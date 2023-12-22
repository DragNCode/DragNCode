import { ISimpleInput } from "@/types/type";
import React from "react";
import { Group, Rect, Text } from "react-konva";
import { selectedProperty } from "@/atoms/elements/selectedProperty";
import { useRecoilState } from "recoil";

export const SimpleInput: React.FC<ISimpleInput> = (props) => {

    const { inputWidth, inputHeight, cornerRadius, label } = props;

    const [prop, setProp] = useRecoilState(selectedProperty);

    return (
        <Group draggable onClick={() => {setProp('Input')}} >
            <Rect
                width={inputWidth}
                height={inputHeight}
                fill="#fff"
                cornerRadius={cornerRadius}
                stroke="#2196F3"
                strokeWidth={2}
            />
            <Text
                text={label}
                fontSize={14}
                fill="#666"
                align="left"
                x={5}
                y={(inputHeight - 14)/2}
            />
        </Group>
    )
}