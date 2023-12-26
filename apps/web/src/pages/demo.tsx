<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Text, Image, Group, RegularPolygon } from 'react-konva';
=======
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
>>>>>>> 1f0ae00f1dc16e3716193a718ddd1e6d02fff8d7

const KonvaMusicCard = () => {
  const cardWidth = 400;
  const cardHeight = 150;
  const cornerRadius = 10;
  const cardColor = '#4CAF50'; // Green
  const headingColor = 'white';
  const subTextColor = 'lightgrey';
  const controlButtonColor = '#2196F3'; // Blue
  const iconColor = 'white';

  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = 'https://via.placeholder.com/200x200';
    img.onload = () => {
      setImage(img);
    };
  }, []);

  return (
    <Stage width={500} height={500}>
      <Layer>
        {/* Konva Rect as card background */}
        <Group draggable >
        <Rect
          width={cardWidth}
          height={cardHeight}
          fill={cardColor}
          cornerRadius={cornerRadius}
          shadowBlur={10}
        />

        {/* Text and Image content inside the card */}
        <Group>
          {/* Image */}
          {image && (
            <Image
              image={image}
              width={cardWidth * 0.4}
              height={cardHeight}
              x={cardWidth * 0.6}
            />
          )}

          {/* Song Details */}
          <Group x={20} y={20} width={cardWidth * 0.6} height={cardHeight}>
            {/* Heading (Song Name) */}
            <Text
              text="Song Name"
              fontSize={18}
              fontFamily="Arial"
              fill={headingColor}
            />

            {/* Subtext (Singer Name) */}
            <Text
              text="Singer Name"
              fontSize={12}
              fontFamily="Arial"
              fill={subTextColor}
              y={30}
            />
          </Group>
        </Group>
        </Group>
      </Layer>
    </Stage>
<<<<<<< HEAD
  );
};

export default KonvaMusicCard;
=======
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
>>>>>>> 1f0ae00f1dc16e3716193a718ddd1e6d02fff8d7
