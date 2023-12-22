import { Layer, Stage } from 'react-konva';
import { SimpleButton } from '../draggables/Buttons';
import { SimpleInput } from '../draggables/Inputs';
import React, { useEffect, useState } from 'react';
import { colors } from '../types/colors';
import { SimpleCard } from '@/draggables/Cards';
import { elementsToShow } from '@/atoms/elements/elementsToShow';
import { useRecoilState } from 'recoil';
import { elements } from '@/types/type';
import { comp } from '@/utils/Elements';

const Draw: React.FC = () => {

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
        <>

            <Top />

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