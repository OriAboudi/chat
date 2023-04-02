import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { io } from 'socket.io-client'
import { API_URL } from './apiService'
const userId = Date.now();
function RealChat() {
    const [massage, setMassage] = useState([]);
    const inputR = useRef(null);
    const socket = io(API_URL);

    useEffect(() => {
        socket.on("chatNode", onServerListen)
        return () => socket.off("chatNode", onServerListen)
    }, [])

    const onServerListen = (_val) => {
        console.log(_val);
        setMassage((prev) => [_val, ...prev]);
        console.log(massage);
    }

    const handleMessage = () => {

        socket.emit("chatInput",{msg:inputR.current.value,id:userId})
    }



    return (
        <div className='container col-md-6'>
            <h2>Chat page</h2>
            <div className='flex' style={{ display: 'flex', flexDirection: "row" }}>
                <input type="text" ref={inputR} className='form-control mb-3 ' />
                <button onClick={handleMessage} className='btn btn-dark  ms-2 mb-3'>Send </button>
            </div>
            <div className='border shadow' style={{ minHeight: '350px' }}>
                {massage.map((item, i) => {
                    return (
                        <h4 style={{color: item.id==userId?"grey":"red"}} key={i}>{item.msg}</h4>
                    )
                })}
            </div>
        </div>
    )
}

export default RealChat