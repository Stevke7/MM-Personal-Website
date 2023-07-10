import "./index.scss";
import {BrowserRouter} from "react-router-dom";

import React, {createContext, useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SiteRoutes from "./routes/Routes";
import {ContactModalProvider} from "./pages/contact/ContactModalContext";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div>
            <BrowserRouter>
                <ThemeContext.Provider value={{theme}}>
                    <ContactModalProvider>
                    <div id={theme}>

                        <Header id={theme} setTheme={setTheme}/>
                        <SiteRoutes id={theme}/>
                        <Footer/>
                        <ToastContainer autoClose={3000} />
                    </div>
                    </ContactModalProvider>
                </ThemeContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
