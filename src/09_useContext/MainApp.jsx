import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";

export const MainApp = () => {
    return (
        <>
            <h1>Main App</h1>
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                {/* <Route path="/*" element={<h1>Not Found</h1>} /> */}
                <Route path="/*" element= {<Navigate to="/about"/>}/>
            </Routes>
        </>
    )
}
