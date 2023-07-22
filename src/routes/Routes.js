import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/home/Home";


function SiteRoutes(props) {
    let { id, scrollToSection, contactRef, workRef, isMobile } = props

    return (
        <Routes>
            <Route path="/" element={<Home isMobile={isMobile} contactRef={contactRef} workRef={workRef} scrollToSection={scrollToSection} id={id} />} />


        </Routes>
    )
}

export default SiteRoutes