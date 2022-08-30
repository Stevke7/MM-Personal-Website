import {Button, Col, Container, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import {Table} from "@mui/material";

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
                            <div className="d-flex  justify-content-between">
                                <div className="contact-details text-white">
                                    <p>CONTACT DETAILS</p>
                                    <p>info@milosmiljanovic.com</p>
                                    <p>Bosnia & Herzegovina</p>
                                </div>
                                <div className="social text-white">
                                    <p>SOCIAL</p>
                                    <p className='cursor-pointer'>Dribble</p>
                                    <p className='cursor-pointer'>LinkedIn</p>
                                    <p className='cursor-pointer'>Instagram</p>
                                    <p className='cursor-pointer'>Facebook</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className=" text-center pb-5 text-white">
                        Copyright © 2022 Design by Miloš Miljanović
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Footer