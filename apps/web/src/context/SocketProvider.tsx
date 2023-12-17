import { on } from "events";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProps {
    children?: React.ReactNode   
}

interface ISocket {
    buttonClick: (msg: any) => any,
    updatedElements: any,
    moveButtonRight: (msg: any) => any,
    marginLeft: number | undefined,
    moveButtonLeft: (msg: any) => any,
}

const SocketContext = React.createContext<ISocket | null>(null);

export const useSocket = () => {
    const state = useContext(SocketContext);
    if (!state) throw new Error('State is not defined');
    return state;
}

export const SocketContextProvider: React.FC<SocketProps> = ({children}) => {

    const [socket, setSocket] = useState<Socket>();
    const [updatedElements, setUpdatedElements] = useState();
    const [marginLeft, setMarginLeft] = useState<number | undefined>();

    const buttonClick: ISocket['buttonClick'] = useCallback((msg: any) => {
        if (socket) {
            socket.emit('button:click', {msg: msg})
        }
    }, [socket]);

    const updateButton = (msg: any) => {
        console.log('from server', msg);
        setUpdatedElements(msg);
    }

    const moveButtonRight = (msg: any) => {
        console.log(msg);
        if (socket) {
            console.log('till her');
            socket.emit('button:move:right', {msg: msg})
        }
    }

    const movedButtonRight = (msg: any) => {
        console.log('back from server', msg);
        const marginPrev = msg.msg.margin;
        console.log('prev margin', marginPrev);
        setMarginLeft(marginPrev+1);
    }

    const moveButtonLeft = (msg: any) => {
        console.log(msg)
        if (socket) {
            console.log('till her');
            socket.emit('button:move:left', {msg: msg})
        }
    }

    const movedButtonLeft = (msg: any) => {
        console.log('back from server', msg);
        const marginPrev = msg.msg.margin;
        console.log('prev margin', marginPrev);
        setMarginLeft(marginPrev-1);
    }

    useEffect(() => {
        const _socket = io('http://localhost:8000');
        setSocket(_socket);

        _socket.on('button:update', updateButton);
        _socket.on('button:moved:right', movedButtonRight);
        _socket.on('button:moved:left', movedButtonLeft);

        return () => {
            _socket.disconnect();
            _socket.off('button:update', updateButton)
            _socket.off('button:moved:right', movedButtonRight);
            _socket.off('button:moved:left', movedButtonLeft);
            setSocket(undefined);
        }

    }, [])

    return (
        <SocketContext.Provider value={{buttonClick, updatedElements, moveButtonRight, marginLeft, moveButtonLeft}} >
            { children }
        </SocketContext.Provider>
    )
}