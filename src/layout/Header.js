import { Col, Container, Image, Row, } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ContactModal } from "../pages/contact/ContactModal";


function Header(props) {
    const { id, scrollToSection, workRef, contactRef, isMobile } = props;
    const [modalShow, setModalShow] = useState(false);

    function closeModal() {
        setModalShow(false)
    }


    return (
        <>
            <ContactModal id={id} isMobile={isMobile} setModalShow={setModalShow} show={modalShow} onHide={closeModal} />
            <Container >
                <Row className="py-3 px-4 px-md-0 justify-content-between align-items-center">
                    <Col xs={3} md={4} className="d-flex align-items-center"  >
                        {!isMobile ? <Image
                            src={`${id === "light"
                                ? "/images/Logo/Logo Dark.svg"
                                : "images/Logo/Logo Light.svg"
                                }`}
                            alt="logo"
                        /> : <Image src="/icons/mobile-logo.svg" />}
                    </Col>

                    <Col md={4} className="d-none d-lg-flex justify-content-center">
                        <nav className=" d-flex  m-0 ">
                            <div className="nav-link cursor-pointer ">
                                <a>Home</a>
                            </div>
                            <div onClick={() => scrollToSection(workRef)} className="nav-link cursor-pointer mx-5">
                                <a>Work</a>
                            </div>
                            <div onClick={() => scrollToSection(contactRef)} className="nav-link cursor-pointer ">
                                <a>Contact</a>
                            </div>
                        </nav>
                    </Col>


                    <Col xs={9} md={4} className="d-flex justify-content-end pe-0 ">
                        <button id='requestProject' onClick={() => setModalShow(true)} className={` ${id === "light" ? 'btn-light' : 'btn-dark'} t  p-0 px-md-3 py-md-2  ${isMobile && "bg-white"}`}> Request a
                            project <AiOutlineArrowRight />
                        </button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Header;
