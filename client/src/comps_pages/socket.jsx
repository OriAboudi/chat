import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { io } from 'socket.io-client'
import { API_URL } from './apiService'

function Socket() {
    const [massage, setMassage] = useState([]);
    const inputR = useRef(null);
    const socket = io(API_URL);

    useEffect(() => {
        socket.on("nodejsEvent", onServerListen)
        return () => socket.off("nodejsEvent", onServerListen)
    }, [])

    const onServerListen = (_val) => {
        console.log(_val);
        setMassage((prev) => [_val, ...prev]);
        console.log(massage);
    }

    const handleMessage = () => {
        socket.emit("clientInput", inputR.current.value)
    }



    return (
        <div className='container col-md-6'>
            <h2>Chat page</h2>
            <div className='flex' style={{ display: 'flex', flexDirection: "row" }}>
                <input type="text" ref={inputR} className='form-control mb-3 ' />
                <button onClick={handleMessage} className='btn btn-dark  ms-2 mb-3'>Send </button>
            </div>
            <div className='border shadow' style={{ minHeight: '350px' }}>
                {massage.map((val, i) => {
                    return (
                        <h4 key={i}>{val}</h4>
                    )
                })}
            </div>
        </div>
    )
}

export default Socket