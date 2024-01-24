import frnd_profile_dummy from "./images/frnd-profile.jpg";
export default function ChatMessage() {
    const data = [
        1, 2, 3, 4, 5
    ];
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
                        <input type="text" id="frnd-chat-input" />
                    </div>
                    <button className="frnd-chat-input-btn" ><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    )
}
