import { SimpleButton } from "@/draggables/Buttons";
import { SimpleCard } from "@/draggables/Cards";
import { SimpleInput } from "@/draggables/Inputs";
import { colors } from "@/types/colors";
import { ISimpleButton } from "@/types/type";
import React from "react";
import { useRecoilState } from "recoil";

const Button: React.FC<ISimpleButton> = (props) => {

    const { buttonHeight, buttonWidth, cornerRadius, label, color } = props;

    return (
        <SimpleButton 
            buttonWidth={buttonWidth} 
            buttonHeight={buttonHeight} 
            cornerRadius={cornerRadius} 
            label={label} 
            color={color} 
        />
    )
}

const Card: React.FC = () => {
    return (
        <SimpleCard 
            cardWidth={250}
            cardHeight={200}
            title='This is the title'
            content='This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title'
            cornerRadius={4}
        />
    )
}

const Input: React.FC = () => {

    return (
        <SimpleInput 
            inputWidth={250}
            inputHeight={25}
            cornerRadius={2}
            label='Enter text here...'
        />
    )
}