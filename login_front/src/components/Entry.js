import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
const GoogleResponse = async (response) => {
    const decoded = await jwtDecode(response.credential);
    console.log(decoded.email);
    const data = await axios.get("http://localhost:4000/user");
    console.log(data.data.message);
}
export default function Entry(props) {
    return (
        <div className="flex_div reg_div reg_image_div">
            <h1>{props.propText[0]}</h1>
            <p>{props.propText[1]}</p>
            <div className="flex_div reg_image_div_1">
                <hr></hr>
                <p>Join With Our Product</p>
                <hr></hr>
            </div>
            <div className="flex_div reg_image_div_1">
                <GoogleOAuthProvider clientId="784573559341-c8fna8oekhjfg009jjnafn65neupq92b.apps.googleusercontent.com">
                    <GoogleLogin clientId="784573559341-c8fna8oekhjfg009jjnafn65neupq92b.apps.googleusercontent.com"
                        type="icon"
                        size="medium"
                        onSuccess={GoogleResponse}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>

                {/* <a href="http://localhost:4000/auth/google" ><i className="fa-brands fa-twitter"></i></a>
                <button className="socialLink" onClick={sendAuth} value="http://localhost:4000/auth/google"><i className="fa-brands fa-twitter"></i></button> */}
                {/* <NavLink className="social_link" to="/login"><i className="fa-brands fa-twitter"></i></NavLink> */}
                {/* <NavLink className="social_link" to="/auth/google"><i className="fa-brands fa-twitter"></i></NavLink> */}
                {/* <a href="/"><i className="fa-brands fa-facebook-f"></i></a> */}
            </div>
        </div>
    )
}
