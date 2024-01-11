import { useState } from 'react';
// friend profile dummy
import frnd_profile_dummy from "./images/frnd-profile.jpg";
export default function ChatFriendPanel() {
    const [inputState, setInputState] = useState({
        frnd_name: "",
    });
    const temp_arr = [
        { id: 1, name: 'coder 1' },
        { id: 2, name: 'coder 2' },
        { id: 3, name: 'coder 3' }
    ]
    const chanageInputValue = (e) => {
        setInputState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const justRun = (e) => {
        console.log("Ok");
    }
    return (
        <div className="flexDiv main-chat-frnd-div">
            <div className="flexDiv chat-frnd-search-div">
                <input type='text' value={inputState.frnd_name} onChange={chanageInputValue} name='frnd_name' placeholder='Friend name....' />
                <p><i className="fa-solid fa-arrows-rotate"></i></p>
            </div>
            <div className='flexDiv chat-frnd-list-div'>
                {temp_arr.map((item) => (
                    <div key={item.id} className='flexDiv chat-frnd-div' >
                        {/* <img src={frnd_profile_dummy} alt='friend-profile' /> */}
                        {item.name}
                    </div>

                ))
                }
            </div>
        </div>
    )
}
