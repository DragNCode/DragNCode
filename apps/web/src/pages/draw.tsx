import { Layer, Stage } from 'react-konva';
import { SimpleButton } from '../draggables/Buttons';
import { SimpleInput } from '../draggables/Inputs';
import { useEffect, useState } from 'react';
import { colors } from '../types/colors';

const Draw: React.FC = () => {

    const [stageSize, setStageSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const updateSize = () => {
            setStageSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }

    },[])

    return (
        <div>
            <Stage height={stageSize.height} width={stageSize.width} >
                <Layer>
                    <SimpleButton 
                        buttonWidth={140} 
                        buttonHeight={35} 
                        cornerRadius={4} 
                        label='Click Me!' 
                        color={colors.teals[2]} 
                    />
                    <SimpleInput 
                        inputWidth={250}
                        inputHeight={25}
                        cornerRadius={2}
                        label='Enter text here...'
                    />
                </Layer>
            </Stage>
        </div>
    )
}

export default Draw;