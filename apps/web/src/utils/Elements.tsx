import { SimpleButton } from "@/draggables/Buttons";
import { SimpleCard } from "@/draggables/Cards";
import { SimpleInput } from "@/draggables/Inputs";
import { colors } from "@/types/colors";
import React from "react";

const Button: React.FC = () => {
    return (
        <SimpleButton 
            buttonWidth={140} 
            buttonHeight={35} 
            cornerRadius={4} 
            label='Click Me!' 
            color={colors.cyans[2]} 
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

export const comp: {[key: string]: React.ReactElement} = {
    'Button': <Button />,
    'Card': <Card />,
    'Input': <Input />
}