import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/home/Home";


function SiteRoutes(props) {
    let { id, scrollToSection, contactRef, workRef, isMobile, themeSwitch } = props

    return (
        <Routes>
            <Route path="/" element={<Home isMobile={isMobile} themeSwitch={themeSwitch} contactRef={contactRef} workRef={workRef} scrollToSection={scrollToSection} id={id} />} />
        </Routes>
    )
}

export default SiteRoutes