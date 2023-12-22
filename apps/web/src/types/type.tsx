import React from "react";
import { SimpleButton } from "../draggables/Buttons";
import { colors } from "./colors";

export interface ISimpleButton {
    buttonWidth: number,
    buttonHeight: number,
    cornerRadius: number,
    label: string,
    color: string
}

export interface ISimpleInput {
    inputWidth: number,
    inputHeight: number,
    cornerRadius: number,
    label: string
}

export interface ISimpleCard {
    cardWidth: number,
    cardHeight: number,
    cornerRadius: number,
    title: string,
    content: string
}

export interface ICardWithImage {
    cardWidth: number,
    cardHeight: number,
    cornerRadius: number,
    title: string,
    content: string,
    imageUrl: CanvasImageSource | undefined
}

export const elements = [
    'Button',
    'Card',
    'Input'
]