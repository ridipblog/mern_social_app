import { useContext, useEffect, useState } from "react";
import { requiredContextData } from "./ChatRoom";
import { io } from "socket.io-client";
import frnd_profile_dummy from "./images/frnd-profile.jpg";
export default function ChatMessage() {
    const socket = io('http://localhost:4000', { transports: ['websocket'] });
    const { roomContext } = useContext(requiredContextData);
    const { frndRoomContext } = useContext(requiredContextData);
    const [roomName, setRoomName] = roomContext;
    const [frndRoomName, setFrndRoomName] = frndRoomContext;
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState({
        my_messages: '',
        frnd_mesages: ''
    });
    const data = [
        1, 2, 3, 4, 5
    ];
    const sendMessage = () => {
        const data = {
            message: message,
            username: 'coder'
        }
        const room = roomName;
        socket.emit('message', { room, data });
    }

    useEffect(() => {
        console.log(roomName);
        socket.emit('join-room', frndRoomName);
        socket.on('message', (room, data) => {
            console.log(data.message);
        });
    }, [roomName]);
    return (
        <div className="flexDiv main-chat-message-div">
            <div className="flexDiv frnd-chat-nav-div">
                <div className="flexDiv frnd-chat-nav-img-div">
                    <img src={frnd_profile_dummy} alt="" />
                </div>
                <div className="flexDiv frnd-chat-nav-name-div">
                    <p>Ridip Goswami</p>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className="flexDiv main-frnd-chat-div">
                <div className="flexDiv frnd-chat-text-div">
                    {data.map((number) => (
                        <p key={number}>{number}</p>
                    ))}
                </div>
                <div className="flexDiv frnd-chat-send-div">
                    <div className="flexDiv frnd-chat-send-input-div">
                        <button className="frnd-chat-input-btn"><i className="fa-solid fa-paperclip"></i></button>
                        <input type="text" id="frnd-chat-input" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button onClick={sendMessage} className="frnd-chat-input-btn" ><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>

    )
}
