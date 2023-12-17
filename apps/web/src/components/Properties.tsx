import { MarginLeft } from "@/atoms/margin/MarginLeft";
import { MarginTop } from "@/atoms/margin/MarginTop";
import { useSocket } from "@/context/SocketProvider";
import {useRecoilState} from "recoil";

export const Properties: React.FC = () => {

    const [mt, setMt] = useRecoilState(MarginTop);
    const [ml, setMl] = useRecoilState(MarginLeft);

    const { moveButtonRight, moveButtonLeft } = useSocket();

    const moveRight = () => {
        setMl(prev => prev+1);
        moveButtonRight({message: 'from properties', margin: ml+1});
    }

    const moveLeft = () => {
        setMl(prev => prev-1);
        moveButtonLeft({message: 'from properties', margin: ml-1});
    }

    return (
        <div>
            <button onClick={()  => {setMt(prev => prev-1)}} >up</button>
            <button onClick={() => {setMt(prev => prev+1)}} >down</button>
            <button onClick={moveRight} >right</button>
            <button onClick={moveLeft} >left</button>
        </div>
    )
}