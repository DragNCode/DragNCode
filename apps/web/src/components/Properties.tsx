import { useRecoilState, useRecoilValue } from 'recoil';
import { elementsObject } from '@/types/type';
import { currentSelectedElement } from '@/atoms/elements/currentSelectedElement';
import { ButtonText } from '@/atoms/elements/ButtonText';
import { InputProperties } from '@/atoms/elements/InputProperties';
import { CardProperties } from '@/atoms/elements/CardProperties';
import { button } from '@/atoms/json1/button';
import { card } from '@/atoms/json1/card';
import { input } from '@/atoms/json1/input';

const Properties: React.FC = () => {

    const element = useRecoilValue(currentSelectedElement);
    const [attributes, setAttributes] = useRecoilState(ButtonText);
    const [inputAttributes, setInputAttributes] = useRecoilState(InputProperties);
    const [cardAttributes, setCardAttributes] = useRecoilState(CardProperties);
    const [buttonJson, setButtonJson] = useRecoilState(button);
    const [cardJson, setCardJson] = useRecoilState(card);
    const [inputJson, setInputJson] = useRecoilState(input);


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

            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentButton = buttonJson.find(item => item.id === uniqueId);
            if (alreadyPresentButton) {
                const updatedButtonJson = buttonJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                width: parseInt(e.target.value),
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
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: parseInt(e.target.value),
                            height: 40
                        }
                    }
                ])
            }

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

            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentInput = inputJson.find(item => item.id === uniqueId);
            if (alreadyPresentInput) {
                const updatedInputJson = inputJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                width: parseInt(e.target.value),
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
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: parseInt(e.target.value),
                            height: 30
                        }
                    }
                ])
            }

            return;
        }
        if (element.element === elementsObject.Card) {

            let updatedWidth = [];
            cardAttributes.width.forEach(item => {
                if (item[0] !== element.number) {
                    updatedWidth.push(item);
                }
            })
            updatedWidth.push([element.number, parseInt(e.target.value)]);
            const newWidth = {...cardAttributes, width: updatedWidth};
            setCardAttributes(newWidth);

            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentCard = cardJson.find(item => item.id === uniqueId);
            if (alreadyPresentCard) {
                const updatedCardJson = cardJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                width: parseInt(e.target.value),
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
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: parseInt(e.target.value),
                            height: 200
                        }
                    }
                ])
            }
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


            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentButton = buttonJson.find(item => item.id === uniqueId);
            if (alreadyPresentButton) {
                const updatedButtonJson = buttonJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                height: parseInt(e.target.value),
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
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: 140,
                            height: parseInt(e.target.value)
                        }
                    }
                ])
            }
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
            const newHeight = {...inputAttributes, height: updatedHeight};
            setInputAttributes(newHeight);

            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentInput = inputJson.find(item => item.id === uniqueId);
            if (alreadyPresentInput) {
                const updatedInputJson = inputJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                height: parseInt(e.target.value),
                            }
                        }
                    } else {
                        return item;
                    }
                })
                setInputJson(inputJson);
            } else {
                setInputJson([
                    ...inputJson,
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: 250,
                            height: parseInt(e.target.value)
                        }
                    }
                ])
            }

            return;
        }
        if (element.element === elementsObject.Card) {

            let updatedHeight = [];
            cardAttributes.height.forEach(item => {
                if (item[0] !== element.number) {
                    updatedHeight.push(item);
                }
            })
            updatedHeight.push([element.number, parseInt(e.target.value)]);
            const newHeight = {...cardAttributes, height: updatedHeight};
            setCardAttributes(newHeight);

            const uniqueId: string = `${element.element}${element.number}`;

            const alreadyPresentCard = cardJson.find(item => item.id === uniqueId);
            if (alreadyPresentCard) {
                const updatedCardJson = cardJson.map(item => {
                    if (item.id === uniqueId) {
                        return {
                            ...item,
                            properties: {
                                ...item.properties,
                                height: parseInt(e.target.value),
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
                    {
                        id: uniqueId,
                        coordinates: {
                            x: 0,
                            y: 0
                        },
                        properties: {
                            width: 250,
                            height: parseInt(e.target.value)
                        }
                    }
                ])
            }

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

export default Properties;