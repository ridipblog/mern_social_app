import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import ProfileHead from "./profle/ProfileHead";
import ProfileCenter from "./profle/ProfileCenter";
import SettingMenu from "./profle/SettingMenu";
import authFunction from "./UsedMethods/authFunction";
import "./class.css"
import "./profle/profile.css";
import "./profle/profile_head.css";
import "./profle/profile_center.css";
import "./profle/setting_menu.css";
import { createContext, useEffect, useState } from "react";
export const InfoContext = createContext();
export const menuContext = createContext();
export default function Profile() {
    const [cookies, setCookies, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();
    const [infoState, setInfoState] = useState('');
    const [menu, setMenu] = useState(false);
    const getData = async () => {
        const info = await authFunction(cookies.token, navigate, removeCookie);
        setInfoState(info);
        console.log(info);
    }
    useEffect(() => {
        if (cookies.token) {
            getData();
        } else {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <div className="flexDiv main_profile">
                <InfoContext.Provider value={infoState}>
                    <menuContext.Provider value={[menu, setMenu]}>
                        {
                            menu ? <SettingMenu /> : <p>dkjshj</p>
                        }
                        <ProfileHead />
                        <ProfileCenter />
                    </menuContext.Provider>
                </InfoContext.Provider>
            </div >
        </>
    )
}
