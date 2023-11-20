import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
const GoogleResponse = async (response) => {
    console.log(response);
    // const decoded = await jwtDecode(response.credential);
    // const data = await axios.get("http://localhost:4000/user");
    // console.log(data.data.message);
}
const sendAuth = async () => {
    const response = await axios.get("http://localhost:4000/auth/google/");
    console.log(response);
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

                        onSuccess={GoogleResponse}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </GoogleOAuthProvider>;

                <a href="http://localhost:4000/auth/google" ><i className="fa-brands fa-twitter"></i></a>
                <button className="socialLink" onClick={sendAuth} value="http://localhost:4000/auth/google"><i className="fa-brands fa-twitter"></i></button>
                {/* <NavLink className="social_link" to="/login"><i className="fa-brands fa-twitter"></i></NavLink> */}
                {/* <NavLink className="social_link" to="/auth/google"><i className="fa-brands fa-twitter"></i></NavLink> */}
                <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
    )
}
