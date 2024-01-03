import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
    color: string,
    onChange: any
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {

    const { color, onChange } = props;

    return (
        <HexColorPicker color={color} onChange={onChange} />
    )
}

export default ColorPicker;