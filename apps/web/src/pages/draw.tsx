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
import { InputProperties } from '@/atoms/elements/InputProperties';

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

    const handleInputClick = (number: number, word: string) => {
        setCurrentElem({
            number: number,
            element: word
        })
    }

    const [attributes, setAttributes] = useRecoilState(ButtonText);
    const [inputAttributes, setInputAttributes] = useRecoilState(InputProperties);

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

                            let buttonText, buttonWidth, buttonHeight;
                            attributes.text.forEach(item => {
                                if (item[0] === number) {
                                    buttonText = item[1];
                                }
                            })
                            attributes.width.forEach(item => {
                                if (item[0] === number) {
                                    buttonWidth = item[1];
                                }
                            })
                            attributes.height.forEach(item => {
                                if (item[0] === number) {
                                    buttonHeight = item[1];
                                }
                            })

                            return (
                                <Group onClick={() => handleButtonClick(number, word)} >
                                    <SimpleButton
                                        buttonHeight={buttonHeight ? buttonHeight : 40}
                                        buttonWidth={buttonWidth ? buttonWidth : 140}
                                        color='#4dd0e1'
                                        cornerRadius={4}
                                        label={buttonText ? buttonText : 'Click Me!'}
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

                            let inputWidth, inputHeight;
                            inputAttributes.height.forEach(item => {
                                if (item[0] === number) {
                                    inputHeight = item[1];
                                }
                            })
                            inputAttributes.width.forEach(item => {
                                if (item[0] === number) {
                                    inputWidth = item[1];
                                }
                            })

                            return (
                                <Group onClick={() => handleInputClick(number, word)} >
                                    <SimpleInput
                                        inputWidth={inputWidth ? inputWidth : 250}
                                        inputHeight={inputHeight ? inputHeight : 30}
                                        cornerRadius={2}
                                        label='Enter text here...'
                                        key={index}
                                    />
                                </Group>
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
    const [attributes, setAttributes] = useRecoilState(ButtonText);
    const [inputAttributes, setInputAttributes] = useRecoilState(InputProperties);


    const handleTextChange = (e: any) => {
        const { number } = element;
        let updateText = []
        attributes.text.forEach(item => {
            if (item[0] !== number) {
                updateText.push(item);
            }
        });
        updateText.push([number, e.target.value]);
        const newText = {...attributes, text: updateText};
        setAttributes(newText);
    }

    const handleWidthChange = (e: any) => {
        if (element.element === elementsObject.Button) {
            let updatedWidth = [];
            attributes.width.forEach(item => {
                if (item[0] !== element.number) {
                    updatedWidth.push(item);
                }
            });
            updatedWidth.push([element.number, parseInt(e.target.value)]);
            const newWidth = {...attributes, width: updatedWidth};
            setAttributes(newWidth);
            return;
        }
        if (element.element === elementsObject.Input) {
            let updatedWidth = [];
            inputAttributes.width.forEach(item => {
                if (item[0] !== element.number) {
                    updatedWidth.push(item);
                }
            })
            updatedWidth.push([element.number, parseInt(e.target.value)]);
            const newWidth = {...inputAttributes, width: updatedWidth};
            setInputAttributes(newWidth);
            console.log(newWidth);
            return;
        }
    }

    const handleHeightChange = (e: any) => {
        if (element.element === elementsObject.Button) {
            let updatedHeight = [];
            attributes.height.forEach(item => {
                if (item[0] !== element.number) {
                    updatedHeight.push(item);
                }
            });
            updatedHeight.push([element.number, parseInt(e.target.value)]);
            const newHeight = {...attributes, height: updatedHeight};
            setAttributes(newHeight);
            return;
        }
        if (element.element === elementsObject.Input) {
            let updatedHeight = [];
            inputAttributes.height.forEach(item => {
                if (item[0] !== element.number) {
                    updatedHeight.push(item);
                }
            })
            updatedHeight.push([element.number, parseInt(e.target.value)]);
            const newHeight = {...inputAttributes, width: updatedHeight};
            setInputAttributes(newHeight);
            return;
        }
    }

    return (
        <div>
            <h3>{element.element}</h3> <br /> <br /> <br />
            <label htmlFor="">Enter Text for {element.element}</label> <br />
            <input type="text" onChange={handleTextChange} placeholder=' Enter something' />
            <br /> <br />
            <label htmlFor="">Enter Width for {element.element}</label> <br />
            <input type="text" onChange={handleWidthChange} placeholder=' Enter width...' />
            <br /> <br />
            <label htmlFor="">Enter Height for {element.element}</label> <br />
            <input type="text" onChange={handleHeightChange} placeholder=' Enter height...' />
        </div>
    )
}
