import { Input, InputGroup, InputLeftAddon, InputRightAddon, propNames } from '@chakra-ui/react'
import React from 'react'

interface SimpleInputProps {
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled',
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string,
    handleChange?: (e: any) => void
}

interface InputWithAddonProps {
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled',
    size: 'xs' | 'sm' | 'md' | 'lg',
    placeholder: string,
    handleChange?: (e: any) => void,
    leftAddon?: string,
    rightAddon?: string
}

export const SimpleInput: React.FC<SimpleInputProps> = (props) => {

    const { variant, size, placeholder, handleChange } = props;

    return (
        <Input variant={variant && 'outline'} size={size} placeholder={placeholder} onChange={handleChange} />
    )
}

export const InputWithAddon: React.FC<InputWithAddonProps> = (props) => {

    const { variant, size, placeholder, handleChange, leftAddon, rightAddon } = props;

    return (
        <InputGroup size={size}>
            { leftAddon ? <InputLeftAddon children={leftAddon} /> : '' }
            <Input size={size} variant={variant && 'outline'} placeholder={placeholder} />
            { rightAddon ? <InputRightAddon children={rightAddon} /> : '' }
        </InputGroup>
    )

}