import React from "react";
import 'swiper/css';
import { NavBar } from "./Components/Header/Header";
import { Introduction } from "./Components/Introduction/Intro";
import { SelectedWorks } from "./Components/Selected Works/selected";
import { Abme } from "./Components/About Me/abme";
import './index.css'
const Structure = () => {
    return (
        <>
            <div className="Body">
                <NavBar />
                <Introduction />
            </div>
            <SelectedWorks />
            {/* <Abme /> */}
        </>
    )
}

export { Structure }