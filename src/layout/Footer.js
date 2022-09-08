import {Button, Col, Container, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";


function Footer() {

    return (
        <div>
            <div className="bg-black">
                <Container>
                    <Row className="py-5 align-items-center">
                        <Col md={8} className="py-5">
                            <h1 className='text-white '>
                                <span className='fw-bold'>Have something in mind?</span>
                                <br/>
                                Let’s build it together
                            </h1>
                            <Button className="btn btn-footer fw-normal cursor-pointer my-4">Get in touch<BsArrowRight
                                className="ms-2"/></Button>
                        </Col>
                        <Col md={4} className="py-5">
                            <div className="d-flex flex-column flex-lg-row m justify-content-between">
                                <div className="contact-details text-white">
                                    <p className='fw-normal opacity-50'>CONTACT DETAILS</p>
                                    <p className='text-decoration-underline'>info@milosmiljanovic.com</p>
                                    <p>Bosnia & Herzegovina</p>
                                </div>
                                <div className="social text-white mt-3 mt-md-0">
                                    <p className='fw-normal opacity-50'>SOCIAL</p>
                                    <p className='cursor-pointer'>Dribble</p>
                                    <p className='cursor-pointer'>LinkedIn</p>
                                    <p className='cursor-pointer'>Instagram</p>
                                    <p className='cursor-pointer'>Facebook</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className=" fw-normal opacity-50 text-center pb-5 text-white">
                        Copyright © 2022 Design by Miloš Miljanović
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Footer