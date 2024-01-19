import frnd_profile_dummy from "./images/frnd-profile.jpg";
export default function ChatMessage() {
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

            </div>
        </div>
    )
}
