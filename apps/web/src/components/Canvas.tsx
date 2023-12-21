import { ShowElement } from "@/atoms/Sidebar/ShowElement";
import { MarginLeft } from "@/atoms/margin/MarginLeft";
import { MarginTop } from "@/atoms/margin/MarginTop";
import { useSocket } from "@/context/SocketProvider";
import { Elements } from "@/utils/Objects";
import { Box } from "@chakra-ui/react";
import { SimpleButton } from "@repo/ui/button";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const Canvas: React.FC = () => {

    const [elements, setElements] = useRecoilState(ShowElement);
    const [mt, setMt] = useRecoilState(MarginTop);
    const [ml, setMl] = useRecoilState(MarginLeft);
    const [prop, setProp] = useState({
        color: '',
        variant: '',
        size: ''
    })

    const { updatedElements, marginLeft, marginTop } = useSocket();

    useEffect(() => {
        console.log('updaed',marginTop);
        
        if (marginLeft != ml) {
            //@ts-ignore
            setMl(marginLeft);
        }

        if (marginTop != mt) {
            //@ts-ignore
            setMt(marginTop)
        }

        if (updatedElements !== undefined) {
            console.log('update', updatedElements.msg);
            setElements(updatedElements.msg)
        }
    }, [useSocket, updatedElements, marginLeft, ml, marginTop, mt]);
    
    useEffect(() => {
        console.log(elements);
    }, [elements]);

    return (
        
        <Box style={{backgroundImage : `url('../../static/images/bg.jpg')`, overflowY:'auto'}} height={'100%'} width={'100%'}>
            {
                elements.map((item, index) => (
                    index !== 0 ? (
                        item.item === Elements.Button ? 
                            <Box key={index} style={{marginLeft: `${ml}vw`, marginTop: `${mt}vh`}} >
                               { //@ts-ignore
                                <SimpleButton  text='Button' colorScheme={item.color} variant={item.variant} size={item.size} />
                                }
                            </Box>
                        : ''
                    ) : ''
                ))
            }
        </Box>
    )
}


// button click hua give code
// JSON 1
// elements: [{item, color, variant, size}], mt number, ml number
// JSON 2
// { 
//      body: {
//               button: {if item === button} {color, scheme},
//               input: marign , color , size
//              }
// 
// }
// 
