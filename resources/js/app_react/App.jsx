import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link,
    useNavigate,
} from "react-router-dom";

const HomePage = () => {
    const nav = useNavigate();
    const toProfile = () => {
        nav("/profile");
    };
    return (
        <div>
            <button onClick={toProfile}>click to profile</button>
            <h1>Đây là home page component</h1>
        </div>
    );
};
const ProfilePage = () => {
    const nav = useNavigate();
    const toAbout = () => {
        nav("/about");
    };
    return (
        <div>
            <button onClick={toAbout}>click to about</button>
            <h1>Đây là profile page component</h1>
        </div>
    );
};
const AboutPage = () => {
    const nav = useNavigate();
    const toHome = () => {
        nav("/");
    };
    return (
        <div>
            <button onClick={toHome}>click to home</button>
            <h1>Đây là about page component</h1>
        </div>
    );
};

function App(props) {
    return (
        <div className="AppComponent post" id="Application">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
