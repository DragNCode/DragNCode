import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const Demo = () => {

    const [color, setColor] = useState<string>("");

    useEffect(() => {
        console.log(color);
    }, [color]);

    return (
        <HexColorPicker color={color} onChange={setColor} className="mt-4 ml-4" />
    )
};

export default Demo;