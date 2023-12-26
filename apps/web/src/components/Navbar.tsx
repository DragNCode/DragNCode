import { elementsToShow } from '@/atoms/elements/elementsToShow';
import { useRecoilState } from 'recoil';
import { elements } from '@/types/type';
import { BACKEND_URL, countItemInArray } from '@/utils/Objects';
import { button } from '@/atoms/json1/button';
import { card } from '@/atoms/json1/card';
import { input } from '@/atoms/json1/input';
import axios from 'axios';


const Top: React.FC = () => {

    const [elem, setElem] = useRecoilState(elementsToShow);
    const [buttonJson, setButtonJson] = useRecoilState(button);
    const [cardJson, setCardJson] = useRecoilState(card);
    const [inputJson, setInputJson] = useRecoilState(input);

    const handleClick = (item: string) => {
        const count = countItemInArray(elem, item);
        setElem((prev) => [...prev, `${item}${count+1}`]);
    }

    const doMagic = async () => {

        const body = {
            buttonJson1: buttonJson,
            cardJson1: cardJson,
            inputJson1: inputJson
        }

        console.log(body);

        const req = await axios.post(`${BACKEND_URL}/api/magic`, JSON.stringify(body));
        const res = await req.data;
        console.log(res);

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

            <button onClick={doMagic} >Magic!</button>

        </div>
    )
}

export default Top;