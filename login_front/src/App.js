
import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from './components/Profile';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/registration" element={<Registration />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />

                    {/* Error Page With Protected Route */}
                    {/* {
                        check ? <Route exact path="/registration" element={<Registration />} />
                            :
                            <Route exact path="*" element={<Error />} />
                    } */}

                </Routes>
            </Router>

        </>
    );
}

export default App;
