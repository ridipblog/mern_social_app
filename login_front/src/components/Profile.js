import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';
import axios from "axios";
export default function Profile() {
    const [cookies, setCookies] = useCookies(['user']);
    const navigate = useNavigate();
    const getProfile = async () => {
        try {
            const response = await axios.get('http://localhost:4000/profile', {
                params: {
                    token: cookies.token
                }
            });
            console.log(response.data);
        } catch (err) {
            return false;

        }
    }
    useEffect(() => {
        if (!cookies.token) {
            navigate('/login');
        } else {
            getProfile();

        }
    }, []);
    return (
        <>
            <h1>Profile Page</h1>
        </>
    )
}