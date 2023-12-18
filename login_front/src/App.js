
import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from './components/Profile';
import UserSetting from './components/UserSetting/UserSetting';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { createContext } from 'react';
export const cookieContext = createContext();
function App() {
    const [cookies, setCookies, removeCookie] = useCookies(['user']);
    return (
        <>
            <cookieContext.Provider value={[cookies, setCookies, removeCookie]}>
                <Router>
                    <Routes>

                        <Route exact path="/registration" element={<Registration />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path='/user-setting' element={<UserSetting />} />
                        {/* Error Page With Protected Route */}
                        {/* {
                        check ? <Route exact path="/registration" element={<Registration />} />
                            :
                            <Route exact path="*" element={<Error />} />
                    } */}


                    </Routes>
                </Router>
            </cookieContext.Provider>
        </>
    );
}

export default App;
