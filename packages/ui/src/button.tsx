import { Button, Checkbox } from '@chakra-ui/react';

interface SimpleButtonProps {
    colorScheme: 'blue' | 'teal' | 'gray' | 'red' | 'orange' | 'yellow' | 'cyan' | 'purple',
    variant?: 'solid' | 'outline' | 'link' | 'ghost',
    size: 'xs' | 'sm' | 'md' | 'lg',
    text: string,
    handleClick: () => void
}

export const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
    const { colorScheme, variant, size, text, handleClick } = props
    return (
        <Button colorScheme={colorScheme} size={size} variant={variant && 'solid'} onClick={handleClick} >{text}</Button>
    )
}

export const CheckBox: React.FC<SimpleButtonProps> = (props) => {
    const {colorScheme, size, text, handleClick} = props;
    return (
        <Checkbox colorScheme={colorScheme} size={size} onChange={handleClick}>{text}</Checkbox>
    )   
}
