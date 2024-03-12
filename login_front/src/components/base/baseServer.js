import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:40000",
    headers: {
        'Content-Type': 'application/json'
    }
});
export default instance;
