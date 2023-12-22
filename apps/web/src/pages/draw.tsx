import React, { useEffect, useState } from 'react';
import { elementsToShow } from '@/atoms/elements/elementsToShow';
import { selectedProperty } from '@/atoms/elements/selectedProperty';
import { useRecoilState } from 'recoil';
import { Layer, Stage } from 'react-konva';
import { elements } from '@/types/type';
import { comp } from '@/utils/Elements';
import { properties } from '@/atoms/elements/properties';

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

    const handleClick = (item: string) => {
        console.log(item);
        setElem((prev) => [...prev, item]);
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

    const [elem, setElem] = useRecoilState(elementsToShow);

    return (
        <Stage 
            height={stageSize.height}
            width={stageSize.width}
            className='inline-block bg-teal-700 rounded-md'
        >
            <Layer>
                {
                    elem.map((item, index) => {
                        if (item === '') {
                            return;
                        }
                        return (
                            comp[item]
                        )
                    })
                }
            </Layer>
        </Stage>
    )
}

const Properties: React.FC = () => {

    const [prop, setProp] = useRecoilState(selectedProperty);
    const [selectProp, setSelectProp] = useRecoilState(properties);

    const handleTextChange = (e: any) => {
        console.log(selectProp);
        const updatedProps = {
            ...selectProp,
            label: e.target.value
        };
        setSelectProp(updatedProps);
    }

    const handleWidthChange = (e: any) => {
        console.log(selectProp);
        const updatedProps = {
            ...selectProp,
            width: e.target.value
        };
        setSelectProp(updatedProps);
    }

    const handleHeightChange = (e: any) => {
        console.log(selectProp);
        const updatedProps = {
            ...selectProp,
            height: e.target.value
        };
        setSelectProp(updatedProps);
    }

    return (
        <div className='border w-96'>
            {prop}
            <input type="text" placeholder='label' onChange={handleTextChange} />
            <input type="text" placeholder={`${selectProp.width}`}  onChange={handleWidthChange} />
            <input type="text" placeholder={`${selectProp.height}`} onChange={handleHeightChange} />

        </div>
    )
}
