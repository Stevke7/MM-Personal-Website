import './index.scss';
import {BrowserRouter} from "react-router-dom";

import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SiteRoutes from "./routes/Routes"


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <SiteRoutes/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
