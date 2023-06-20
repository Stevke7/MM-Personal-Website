import "./index.scss";
import {BrowserRouter} from "react-router-dom";

import React, {createContext, useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SiteRoutes from "./routes/Routes";
import {ContactModalProvider} from "./pages/contact/ContactModalContext";


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
                    </div>
                    </ContactModalProvider>
                </ThemeContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
