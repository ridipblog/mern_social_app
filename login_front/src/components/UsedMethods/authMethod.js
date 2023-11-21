// import axios from "axios"
// export const checkAuth = async (token) => {
//     var check_user = null;
//     try {
//         check_user = await axios.get("http://localhost:4000/check_auth", {
//             params: {
//                 token: token
//             }
//         });
//     } catch (err) {
//         check_user = null;
//     }
//     if (!check_user.data.message) {
//         check_user = null;
//     }
//     return check_user;
// }
import axios from "axios";
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
const CheckAuth = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async () => {
            if (cookies.token) {
                var check_user = null;
                const token = cookies.token;
                try {
                    check_user = await axios.get("http://localhost:4000/check_auth", {
                        params: {
                            token: token
                        }
                    });
                    if (!check_user.data.message) {
                        removeCookie("token");
                        navigate('/login');
                    }
                } catch (err) {
                    check_user = null;
                }
            } else {
                navigate('/login');
            }
        }
        checkAuth();
    })
}
export default CheckAuth;
