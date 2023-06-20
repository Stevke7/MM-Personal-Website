import {Col, Container, Image, Offcanvas, Row,} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {AiOutlineArrowRight} from "react-icons/ai";
import {ContactModal} from "../pages/contact/ContactModal";


function Header(props) {
    let {setTheme, id} = props;
    const isMobile = useMediaQuery({query: `(max-width: 1024px)`});
    let tabs = {
        home: "",
        work: "work",
        contact: "contact",
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <ContactModal  show={modalShow} onHide={() => setModalShow(false)}/>
            <div>
                {!isMobile && (
                    <Container className="px-5">
                        <Row className="py-3 justify-content-between align-items-center">
                            <Col className="d-flex align-items-center " md={4}>
                                <img
                                    src={`${
                                        id === "light"
                                            ? "/images/Logo/Logo Dark.svg"
                                            : "images/Logo/Logo Light.svg"
                                    }`}
                                    alt="logo"
                                />
                            </Col>
                            <Col md={4}>
                                <nav className="d-flex justify-content-center m-0 ">
                                    <div className="nav-link">
                                        <NavLink
                                            // className="text-black"
                                            to={tabs.home}
                                        >
                                            Home
                                            <div className="line"></div>
                                        </NavLink>
                                    </div>
                                    <div className="nav-link mx-5  ">
                                        <NavLink
                                            // className="text-black"
                                            to={tabs.work}
                                        >
                                            Work
                                            <div className="line"></div>
                                        </NavLink>
                                    </div>
                                    <div className="nav-link">
                                        <NavLink
                                            // className="text-black"
                                            to={tabs.contact}
                                        >
                                            Contact
                                            <div className="line"></div>
                                        </NavLink>
                                    </div>
                                </nav>
                            </Col>
                            <Col md={4} className="d-flex justify-content-end w-25">
                                <button onClick={() => setModalShow(true)} className="request-modal"> Request a
                                    project <AiOutlineArrowRight/>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                )}
                {/*Different layout for mobile screen*/}

                {isMobile && (
                    <>
                        <Container>
                            <div className="py-3 d-flex justify-content-between align-items-center">
                                <Image src="/images/Logo/Logo.svg" alt="logo"/>
                                <Image
                                    className="hamburger"
                                    onClick={handleShow}
                                    src="/icons/hamburger.svg"
                                />
                            </div>
                        </Container>
                        {show && (
                            <div className={`mobileMenu position-relative `}>
                                <Offcanvas
                                    className="toggle"
                                    placement={"end"}
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                >
                                    <Offcanvas.Header closeButton></Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className="d-flex flex-column justify-content-between my-5  h-85">
                                            <p className="border-bottom pb-3 text-white">NAVIGATION</p>
                                            <nav
                                                id="mobile"
                                                className="d-flex flex-column align-items-start m-0 "
                                            >
                                                <div className="nav-link">
                                                    <NavLink
                                                        onClick={handleClose}
                                                        className="text-white"
                                                        to={tabs.home}
                                                    >
                                                        Home
                                                    </NavLink>
                                                </div>
                                                <div className="nav-link   ">
                                                    <NavLink
                                                        onClick={handleClose}
                                                        className="text-white"
                                                        to={tabs.work}
                                                    >
                                                        Work
                                                    </NavLink>
                                                </div>
                                                <div className="nav-link">
                                                    <NavLink
                                                        onClick={handleClose}
                                                        className="text-white"
                                                        to={tabs.contact}
                                                    >
                                                        Contact
                                                    </NavLink>
                                                </div>
                                            </nav>
                                            <div className="d-flex flex-column text-white align-items-start ">
                                                <p className="border-top text-white pt-3 w-100">
                                                    {" "}
                                                    SOCIAL
                                                </p>
                                                <div
                                                    className="d-flex align-items-center justify-content-between w-100">
                                                    <p>Instagram</p>
                                                    <p>Behance</p>
                                                    <p>Dribble</p>
                                                    <p>LinkedIn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Header;
