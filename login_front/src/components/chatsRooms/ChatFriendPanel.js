import { useContext, useEffect, useState } from 'react';
import baseInstance from "../base/baseServer";
// friend profile dummy
import frnd_profile_dummy from "./images/frnd-profile.jpg";
// Friend Data Context
import { FrndDataContext } from './ChatRoom';

export default function ChatFriendPanel() {

    const [inputState, setInputState] = useState({
        frnd_name: "",
    });
    const [frndData, setFrndData] = useContext(FrndDataContext);
    const [userList, setUserList] = useState([]);
    const chanageInputValue = (e) => {
        setInputState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const getAllUsers = async () => {
        try {
            var all_users = await baseInstance.get('/get-all-users');
            setUserList(all_users.data.users);
        } catch (error) {
            console.log(error);
        }
    }
    const connectFrnd = async (event, item) => {
        console.log(item.email);
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    return (
        <div className="flexDiv main-chat-frnd-div">
            <div className="flexDiv chat-frnd-search-div">
                <input type='text' value={inputState.frnd_name} onChange={chanageInputValue} name='frnd_name' placeholder='Friend name....' />
                <p><i className="fa-solid fa-arrows-rotate"></i></p>
            </div>
            <div className='flexDiv chat-frnd-list-div'>
                {userList.map((item) => (
                    <button key={item.id} onClick={(event) => connectFrnd(event, item)} className='flexDiv chat-frnd-div frnd-btn-clicked' >
                        <div className='flexDiv chat-frnd-profile-div'>
                            <img src={frnd_profile_dummy} className='frnd_profile' alt='friend-profile' />
                            <span></span>
                        </div>
                        <div className='flexDiv chat-frnd-details-div'>
                            <p>{item.name}</p>
                            <p><span>Developer</span> <span>10:02</span></p>
                        </div>
                    </button>
                ))
                }
            </div>
        </div>
    )
}
