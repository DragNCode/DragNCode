import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Text, Circle, Group } from 'react-konva';
import { Html, Portal } from 'react-konva-utils';

const Draw: React.FC = () => {

    interface IStage {
        width: number,
        height: number
    };

    interface IComp {
        [key: string]: React.ReactElement
    }

    const [stageSize, setStageSize] = useState<IStage>({width: 0, height: 0});
    const [elementsToShow, setElementsToShow] = useState<string[]>(['']);
    
    const components: IComp = {
        'Rectangle': <Rectangle />,
        'BlueCircle': <BlueCircle />,
        'RedCircle': <RedCircle />,
        'Custom': <Custom />,
        'MaterialUICard': <MaterialUICard />,
        'Input': <Input />
    };

    const totalElements: string[] = ['Rectangle', 'BlueCircle', 'RedCircle', 'Custom', 'MaterialUICard', 'Input'];

    useEffect(() => {
        const updateSize: () => void = () => {
            setStageSize({
                width: window.innerWidth * 0.99,
                height: window.innerHeight * 0.8
            })
        }

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }

    }, [])
    
    const handleClick = (item: string) => {
        console.log(item);
        setElementsToShow((prev) => [...prev, item]);
    }

    return (
        <div>

            <div className='flex' >
                {
                    totalElements.map((item, index) => (
                        <button className='ml-8'  onClick={() => handleClick(item)} key={index} >
                            {item}
                        </button>
                    ))
                }
            </div>

            <Stage 
                width={stageSize.width} 
                height={stageSize.height} 
                style={{
                    border: 'black 2px solid', 
                    marginTop: '8vh'
                }} 
            >
                <Layer>
                    {
                        elementsToShow.map((item, index) => {
                            const componentToRender: React.ReactElement | undefined = components[item];
                            if (componentToRender) {
                                return (
                                    componentToRender
                                )
                            } else {
                                return
                            }
                        })
                    }
                </Layer>
            </Stage>
        </div>
    )
}

const Rectangle: React.FC = () => {
    return (
        <Rect 
            width={100}
            height={100}
            fill='red'
            draggable
        />
    )
}

const BlueCircle: React.FC = () => {
    return (
        <Circle 
            radius={50}
            fill='blue'
            draggable
        />
    )
}

const RedCircle: React.FC = () => {
    return (
        <Circle 
            radius={50}
            fill='red'
            draggable
        />
    )
}

const Custom: React.FC = () => {
    return (
        <Group
            draggable
        >
            <Rect
                width={120}
                height={40}
                fill="#3f51b5" // Material UI primary color
                cornerRadius={4}
                shadowColor="rgba(0, 0, 0, 0.3)"
                shadowBlur={5}
            />
            <Text
                text="Click me!"
                width={120}
                height={40}
                fontSize={16}
                fill="#fff" // Text color
                align="center"
                verticalAlign="middle"
            />
      </Group>
    )
}

type MaterialUIProps = {
    color?: string
}

const MaterialUICard: React.FC<MaterialUIProps> = () => {

  const cardWidth = 240;
  const cardHeight = 140;
  const cornerRadius = 8;

  const [color, setColor] = useState('#fff');

  return (
    <Group
      draggable
    >
      <Rect
        width={cardWidth}
        height={cardHeight}
        fill={color} // Card background color
        cornerRadius={cornerRadius}
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowBlur={5}
      />
      <Text
        text="Card Title"
        width={cardWidth}
        fontSize={18}
        fill="#333" // Title color
        align="center"
        y={10}
      />
      <Text
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        width={cardWidth - 20}
        fontSize={14}
        fill="#555" // Text color
        align="left"
        x={10}
        y={40}
        lineHeight={1.2}
      />
    </Group>
  );
};

const Input: React.FC = () => {
    const inputWidth = 200;
  const inputHeight = 40;
  const cornerRadius = 4;

  return (
    <Group
        draggable
    >
      {/* Input Background */}
      <Rect
        width={inputWidth}
        height={inputHeight}
        fill="#fff" // Input background color
        cornerRadius={cornerRadius}
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowBlur={5}
      />
      {/* Input Text */}
      <Text
        text={'inputText'}
        width={inputWidth}
        fontSize={16}
        fill="#333" // Text color
        align="left"
        padding={10}
      />
    </Group>
  );
}

export default Draw;