<<<<<<< HEAD


const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
    // Perform any additional actions on radio button selection
  };

  const radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <div>
      <Stage width={3000} height={1000}>
        <RadioGroup
          options={radioOptions}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </Stage>
    </div>
=======
import React from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

// const ContainedButton = ({ text, width, height, cornerRadius, backgroundColor, textColor }) => {
//   return (
//     <Group>
//       <Rect
//         width={width}
//         height={height}
//         fill={backgroundColor}
//         cornerRadius={cornerRadius}
//         shadowColor="rgba(0, 0, 0, 0.3)"
//         shadowBlur={5}
//         shadowOffset={{ x: 2, y: 2 }}
//         shadowOpacity={0.8}
//       />
//       <Text
//         text={text}
//         width={width}
//         height={height}
//         align="center"
//         verticalAlign="middle"
//         fontSize={16}
//         fill={textColor}
//       />
//     </Group>
//   );
// };

import { ContainedButton } from '@repo/ui/button';

const App = () => {
  return (
    <Stage width={5000} height={5000}>
      <Layer>
        <ContainedButton
          text="Click me"
          width={200}
          height={50}
          cornerRadius={5}
          backgroundColor="#2196F3"
          textColor="#fff"
        />
      </Layer>
    </Stage>
    // <div>
    //     <Card title='hi' href='abc'   />
    // </div>
>>>>>>> 21a50d2521db89c2fad3aab5d24fa230d1a54e51
  );
};

export default App;
<<<<<<< HEAD



=======
>>>>>>> 21a50d2521db89c2fad3aab5d24fa230d1a54e51
