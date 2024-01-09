import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import "./chatroom.css";

export default function ChatRoom() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [personName, setPersonName] = useState('');
    const [roomName, setRoomName] = useState('');
    const socket = io('http://localhost:4000', { transports: ['websocket'] });
    useEffect(() => {
        socket.emit('join-room', roomName);
        socket.on('message', (room, data) => {
            const text = data.message + data.username;
            setMessages((prev_messages) => [...prev_messages, text]);
        });
        return () => {
            // socket.disconnect();
            socket.emit('leave-room', roomName);
        };
    }, [roomName, messages, message]);
    const sendMessage = () => {
        const data = {
            message: message,
            username: 'coder'
        };
        const room = roomName;
        socket.emit('message', { room, data });
    }
    // Set Person Name
    const addPersonName = async () => {
        setRoomName(personName);
    }
    return (
        <>
            <div className="">
                <div>
                    {
                        messages.map((msg, index) => (
                            <div key={index} >{msg}</div>
                        ))
                    }
                    <p>Person Name</p>
                    <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                    <button onClick={addPersonName}>Set Name</button>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
}