import { useContext } from "react";
import { InfoContext } from "../Profile";
const ProfileHead = () => {
    const info = useContext(InfoContext);
    return (
        <div className="flexDiv profile_head_div">
            <div className="flexDiv profile_setting_menu">
                <div className="flexDiv profile_setting_menu_div">
                    <span><i className="fa-solid fa-gear"></i></span>
                    <h1>USER PROFILE</h1>
                </div>
            </div>
            <div className="flexDiv profile_head_div_1">
                <div className="flexDiv profile_head_sub_div">
                    <div className="flexDiv profile_head_input_div">
                        <span><i className="fas fa-search"></i></span>
                        <input type="text" name="search_people" placeholder="Search People" />
                    </div>
                    <div className="flexDiv profile_head_user_div">
                        <span><i className="fa-solid fa-user"></i></span>
                        <span>{info.name === "No Name" ? "Ridip Goswami" : info.name}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProfileHead;