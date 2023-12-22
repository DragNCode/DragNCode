import React, { useEffect, useState } from 'react';
import { elementsToShow } from '@/atoms/elements/elementsToShow';
import { useRecoilState } from 'recoil';
import { Group, Layer, Stage } from 'react-konva';
import { elements, elementsObject } from '@/types/type';
import { countItemInArray, getString } from '@/utils/Objects';
import { SimpleButton } from '@/draggables/Buttons';
import { SimpleInput } from '@/draggables/Inputs';
import { SimpleCard } from '@/draggables/Cards';
import { currentSelectedElement } from '@/atoms/elements/currentSelectedElement';
import { ButtonText } from '@/atoms/elements/ButtonText';
import { PassThrough } from 'stream';

const Draw: React.FC = () => {

    return (
        <>

            <Top />
            <div className='flex' >
                <WhiteBoard />
                <Properties />
            </div>
            
        </>
    )
}

export default Draw;

const Top: React.FC = () => {

    const [elem, setElem] = useRecoilState(elementsToShow);

    useEffect(() => {
        console.log(elem);
    }, [elem]);

    const handleClick = (item: string) => {
        const count = countItemInArray(elem, item);
        console.log(count)
        setElem((prev) => [...prev, `${item}${count+1}`]);
    }

    return (
        <div className='flex mb-4' >
            <div className='w-48' >
                {
                    elements.map((item, index) => (
                        <button key={index} onClick={() => handleClick(item)} className='ml-2' >{item}</button>
                    ))
                }
            </div>
        </div>
    )
}

const WhiteBoard: React.FC = () => {

    const [stageSize, setStageSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const updateSize = () => {
            setStageSize({
                width: window.innerWidth*0.8,
                height: window.innerHeight*0.9
            })
        }

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }

    },[])

    const [elem, setElem] = useRecoilState(elementsToShow); // button1 , card1, button2
    const [currentElem, setCurrentElem] = useRecoilState(currentSelectedElement);

    const handleButtonClick = (number: number, word: string) => {
        setCurrentElem({
            number: number, 
            element: word
        })
    }

    const [text, setText] = useRecoilState(ButtonText);

    return (
        <Stage 
            height={stageSize.height}
            width={stageSize.width}
            className='inline-block bg-teal-700 rounded-md'
        >
            <Layer>
                {
                    elem.map((item, index) => {
                        
                        const { word, number } = getString(item);

                        // here we have access to number so we can check something like... [[1, hi], [2,bi]]
 
                        if (word === elementsObject.Button) {

                            let deep;

                            text.forEach(item => {
                                if (item[0] === number) {
                                    deep = item[1];
                                    console.log('object');
                                }
                            })

                            console.log(deep);

                            return (
                                <Group onClick={() => handleButtonClick(number, word)} >
                                    <SimpleButton
                                        buttonHeight={40}
                                        buttonWidth={140}
                                        color='teal'
                                        cornerRadius={4}
                                        label={deep ? deep : 'Click Me!'}
                                        key={number}
                                    />
                                </Group>
                            )
                        }

                        if (word === elementsObject.Card) {
                            return (
                                <SimpleCard 
                                    cardWidth={250}
                                    cardHeight={200}
                                    title='This is the title'
                                    content='This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title'
                                    cornerRadius={4}
                                    key={index}
                                />
                            )
                        }

                        if (word === elementsObject.Input) {
                            return (
                                <SimpleInput 
                                    inputWidth={250}
                                    inputHeight={25}
                                    cornerRadius={2}
                                    label='Enter text here...'
                                    key={index}
                                />
                            )
                        }

                        return;

                    })
                }
            </Layer>
        </Stage>
    )
}

const Properties: React.FC = () => {

    const [element, setElement] = useRecoilState(currentSelectedElement);
    const [text, setText] = useRecoilState(ButtonText);

    const handleChange = (e: any) => {
        const { number } = element;
        let updateText = []
        text.forEach(item => {
            if (item[0] !== number) {
                updateText.push(item);
            }
        });
        updateText.push([number, e.target.value]);
        setText(updateText);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder='enter something' />
        </div>
    )
}
