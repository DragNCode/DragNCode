import React, { useEffect, useState } from 'react';
import { elementsToShow } from '@/atoms/elements/elementsToShow';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Group, Layer, Stage } from 'react-konva';
import { elementsObject } from '@/types/type';
import { getString } from '@/utils/Objects';
import { SimpleButton } from '@/draggables/Buttons';
import { SimpleInput } from '@/draggables/Inputs';
import { SimpleCard } from '@/draggables/Cards';
import { currentSelectedElement } from '@/atoms/elements/currentSelectedElement';
import { ButtonText } from '@/atoms/elements/ButtonText';
import { InputProperties } from '@/atoms/elements/InputProperties';
import { CardProperties } from '@/atoms/elements/CardProperties';
import { button } from '@/atoms/json1/button';
import { card } from '@/atoms/json1/card';
import { input } from '@/atoms/json1/input';

const WhiteBoard: React.FC = () => {

    const [stageSize, setStageSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const updateSize = () => {
            setStageSize({
                width: window.innerWidth*0.6,
                height: window.innerHeight*0.9
            })
        }

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }

    },[])

    const [elem, setElem] = useRecoilState(elementsToShow);
    const [currentElem, setCurrentElem] = useRecoilState(currentSelectedElement);
    const [buttonJson, setButtonJson] = useRecoilState(button);
    const [cardJson, setCardJson] = useRecoilState(card);
    const [inputJson, setInputJson] = useRecoilState(input);
    const attributes = useRecoilValue(ButtonText);
    const inputAttributes = useRecoilValue(InputProperties);
    const cardAttributes = useRecoilValue(CardProperties);

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

    const handleButtonDrag = (
        number: number, 
        word: string, 
        coordinates: {x: number, y: number},
    ) => {
        const uniqueId: string = `${word}${number}`;
        let buttonWidth: number, buttonHeight: number;
        attributes.width.forEach(item => {
            if (item[0] === number) {
                buttonWidth = item[1]
            }
        })
        attributes.height.forEach(item => {
            if (item[0] === number) {
                buttonHeight = item[1];
            }
        })
        
        const buttonInfo = {
            id: uniqueId,
            coordinates: {
                x: coordinates.x,
                y: coordinates.y
            },
            properties: {
                // @ts-ignore
                width: buttonWidth ? buttonWidth : 140,
                // @ts-ignore
                height: buttonHeight ? buttonHeight : 40
            }
        }
        const alreadyPresentButton = buttonJson.find(item => item.id === uniqueId);
        if (alreadyPresentButton) {
            const updatedButtonJson = buttonJson.map(item => {
                if (item.id === uniqueId) {
                    return {
                        ...item,
                        coordinates: {
                            x: coordinates.x,
                            y: coordinates.y
                        },
                        properties: {
                            width: buttonWidth ? buttonWidth : 140,
                            height: buttonHeight ? buttonHeight : 40
                        }
                    }
                } else {
                    return item;
                }
            })
            setButtonJson(updatedButtonJson);
        } else {
            setButtonJson([
                ...buttonJson,
                buttonInfo
            ])
        }
    }

    const handleCardDrag = (
        number: number,
        word: string,
        coordinates: {
            x: number,
            y: number
        }
    ) => {

        const uniqueId: string = `${word}${number}`;
        let cardWidth: number = 250, cardHeight: number = 200;
        cardAttributes.width.forEach(item => {
            if (item[0] === number) {
                cardWidth = item[1]
            }
        })
        cardAttributes.height.forEach(item => {
            if (item[0] === number) {
                cardHeight = item[1];
            }
        })

        const cardInfo = {
            id: uniqueId,
            coordinates: {
                x: coordinates.x,
                y: coordinates.y
            },
            properties: {
                width: cardWidth,
                height: cardHeight
            }
        }
        const alreadyPresentCard = cardJson.find(item => item.id === uniqueId);
        if (alreadyPresentCard) {
            const updatedCardJson = cardJson.map(item => {
                if (item.id === uniqueId) {
                    return {
                        ...item,
                        coordinates: {
                            x: coordinates.x,
                            y: coordinates.y
                        },
                        properties: {
                            width: cardWidth,
                            height: cardHeight
                        }
                    }
                } else {
                    return item;
                }
            })
            setCardJson(updatedCardJson);
        } else {
            setCardJson([
                ...cardJson,
                cardInfo
            ])
        }

    }

    const handleInputDrag = (
        number: number,
        word: string,
        coordinates: {
            x: number,
            y: number
        }
    ) => {

        const uniqueId: string = `${word}${number}`;
        let inputWidth: number = 250, inputHeight: number = 30;
        inputAttributes.width.forEach(item => {
            if (item[0] === number) {
                inputWidth = item[1]
            }
        })
        inputAttributes.height.forEach(item => {
            if (item[0] === number) {
                inputHeight = item[1];
            }
        })

        const inputInfo = {
            id: uniqueId,
            coordinates: {
                x: coordinates.x,
                y: coordinates.y
            },
            properties: {
                width: inputWidth,
                height: inputHeight
            }
        }
        const alreadyPresentInput = inputJson.find(item => item.id === uniqueId);
        if (alreadyPresentInput) {
            const updatedInputJson = inputJson.map(item => {
                if (item.id === uniqueId) {
                    return {
                        ...item,
                        coordinates: {
                            x: coordinates.x,
                            y: coordinates.y
                        },
                        properties: {
                            width: inputWidth,
                            height: inputHeight
                        }
                    }
                } else {
                    return item;
                }
            })
            setInputJson(updatedInputJson);
        } else {
            setInputJson([
                ...inputJson,
                inputInfo
            ])
        }

    }

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

                            //@ts-ignore
                            let buttonText, buttonWidth = 140, buttonHeight = 40;
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
                                <Group 
                                    onClick={() => handleButtonClick(number, word)}
                                    draggable
                                    onDragMove={(e) => {
                                        handleButtonDrag(
                                            number,
                                            word,
                                            {
                                                x: e.evt.clientX,
                                                y: e.evt.clientY
                                            }
                                        )
                                    }}
                                    key={number+word}
                                >
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

                            let cardWidth, cardHeight;
                            cardAttributes.height.forEach(item => {
                                if (item[0] === number) {
                                    cardHeight = item[1];
                                }
                            })
                            cardAttributes.width.forEach(item => {
                                if (item[0] === number) {
                                    cardWidth = item[1];
                                }
                            })

                            return (
                                <Group 
                                    onClick={() => handleButtonClick(number, word)}
                                    draggable
                                    onDragMove={e => {
                                        handleCardDrag(
                                            number,
                                            word,
                                            {
                                                x: e.evt.clientX,
                                                y: e.evt.clientY
                                            }
                                        )
                                    }}
                                    key={number+word}
                                >
                                    <SimpleCard 
                                        cardWidth={cardWidth ? cardWidth : 250}
                                        cardHeight={cardHeight ? cardHeight : 200}
                                        title='This is the title'
                                        content='This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title'
                                        cornerRadius={4}
                                        key={index}
                                    />
                                </Group>
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
                                <Group 
                                    onClick={() => handleInputClick(number, word)}
                                    draggable
                                    onDragMove={(e) => {
                                        handleInputDrag(
                                            number,
                                            word,
                                            {
                                                x: e.evt.clientX,
                                                y: e.evt.clientY
                                            }
                                        )
                                    }}
                                    key={number+word}
                                >
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

export default WhiteBoard;