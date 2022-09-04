import {Route, Routes} from "react-router-dom";
import Work from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import React from "react";
import Home from "../pages/home/Home";
import Cheetah from "../pages/work/pages/Cheetah";

function SiteRoutes(props) {
    let {id} = props
    return (
        <Routes>
            <Route path="/" element={<Home id={id}/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/work/cheetah" element={<Cheetah/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default SiteRoutes