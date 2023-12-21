import { MarginLeft } from "@/atoms/margin/MarginLeft";
import { MarginTop } from "@/atoms/margin/MarginTop";
import { useSocket } from "@/context/SocketProvider";
import {useRecoilState} from "recoil";

export const Properties: React.FC = () => {

    const [mt, setMt] = useRecoilState(MarginTop);
    const [ml, setMl] = useRecoilState(MarginLeft);

    const { moveButtonRight, moveButtonLeft, moveButtonDown } = useSocket();

    const moveRight = () => {
        setMl(prev => prev+1);
        moveButtonRight({message: 'from properties', margin: ml+1});
    }

    const moveLeft = () => {
        setMl(prev => prev-1);
        moveButtonLeft({message: 'from properties', margin: ml-1});
    }

    const moveDown = () => {
        setMt(prev => prev +1);
        console.log('mt+1', mt+1);
        moveButtonDown({message: 'from properties', margin: mt+1})
    }

    return (
        <div>
            <button onClick={()  => {setMt(prev => prev-1)}} >up</button>
            <button onClick={moveDown} >down</button>
            <button onClick={moveRight} >right</button>
            <button onClick={moveLeft} >left</button>
        </div>
    )
}