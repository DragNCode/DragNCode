import React from "react";
import { Stage, Layer, Group, Circle, Text } from "react-konva";

import { CustomButton, OutlineButton, TextButton } from "@repo/ui/button"; // Import your CustomButton component
// Import your TextButton component
import { Checkbox } from "@repo/ui/checkbox"; // Import your Checkbox component
import { RadioButton } from "@repo/ui/radio"; // Import your RadioButton component

const App = () => {
  const handleButtonClick = (label) => {
    console.log("Button Clicked:", label);
  };

  const handleCheckboxChange = (isChecked) => {
    console.log("Checkbox Checked:", isChecked);
  };

  const handleRadioChange = (value) => {
    console.log("Radio Selected:", value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stage width={1400} height={11300}>
        <Layer>
          <Group y={0}>
            <CustomButton
              label="Custom Button"
              onClick={() => handleButtonClick("Custom Button")}
            />
          </Group>

          <Group y={100}>
            <OutlineButton
              label="Outline Button"
              onClick={() => handleButtonClick("Outline Button")}
            />
          </Group>

          <Group y={200}>
            <TextButton
              label="Text Button"
              onClick={() => handleButtonClick("Text Button")}
            />
          </Group>

          <Group y={300}>
            <Checkbox label="Checkbox" onChange={handleCheckboxChange} />
          </Group>

          <Group y={400}>
            <RadioButton
              label="Option 1"
              value="option1"
              onChange={handleRadioChange}
            />
          </Group>

          <Group y={550}>
            <RadioButton
              label="Option 2"
              value="option2"
              onChange={handleRadioChange}
            />
          </Group>

          <Group y={800}>
            <RadioButton
              label="Option 3"
              value="option3"
              onChange={handleRadioChange}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
