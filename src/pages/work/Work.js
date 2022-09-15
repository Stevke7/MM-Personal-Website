import {Col, Container, Row, Card, Image} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import {useHistory, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Work() {
    let navigate = useNavigate()
    const isMobile = useMediaQuery({query: `(max-width: 850px)`});

    return (
        <>
            <Container>
                {!isMobile &&
                    <>
                        <div className="w-75 m-auto mt-4">
                            <h1 className='text-center my-5'>A selection of my work that has
                                helped clients
                                across the entire web</h1>
                        </div>
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <div onClick={() => navigate("/work/cheetah")} className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                        <div className='overlay-text'>
                                            <h4>Cheetah Athletics</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>

                                    </Card.Body>

                                </Card>
                                <Card>
                                    <div className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                        <div className='overlay-text'>
                                            <h4>Cheetah Athletics</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                        <div className='overlay-text'>
                                            <h4>Cheetah Athletics</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="m-top">
                                <Card>
                                    <div className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/energy.png"/>
                                        <div className='overlay-text'>
                                            <h4>Energy</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                        <div className='overlay-text'>
                                            <h4>Cheetah Athletics</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div className='card-overlay'>
                                        <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                        <div className='overlay-text'>
                                            <h4>Cheetah Athletics</h4>
                                            <p>Go to case study</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className="text-center">
                                                <h4>Cheetah Athletics</h4>
                                                <p>Sports & apparel club logo and branding</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} className='my-5 py-5'>
                                <div className="m-auto text-center">
                                    <h3>Like what you see?</h3>
                                    <h3>Explore my artwork on <span
                                        className="text-primary cursor-pointer">Behance</span></h3>

                                </div>
                                <Image className="w-100 mt-3" src="/images/placeholder.png"/>
                            </Col>
                        </Row>
                    </>}
                {isMobile &&
                    <>
                        <div className=" m-auto mt-4">
                            <h1 className='text-center my-5'>A selection of my work that has
                                helped clients
                                across the entire web</h1>
                        </div>
                        <Card>
                            <div className='card-overlay'>
                                <Card.Img className='w-100 h-100' variant="top" src="/images/chitah.png"/>
                                <div className='overlay-text'>
                                    <h4>Cheetah Athletics</h4>
                                    <p>Go to case study</p>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div className="text-center">
                                        <h4>Cheetah Athletics</h4>
                                        <p>Sports & apparel club logo and branding</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className='card-overlay'>
                                <Card.Img className='w-100 h-100' variant="top" src="/images/energy.png"/>
                                <div className='overlay-text'>
                                    <h4>Energy</h4>
                                    <p>Go to case study</p>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div className="text-center">
                                        <h4>Cheetah Athletics</h4>
                                        <p>Sports & apparel club logo and branding</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/chitah.png"/>
                            <Card.Body>
                                <Card.Text>
                                    <div className="text-center">
                                        <h4>Cheetah Athletics</h4>
                                        <p>Sports & apparel club logo and branding</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </>

                }
            </Container>
        </>
    )

}

export default Work