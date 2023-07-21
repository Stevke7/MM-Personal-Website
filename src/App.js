import "./index.scss";
import {BrowserRouter} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import React, {createContext, useEffect, useRef, useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SiteRoutes from "./routes/Routes";
import {ContactModalProvider} from "./pages/contact/ContactModalContext";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const [isMobile, setIsMobile] = useState(false);

    const workRef = useRef(null);
    const contactRef = useRef(null);

    function scrollToSection(ref) {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 568); // Set breakpoint according to your mobile design
        };
    
        window.addEventListener("resize", handleResize);
    
        // Initial check on component mount
        handleResize();
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <Container fluid className="p-0" >
            <BrowserRouter>
                <ThemeContext.Provider value={{theme}}>
                    <ContactModalProvider>
                    <div id={theme}>
                        <Header isMobile={isMobile} workRef={workRef} contactRef={contactRef} scrollToSection={scrollToSection} id={theme} setTheme={setTheme}/>
                        <SiteRoutes isMobile={isMobile} contactRef={contactRef} workRef={workRef} scrollToSection={scrollToSection} id={theme}/>
                        <Footer/>
                        <ToastContainer autoClose={3000} />
                    </div>
                    </ContactModalProvider>
                </ThemeContext.Provider>
            </BrowserRouter>
        </Container>
    );
}

export default App;
