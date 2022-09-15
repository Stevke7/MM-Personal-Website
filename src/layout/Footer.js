import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import {useMediaQuery} from "react-responsive";


function Footer() {
    const isMobile = useMediaQuery({query: `(max-width: 525px)`});
    return (
        <div>
            <div className="bg-black">
                {!isMobile ?
                    <Container>
                        <Row className="py-5 align-items-center">
                            <Col md={8} className="py-5">
                                <h1 className='text-white '>
                                    <span className='fw-bold'>Have something in mind?</span>
                                    <br/>
                                    Let’s build it together
                                </h1>
                                <Button className="btn btn-footer fw-normal cursor-pointer my-4">Get in
                                    touch<BsArrowRight
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
                    </Container> :
                    <Container>
                        <Row className="py-5 align-items-center">
                            <Col md={12} className="py-5  ">
                                <h1 className='text-white text-center '>
                                    <span className='fw-bold'>Have something in mind?</span>
                                    <br/>
                                    Let’s build it together
                                </h1>
                                <div className="w-100 d-flex justify-content-center">
                                    <Button className="btn text-center  btn-footer fw-normal cursor-pointer my-4">Get in
                                        touch<BsArrowRight
                                            className="ms-2"/>
                                    </Button>
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="d-flex flex-column flex-lg-row m justify-content-between">
                                        <div className="contact-details text-white text-center">
                                            <p className='fw-normal opacity-50'>CONTACT DETAILS</p>
                                            <p className='text-decoration-underline'>info@milosmiljanovic.com</p>
                                            <p>Bosnia & Herzegovina</p>
                                        </div>
                                        <div className="social text-white mt-3 mt-md-0 text-center">
                                            <p className='fw-normal my-4 opacity-50'>SOCIAL</p>
                                            <Image className="w-3" src="/icons/mobile-behance.svg"></Image>
                                            <Image className="mx-3 w-3" src="/icons/mobile-Dribbble.svg"></Image>
                                            <Image className='w-3' src="/icons/mobile-LinkedIn.svg"></Image>
                                            <Image className="mx-3 w-3" src="/icons/mobile-Instagram.svg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                        </Row>
                        <div className=" fw-normal opacity-50 text-center pb-5 text-white">
                            Copyright © 2022 Design by Miloš Miljanović
                        </div>
                    </Container>
                }
            </div>

        </div>
    )
}

export default Footer